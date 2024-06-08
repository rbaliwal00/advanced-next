import { Autocomplete, TextField } from "@mui/material";
import { graphql } from "@apollo/client/react/hoc";
import LISTS from "./cities.graphql";
import { compose } from "@modules/common";
import { useEffect, useState } from "react";
import debounce from "lodash/debounce";

const withCities = (Component) =>
  graphql(LISTS, {
    options: () => {
      return {
        variables: {
          limit: 10,
          _ilike: "%%",
        },
      };
    },
    props: ({ data }) => {
      const { loading, error, cities, refetch, fetchMore } = data;
      const loadMoreCities = (text) => {
        return fetchMore?.({ variables: { limit: 10, _ilike: `${text}%` } });
      };

      if (error) throw new Error(error.message);
      return {
        loading,
        cities,
        refetch,
        loadMoreCities,
      };
    },
  })(Component);

const CityAutoComplete = (props) => {
  const { loadMoreCities, cities, onChange, multiple, maxMultipleLength, ...rest } = props;
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState('' || []);
  const [options, setOptions] = useState(
    cities?.map((i) => ({ label: i.city })) ?? [],
  );
  useEffect(() => {
    if (!loading) {
      setOptions(cities?.map((i) => ({ label: i.city })) ?? []);
    }
  }, [loading]);

  const handleChange = (event, value, reason) => {
    if (reason == 'selectOption'){
      setValue(value.label)
      onChange(value.label)
    }
  }

  const handleInputChange = debounce(async (e, value, re) => {
    if (re === 'input' && value.length > 0){     
      const newCities = (await loadMoreCities(e.target.value))?.data?.cities ?? [];
      setOptions(newCities?.map((i) => ({ label: i.city })) ?? []);
    }
  }, 500)

  return (
    <Autocomplete
      disablePortal
      id="combo-box-cities"
      //multiple={maxMultipleLength > 0 ? true : false}
      options={options}
      value={value}
      fullWidth
      onInputChange={handleInputChange}
      renderInput={(params) => <TextField {...params} />}
      {...rest}
      onChange={handleChange}
    />
  );
};

export default compose(withCities)(CityAutoComplete);
