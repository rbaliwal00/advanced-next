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
    const [categories, setCategories] = useState(data.other_category ?? []);
    const [department, setDepartment] = useState('')
    const [subCategory, setSubCategory] = useState('');
    const [position, setPosition] = useState('');
    const [categoryOptions, setCategoryOptions] = useState(
        data.other_category?.map((i) => ({ label: i.name })) ?? [],
    );

    console.log("check categories", categories, categoryOptions)

    useEffect(() => {
        if (!loading) {
            setCategoryOptions(data.other_category?.map((i) => ({ label: i.name })) ?? []);
            setCategories(data.other_category ?? [])
        }
    }, [loading]);
    
    const getCategoryDetails = () => {

        // Find the category by name
        const category = categories.find(cat => cat.name === department);

        // If category is found, return its subcategories and positions
        if (category) {
            return {
                subcategories: category.subcategories,
                positions: category.positions
            };
        } else {
            return {
                subcategories: [],
                positions: []
            };
        }
    }

    const getOptionsArray = (type: string) => {
        if(type === 'positions'){
            return getCategoryDetails().positions.map((i) => ({ label: i })) ?? []
        }else{
            return getCategoryDetails().subcategories.map((i) => ({ label: i })) ?? []
        }
    }

    const handleDepartmentChange = (event, value) => {
        setDepartment(value?.label || '');
        setSubCategory('');
        setPosition('');
        onChange({
            departmentName,
            subCategoryName,
            positionName,
            department: value?.label || '',
            subCategory: '',
            position: ''
        });
    }

    const handleSubCategoryChange = (event, value) => {
        setSubCategory(value?.label || '');
        setPosition('');
        onChange({
            departmentName,
            subCategoryName,
            positionName,
            department,
            subCategory: value?.label || '',
            position: ''
        });
    }

    const handlePositionChange = (event, value) => {
        setPosition(value?.label || '');
        onChange({
            departmentName,
            subCategoryName,
            positionName,
            department,
            subCategory,
            position: value?.label || ''
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
                    id="combo-box-demo"
                    options={categoryOptions}
                    fullWidth
                    renderInput={(params) => <TextField {...params} />}
                    {...rest}
                    onChange={handleDepartmentChange}
                />
            </Box>
           {getCategoryDetails().subcategories.length > 0 ?
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
                        id="combo-box-demo"
                        options={getOptionsArray('positions')}
                        fullWidth
                        renderInput={(params) => <TextField {...params} />}
                        {...rest}
                        onChange={handleSubCategoryChange}
                    />
            </Box> : <></>}
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
                    id="combo-box-demo"
                    options={getOptionsArray('subCategories')}
                    fullWidth
                    renderInput={(params) => <TextField {...params} />}
                    {...rest}
                    onChange={handlePositionChange}
                />
            </Box>
        </Box>
    );
};

export default compose(withCategories)(CategoryAutoComplete);
