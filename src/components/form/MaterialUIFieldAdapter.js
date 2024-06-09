import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Box,
  Typography,
  MenuItem,
  Select,
  Card,
  CardContent,
  Radio,
  RadioGroup
} from "@mui/material";
import CustomDatePicker from "./CustomCalendarBtn";
import { connect, getIn } from "formik";
import moment from "moment";
import ImageUploadButton from "./ImgUploadBtn";
import GstInputComponent from "./UploadCard";
import Image from "next/image";
import CityAutoComplete from "../cities/CityAutoComplete";
import { getInitialValue, responsiveFontSize } from "./utilities";
import CatergoryAutoComplete from "@components/category/CatergoryAutoComplete";

const filePropType =
  typeof window !== "undefined" && typeof File !== "undefined"
    ? PropTypes.instanceOf(File).isRequired
    : PropTypes.any;

const MaterialUIFieldAdapter = ({
  formik,
  type,
  name,
  label,
  placeholder,
  rowRadio = true,
  options,
  value,
  style,
  radioImg,
  docType,
  isSmallScreen = false,
  subCategoryName,
  positionName,
  maxMultipleLength = 5,
  isDob
}) => {
  const { organization_auth_map, profile } = formik.values;
  const profileData = profile?.data || {};
  const { nature_of_business: businessNature, image_url: orgImgUrl, gst_pan, suppliers }= organization_auth_map?.data.organization?.data || {}
  const newInitialValue =  businessNature?.length >0 ? getInitialValue(businessNature) : []
  const [ selected, setSelected] = useState(newInitialValue ?? [])
  const [areaList, setAreaList] = useState(getInitialValue(suppliers?.data?.coverage_area_list) ?? [])

  const handleChange = (event) => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    formik.setFieldValue(name, value);
  };

  const handleAutocompleteChange = (value) => {
    formik.setFieldValue(name, value);
  }

  const profileImgValue = () => {
    const isImgValid = (profileData?.image_url || orgImgUrl)
    if(isImgValid){
      return (name == 'organization_auth_map.data.organization.data.image_url') ? orgImgUrl : profileData.image_url;
    }else return ''
  }

  const gstPanImgValue = () => {
    const { gst, pan} = gst_pan.data;
    const isImgValid = (gst || pan)
    if (isImgValid) {
      return (name == 'organization_auth_map.data.organization.data.gst_pan.data.gst') ? gst : pan;
    } else return ''
  }

  const radioValue = () => {
    const isValidId = (profileData?.preference?.data?.aadhar || profileData?.preference?.data?.passport)
    const aadharValueLength = profileData?.preference?.data?.aadhar.length;
    if (isValidId){
      const tempValue = (aadharValueLength > 0) ? 'aadhar' : 'passport';
      formik.values.idType = tempValue
      return tempValue
    }else return value
  }

  const handleMultipleSelect = (event) => {
    if (name == 'organization_auth_map.data.organization.data.suppliers.data.coverage_area_list'){
      const newValues = event.target.value.filter(value => !areaList.includes(value));
      const updatedSelected = areaList.length > 0 ? [...areaList, ...newValues] : [...newValues];     
        setAreaList(updatedSelected)
        formik.setFieldValue(name, updatedSelected);
    }else if(name.includes('language')){
      
      const newValues = event.target.value.filter(value => !selected.includes(value));
      console.log("cehck select values here", selected, newValues, maxMultipleLength);
      if (selected.length + newValues.length <= maxMultipleLength) {
        const updatedSelected = selected.length > 0 ? [...selected, ...newValues] : [...newValues];
        setSelected(updatedSelected);
        formik.setFieldValue(name, updatedSelected);
      }
    }
    else{
      const newValues = event.target.value.filter(value => !selected.includes(value));
      if (selected.length + newValues.length <= maxMultipleLength) {
        const updatedSelected = selected.length > 0 ? [...selected, ...newValues] : [...newValues];
        setSelected(updatedSelected);
        formik.setFieldValue(name, updatedSelected);
      }
    }
  };

  const handleBooleanValueChange = (event) => {
    const value = event.target.value === 'true';
    formik.setFieldValue(name, value);
  };

  const handleBlur = () => {
    formik.setFieldTouched(name, true);
  };

  const renderComponent = () => {
    const { values, errors, touched } = formik;
    const value = getIn(values, name);
    const error = getIn(errors, name);
    const touch = getIn(touched, name);

    switch (type) {
      case "text":
      case "number":
      case "email":
        return (
          <Box alignSelf={"center"} sx={{ mb: "24px" }} fontFamily={''}>
            {label && (
              <Typography
                textAlign={"left"}
                color={"#9CA3AF"}
                sx={[{ responsiveFontSize }, { mb: '8px' }]}
              >
                {label}
              </Typography>
            )}
            <TextField
              type={type}
              fullWidth
              sx={[
                {
                  background: "white",
                  width: "100%",
                  borderRadius: "6px",
                  maxHeight: "48px",
                  borderWidth: 1,
                  borderColor: "#F3F4F6",
                  "& .MuiInputBase-root": {
                    borderColor: "#F3F4F6", // Default border color
                    "&.Mui-focused": {
                      borderColor: "#113B73", // Border color when focused
                    },
                    "&.Mui-error": {
                      borderColor: "#f44336", // Border color when error
                    },
                  },
                  "& .MuiInputBase-input": {
                    color: "#4B5563", // Changes the text color
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "#D1D5DB", // Changes the placeholder color
                  },
                  background: '#fff'
                },
                { ...style },
              ]}
              name={name}
              value={value || ""}
              InputLabelProps={{ shrink: false }}
              placeholder={placeholder}
              inputProps={{ maxlength: type === 'number' ? 10 : 100 }}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touch && Boolean(error)}
              helperText={touch && error}
              FormHelperTextProps={{
                textAlign: "left", // This style will align the helper text to the right
              }}
            />
          </Box>
        );
      case "textarea":
        return (
          <Box alignSelf={"center"} fullWidth sx={{ mb: "24px" }}>
            {label && (
              <Typography sx={responsiveFontSize} textAlign={"left"}>
                {label}
              </Typography>
            )}
            <TextField
              multiline
              maxRows={5}
              fullWidth
              sx={{
                minWidth: "328px",
                borderRadius: "6px",
                maxHeight: "120px",
                "& .MuiInputBase-input": {
                  color: "#4B5563", // Changes the text color
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "#D1D5DB", // Changes the placeholder color
                },
                background: '#fff'
              }}
              name={name}
              value={value || ""}
              placeholder={placeholder}
              onChange={handleChange}
              onBlur={handleBlur}
              inputProps={{
                maxLength: 50,
              }}
              helperText={`${(value || '').length}/50`}
              FormHelperTextProps={{
                xs: { textAlign: "right" }, // This style will align the helper text to the right
              }}
              error={touch && Boolean(error)}
            />
          </Box>
        );

      case "checkbox":
        return (
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={value || false}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name={name}
                />
              }
              label={label}
            />
          </FormGroup>
        );

      case "select":
        return (
          <Box alignSelf={"center"} sx={{ mb: "24px" }}>
            {label && (
              <Typography
                sx={[responsiveFontSize, { mb: '8px' }]}
                textAlign={"left"}
                color={"#9CA3AF"}
              >
                {label}
              </Typography>
            )}
            <Select
              fullWidth
              sx={{
                borderRadius: "6px",
                maxHeight: "48px",
                border: "1px solid #D1D5DB", // Adding border to match screenshot
                "& .MuiSelect-select": {
                  color: "#4B5563", // Changes color based on if value is selected
                },
                "& .MuiInputBase-root": {
                  color: "#D1D5DB", // Placeholder and input text color
                  "&.Mui-focused": {
                    color: "#113B73", // Color when the select is focused
                    borderColor: "#113B73", // Border color when focused
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "#9CA3AF", // Label color
                  "&.Mui-focused": {
                    color: "#113B73", // Color when the select is focused
                  },
                },
                "& .MuiMenuItem-root": {
                  "&.Mui-selected": {
                    backgroundColor: "#113B73", // Background color for selected item
                    color: "#fff", // Text color for selected item
                    "&:hover": {
                      backgroundColor: "#174291", // Darker on hover
                    },
                  },
                  "&:hover": {
                    backgroundColor: "#e0e0e0", // Background color on hover for items
                    color: "#113B73", // Text color change on hover
                  },
                },
              }}
              name={name}
              value={value || ""}
              onChange={handleChange}
              onBlur={handleBlur}
              displayEmpty
              error={touch && Boolean(error)}
              placeholder="Select"
            >
              {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  <Typography>{option.label}</Typography>
                </MenuItem>
              ))}
            </Select>
            {touch && error && <Typography color="error">{error}</Typography>}
          </Box>
        );

      case "multiselect":
        return (
          <Box alignSelf={"center"} fullWidth sx={{ mb: "24px" }}>
            {label && (
              <Typography
                sx={responsiveFontSize}
                textAlign={"left"}
                color={"#9CA3AF"}
              >
                {label}
              </Typography>
            )}
            <Select
              multiple
              fullWidth
              sx={{ borderRadius: "6px", maxHeight: "48px", overflow: "auto" }}
              name={name}
              value={(name === 'organization_auth_map.data.organization.data.suppliers.data.coverage_area_list') ? areaList : selected} // Ensure the value is an array for multiple selections
              onChange={handleMultipleSelect}
              onBlur={handleBlur}
              renderValue={(selected) =>
                Array.isArray(selected)
                  ? selected
                    .map(
                      (item) =>
                        (
                          options.find((option) => option.value === item) ||
                          {}
                        ).label,
                    )
                    .join(", ")
                  : selected
              }
              error={touch && Boolean(error)}
            >
              {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  <Typography>{option.label}</Typography>
                </MenuItem>
              ))}
            </Select>
            {touch && error && <Typography color="error">{error}</Typography>}
          </Box>
        );

      case "date":
        return (
          <Box alignSelf={"center"} fullWidth sx={{ mb: "24px" }}>
            <CustomDatePicker
              label={label}
              value={getIn(formik.values, name)}
              onChange={(date) => {
                formik.setFieldValue(
                  name,
                  date,
                );
              }}
              isDob={isDob}
              onBlur={handleBlur}
              placeholder={placeholder || "YYYY-MM-DD"}
            />
            {touch && error && <Typography color="error">{error}</Typography>}
          </Box>
        );

      case "radio":
        return (
          <Box alignSelf={"center"} fullWidth sx={{ mb: "24px" }}>
            {label && (
              <Typography
                style={responsiveFontSize}
                textAlign={"left"}
                color={"#9CA3AF"}
              >
                {label}
              </Typography>
            )}
            <RadioGroup
              name={name}
              sx={{ width: "100%", justifyContent: "space-between" }}
              value={radioValue()}
              onChange={handleChange}
              onBlur={handleBlur}
              row={rowRadio} // Set 'row' to true if you want horizontal layout
            >
              {options.map((option) => (
                <FormControlLabel
                  key={option.value}
                  value={option.value}
                  control={<Radio />}
                  sx={{
                    "& .MuiTypography-root": {
                      // This targets the label Typography component
                      color: value === option.value ? "#113B73" : "#D1D5DB", // Conditional coloring
                    },
                    "& .MuiRadio-root": {
                      color: "#D1D5DB", // Default unchecked color for the radio button
                      "&.Mui-checked": {
                        color: "#113B73", // Checked color for the radio button
                      },
                    },
                  }}
                  label={option.label}
                />
              ))}
            </RadioGroup>
            {touch && error && <Typography color="error">{error}</Typography>}
          </Box>
        );

      case "file":
        return (
          <Box alignSelf={"center"} fullWidth sx={{ mb: "24px" }}>
            <ImageUploadButton
              onFileSelect={(file) => {
                // Update the Formik state with the file object
                formik.setFieldValue(name, file);
              }}
              valueUrl={profileImgValue()}
              label={label}
            />
            {touch && error && <Typography color="error">{error}</Typography>}
          </Box>
        );

      case 'radioCard':
        return (
          <Card variant="outlined" sx={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', py: '16px', mb: '8px', background: '#113B73', px: { xs: '8px', sm: '16px' }, borderRadius: '10px', maxHeight: {
              xs: '80px',
              sm: '88px'
            }
          }}>
            <CardContent sx={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Typography variant="subtitle1" color={'#fff'} fontWeight={'bold'} fontFamily={'Poppins'}>{label}</Typography>
              <RadioGroup
                row
                name={name}
                value={value !== undefined ? value.toString() : ''}
                onChange={handleBooleanValueChange}
                sx={{ justifyContent: 'space-between', maxWidth: isSmallScreen ? '100%' : '67%' }}
              >
                {options.map(option => (
                  <FormControlLabel
                    key={option.value}
                    value={option.value.toString()}
                    control={<Radio sx={{ color: '#fff', '&.Mui-checked': { color: '#fff' } }} />}
                    label={<Typography sx={{ color: '#fff' }}>{option.label}</Typography>}
                    sx={{ mr: 2 }}
                  />
                ))}
              </RadioGroup>
            </CardContent>
            <Box sx={{ maxWidth: '72px', maxHeight: '72px', display: isSmallScreen ? 'none' : 'flex', justifyContent: 'center', alignItems: 'center', }} >
              {/* Placeholder for image or icon */}
              <Image src={radioImg} alt="icon" style={{ width: '100%', maxHeight: '64px' }} />
            </Box>
          </Card>
        );

      case 'documentFile':
        return (
          <Box alignSelf={"center"} fullWidth sx={{ mb: "24px" }}>
            <GstInputComponent
              onFileSelect={(file) => {
                // Update the Formik state with the file object
                formik.setFieldValue(name, file);
              }}
              docType={docType}
              valueUrl={gstPanImgValue()}
            />
            {touch && error && <Typography color="error">{error}</Typography>}
          </Box>
        );
      case "autocomplete":
        return (
          <Box alignSelf={"center"} sx={{ mb: "24px" }} fontFamily={''}>
            {label && (
              <Typography
                textAlign={"left"}
                color={"#9CA3AF"}
                sx={[{ responsiveFontSize }, { mb: '8px' }]}
              >
                {label}
              </Typography>
            )}
            <CityAutoComplete
              type={type}
              multiple={maxMultipleLength > 0 ? true : false}
              maxMultipleLength={maxMultipleLength}
              fullWidth
              sx={[
                {
                  background: "white",
                  width: "100%",
                  borderRadius: "6px",
                  maxHeight: "48px",
                  borderWidth: 1,
                  borderColor: "#F3F4F6",
                  "& .MuiInputBase-root": {
                    borderColor: "#F3F4F6", // Default border color
                    "&.Mui-focused": {
                      borderColor: "#113B73", // Border color when focused
                    },
                    "&.Mui-error": {
                      borderColor: "#f44336", // Border color when error
                    },
                  },
                  "& .MuiInputBase-input": {
                    color: "#4B5563", // Changes the text color
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "#D1D5DB", // Changes the placeholder color
                  },
                  background: '#fff'
                },
                { ...style },
              ]}
              name={name}
              value={value || ""}
              InputLabelProps={{ shrink: false }}
              placeholder={placeholder}
              inputProps={{ maxlength: type === 'number' ? 10 : 100 }}
              onChange={handleAutocompleteChange}
              onBlur={handleBlur}
              error={touch && Boolean(error)}
              helperText={touch && error}
              FormHelperTextProps={{
                textAlign: "left", // This style will align the helper text to the right
              }}
            />
          </Box>
        );

      case "categoryAutocomplete":
        return (
          <CatergoryAutoComplete
            departmentName={name}
            subCategoryName={subCategoryName}
            positionName={positionName}
            onChange={(values) => {
              formik.setFieldValue(values.departmentName, values.department);
              formik.setFieldValue(values.subCategoryName, values.subCategory);
              formik.setFieldValue(values.positionName, values.position);
            }}
            onBlur={handleBlur}
            maxMultipleLength
            error={touch && Boolean(error)}
            helperText={touch && error}
            FormHelperTextProps={{
              textAlign: "left", // This style will align the helper text to the right
            }}
          />
        );

      default:
        return <div>Unsupported type</div>;
    }
  };

  return renderComponent();
};

MaterialUIFieldAdapter.propTypes = {
  formik: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  rowRadio: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
      ]).isRequired,
    }),
  ),
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object, // For date or complex objects
    PropTypes.array, // for multiSelect
    filePropType, // For file inputs
  ]),
  style: PropTypes.object,
  radioImg: PropTypes.string,
  docType: PropTypes.string,
  isSmallScreen: PropTypes.bool
};

MaterialUIFieldAdapter.defaultProps = {
  rowRadio: true, // Default value if not provided
  isSmallScreen: false
};

export default connect(MaterialUIFieldAdapter);
