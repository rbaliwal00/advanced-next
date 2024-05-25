import React, { Component } from "react";
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
  CardContent
} from "@mui/material";
import CustomDatePicker from "./CustomCalendarBtn";
import { connect, getIn } from "formik";
import moment from "moment";
import ImageUploadButton from "./ImgUploadBtn";
import { Radio, RadioGroup } from "@mui/material";
import GstInputComponent from "./UploadCard";
import Image from "next/image";


const responsiveFontSize = {
  fontSize: "14px",
  fontWeight: 600,
  "@media (min-width:600px)": {
    fontSize: "16px",
  },
};

const filePropType =
  typeof window !== "undefined" && typeof File !== "undefined"
    ? PropTypes.instanceOf(File).isRequired
    : PropTypes.any;

class MaterialUIFieldAdapter extends Component {
  static propTypes = {
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
    docType: PropTypes.string
  };

  static defaultProps = {
    rowRadio: true, // Default value if not provided
  };

  handleChange = (event) => {
    const { formik, name } = this.props;
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    formik.setFieldValue(name, value);
  };

  handleBlur = () => {
    const { formik, name } = this.props;
    formik.setFieldTouched(name, true);
  };

  renderComponent = () => {
    const { type, name, label, formik, placeholder, options, rowRadio, style, radioImg, docType } =
      this.props;
    const { values, errors, touched } = formik;
    const value = getIn(values, name);
    const error = getIn(errors, name);
    const touch = getIn(touched, name);

    switch (type) {
      case "text":
      case "number":
      case "email":
        return (
          <Box alignSelf={"center"} sx={{ mb: "24px" }}>
            {label && (
              <Typography
                style={responsiveFontSize}
                textAlign={"left"}
                color={"#9CA3AF"}
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
                  "& .MuiInputBase-input": {
                    color: "#4B5563", // Changes the text color
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "#D1D5DB", // Changes the placeholder color
                  },
                },
                { ...style },
              ]}
              name={name}
              value={value || ""}
              InputLabelProps={{ shrink: false }}
              placeholder={placeholder}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              error={touch && Boolean(error)}
              helperText={touch && error}
            />
          </Box>
        );
      case "textarea":
        return (
          <Box alignSelf={"center"} fullWidth sx={{ mb: "24px" }}>
            {label && (
              <Typography style={responsiveFontSize} textAlign={"left"}>
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
              }}
              name={name}
              value={value || ""}
              placeholder={placeholder}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              inputProps={{
                maxLength: 50,
              }}
              helperText={`${value.length}/50`}
              FormHelperTextProps={{
                sx: { textAlign: "right" }, // This style will align the helper text to the right
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
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
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
                style={responsiveFontSize}
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
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              displayEmpty
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

      case "multiselect":
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
            <Select
              multiple
              fullWidth
              sx={{ borderRadius: "6px", maxHeight: "48px", overflow: "auto" }}
              name={name}
              value={formik.values[name] || []} // Ensure the value is an array for multiple selections
              onChange={this.handleChange}
              onBlur={this.handleBlur}
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
                  date ? moment(date, "DD/MM/YYYY") : "",
                );
              }}
              onBlur={this.handleBlur}
              placeholder={placeholder || "DD/MM/YYYY"}
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
              value={value || ""}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
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
              label={label}
            />
            {touch && error && <Typography color="error">{error}</Typography>}
          </Box>
        );

      case 'radioCard':
        return (
          <Card variant="outlined" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: '16px', mb: '8px', background: '#113B73', borderRadius: '10px', maxHeight: {
            xs: '80px',
            sm: '88px'
          }}}>
            <CardContent sx={{ flexGrow: 1, p: '0px' }}>
              <Typography variant="subtitle1" color={'#fff'}>{label}</Typography>
              <RadioGroup
                row
                name={name}
                value={value || ''}
                onChange={this.handleChange}
                sx={{ justifyContent: 'space-between', maxWidth: '67%' }}
              >
                {options.map(option => (
                  <FormControlLabel
                    key={option.value}
                    value={option.value}
                    control={<Radio sx={{ color: '#fff', '&.Mui-checked': { color: '#fff' } }} />}
                    label={<Typography sx={{ color: '#fff' }}>{option.label}</Typography>}
                    sx={{ mr: 2 }}
                  />
                ))}
              </RadioGroup>
            </CardContent>
            <Box sx={{ ml: 2, maxWidth: '72px', maxHeight: '72px', display: 'flex', justifyContent: 'center', alignItems: 'flex-end'}}>
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
            />
            {touch && error && <Typography color="error">{error}</Typography>}
          </Box>
        );

      default:
        return <div>Unsupported type</div>;
    }
  };

  render() {
    return this.renderComponent();
  }
}

export default connect(MaterialUIFieldAdapter);
