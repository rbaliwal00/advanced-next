import { Autocomplete, Box, TextField, Typography } from "@mui/material";
import { graphql } from "@apollo/client/react/hoc";
import CATEGORIES from "./categories.graphql";
import { compose } from "@modules/common";
import { useEffect, useState } from "react";
import debounce from "lodash/debounce";
import { responsiveFontSize } from "@components/form/utilities";

const withCategories = (Component) =>
    graphql(CATEGORIES, {
        props: ({ data }) => {
            return { data };
        },
    })(Component);

const CategoryAutoComplete = (props) => {
    const { data, onChange, departmentName, subCategoryName, positionName, ...rest } = props;
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    const [department, setDepartment] = useState(departmentName);
    const [subCategory, setSubCategory] = useState(subCategoryName);
    const [position, setPosition] = useState(positionName);
    const [categoryOptions, setCategoryOptions] = useState([]);
    const [currCategory, setCurrCategory] = useState({ subcategories: [], positions: [] })

    useEffect(() => {
        if (!data.loading) {
            setCategories(data.other_category ?? []);
            setCategoryOptions(data.other_category?.map((i) => ({ label: i.name })) ?? []);
            setLoading(false);
        }
    }, [data.loading, data.other_category]);

    const getCategoryDetails = (searchKey) => {
        const category = categories.find(cat => cat.name === searchKey);
        return category || { subcategories: [], positions: [] };
    }

    const getOptionsArray = (type) => {
        const categoryDetails = getCategoryDetails(department);
        return type === 'positions'
            ? categoryDetails.positions.map((i) => ({ label: i })) ?? []
            : categoryDetails.subcategories.map((i) => ({ label: i })) ?? [];
    }

    const handleDepartmentChange = (event, value) => {
        const departmentValue = value?.label || '';
        const category = getCategoryDetails(value?.label)
        setCurrCategory(category);
        setDepartment(departmentValue);
        setSubCategory('');
        setPosition('');
        onChange({
            departmentName,
            subCategoryName,
            positionName,
            department: departmentValue,
            subCategory: '',
            position: ''
        });
    }

    const handleSubCategoryChange = (event, value) => {
        const subCategoryValue = value?.label || '';
        setSubCategory(subCategoryValue);
        setPosition('');
        onChange({
            departmentName,
            subCategoryName,
            positionName,
            department,
            subCategory: subCategoryValue,
            position: ''
        });
    }

    const handlePositionChange = (event, value) => {
        const positionValue = value?.label || '';
        setPosition(positionValue);
        onChange({
            departmentName,
            subCategoryName,
            positionName,
            department,
            subCategory,
            position: positionValue
        });
    }

    return (
        <Box>
            <Box sx={{ mb: "24px" }}>
                <Typography
                    textAlign={"left"}
                    color={"#9CA3AF"}
                    sx={[{ responsiveFontSize }, { mb: '8px' }]}
                >
                    Department
                </Typography>
                <Autocomplete
                    disablePortal
                    id="combo-box-department"
                    options={categoryOptions}
                    fullWidth
                    multiple={false}
                    renderInput={(params) => <TextField {...params} />}
                    {...rest}
                    onChange={handleDepartmentChange}
                    value={department}
                />
            </Box>
            {currCategory.subcategories.length > 0 && (
                <Box sx={{ mb: "24px" }}>
                    <Typography
                        textAlign={"left"}
                        color={"#9CA3AF"}
                        sx={[{ responsiveFontSize }, { mb: '8px' }]}
                    >
                        Sub Category
                    </Typography>
                    <Autocomplete
                        disablePortal
                        multiple={false}
                        id="combo-box-subcategory"
                        options={getOptionsArray('subcategories')}
                        fullWidth
                        renderInput={(params) => <TextField {...params} />}
                        {...rest}
                        onChange={handleSubCategoryChange}
                        value={subCategory}
                    />
                </Box>
            )}
            <Box sx={{ mb: "24px" }}>
                <Typography
                    textAlign={"left"}
                    color={"#9CA3AF"}
                    sx={[{ responsiveFontSize }, { mb: '8px' }]}
                >
                    Position
                </Typography>
                <Autocomplete
                    disablePortal
                    multiple={false}
                    id="combo-box-position"
                    options={getOptionsArray('positions')}
                    fullWidth
                    renderInput={(params) => <TextField {...params} />}
                    {...rest}
                    onChange={handlePositionChange}
                    value={position}
                />
            </Box>
        </Box>
    );
};

export default compose(withCategories)(CategoryAutoComplete);
