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
  const { loadMoreCities, cities, ...rest } = props;
  const [loading, setLoading] = useState(true);
  const [options, setOptions] = useState(
    cities?.map((i) => ({ label: i.city })) ?? [],
  );
  useEffect(() => {
    if (!loading) {
      setOptions(cities?.map((i) => ({ label: i.city })) ?? []);
    }
  }, [loading]);

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      fullWidth
      onInputChange={debounce(async (e, value, re) => {
        console.log("check event here--", e, value, re);
        const newCities =
          (await loadMoreCities(e.target.value))?.data?.cities ?? [];
        setOptions(newCities?.map((i) => ({ label: i.city })) ?? []);
      }, 500)}
      renderInput={(params) => <TextField {...params} />}
      {...rest}
      onChange={(e,value) => console.log("check value to be sent", value)}
    />
  );
};

export default compose(withCities)(CityAutoComplete);
