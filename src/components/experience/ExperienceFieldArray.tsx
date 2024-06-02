import React, { useState } from 'react';
import { FieldArray, FieldArrayRenderProps, FormikProps } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from '@mui/material';
import { Add, Delete, Edit } from '@mui/icons-material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useFormik } from 'formik';

interface Experience {
  company: string;
  from: string;
  to: string;
  city: string;
  department: string;
  subCategory: string;
  position: string;
  experienceType: string;
  monthlySalary?: string;
}

interface FormValues {
  experiences: Experience[];
}

interface ExperienceFieldArrayProps extends FormikProps<FormValues> {}

const ExperienceFieldArray: React.FC<ExperienceFieldArrayProps> = ({
  values,
  handleChange,
  handleBlur,
  errors,
  touched,
}) => {
  const [open, setOpen] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleClickOpen = (index: number | null = null) => {
    if (index !== null) {
      formik.setValues(values.experiences[index]);
      setEditIndex(index);
    } else {
      formik.resetForm();
      setEditIndex(null);
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      company: '',
      from: '',
      to: '',
      city: '',
      department: '',
      subCategory: '',
      position: '',
      experienceType: '',
      monthlySalary: '',
    },
    validationSchema: Yup.object({
      company: Yup.string().required('Required'),
      from: Yup.date().required('Required'),
      to: Yup.date().required('Required'),
      city: Yup.string().required('Required'),
      department: Yup.string().required('Required'),
      subCategory: Yup.string().required('Required'),
      position: Yup.string().required('Required'),
      experienceType: Yup.string().required('Required'),
      monthlySalary: Yup.string().when('experienceType', {
        is: 'Full Time',
        then: Yup.string().required('Required'),
        otherwise: Yup.string().notRequired(),
      }),
    }),
    onSubmit: (newExperience) => {
      if (editIndex !== null) {
        arrayHelpers.replace(editIndex, newExperience);
      } else {
        arrayHelpers.push(newExperience);
      }
      setOpen(false);
    },
  });

  return (
    <FieldArray
      name="experiences"
      render={(arrayHelpers: FieldArrayRenderProps) => (
        <div>
          {values.experiences.map((experience, index) => (
            <Card key={index} variant="outlined" sx={{ mb: 2 }}>
              <CardContent>
                <Typography variant="h6">Experience {index + 1}</Typography>
                <Typography>Company: {experience.company}</Typography>
                <Typography>From: {experience.from}</Typography>
                <Typography>To: {experience.to}</Typography>
                <Typography>City: {experience.city}</Typography>
                <Typography>Department: {experience.department}</Typography>
                <Typography>SubCategory: {experience.subCategory}</Typography>
                <Typography>Position: {experience.position}</Typography>
                <Typography>Experience Type: {experience.experienceType}</Typography>
                {experience.experienceType === 'Full Time' && (
                  <Typography>Monthly Salary: {experience.monthlySalary}</Typography>
                )}
                <Box display="flex" justifyContent="space-between" mt={2}>
                  <IconButton
                    color="primary"
                    onClick={() => handleClickOpen(index)}
                  >
                    <Edit />
                  </IconButton>
                  <IconButton
                    color="secondary"
                    onClick={() => arrayHelpers.remove(index)}
                  >
                    <Delete />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          ))}
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleClickOpen()}
            startIcon={<Add />}
          >
            Add Experience
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>{editIndex !== null ? 'Edit' : 'Add'} Experience</DialogTitle>
            <DialogContent>
              <form onSubmit={formik.handleSubmit}>
                <FormControl fullWidth margin="normal">
                  <InputLabel id="experienceType-label">Experience Type</InputLabel>
                  <Select
                    labelId="experienceType-label"
                    name="experienceType"
                    value={formik.values.experienceType}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.experienceType && Boolean(formik.errors.experienceType)}
                  >
                    <MenuItem value="Full Time">Full Time</MenuItem>
                    <MenuItem value="Internship">Internship</MenuItem>
                    <MenuItem value="Part Time">Part Time</MenuItem>
                  </Select>
                  {formik.touched.experienceType && formik.errors.experienceType && (
                    <Typography color="error" variant="caption">
                      {formik.errors.experienceType}
                    </Typography>
                  )}
                </FormControl>

                {formik.values.experienceType && (
                  <>
                    <TextField
                      label="Company"
                      name="company"
                      value={formik.values.company}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      fullWidth
                      margin="normal"
                      error={formik.touched.company && Boolean(formik.errors.company)}
                      helperText={formik.touched.company && formik.errors.company}
                    />
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        label="From"
                        name="from"
                        value={formik.values.from}
                        onChange={(value) => formik.setFieldValue('from', value)}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            fullWidth
                            margin="normal"
                            error={formik.touched.from && Boolean(formik.errors.from)}
                            helperText={formik.touched.from && formik.errors.from}
                          />
                        )}
                      />
                      <DatePicker
                        label="To"
                        name="to"
                        value={formik.values.to}
                        onChange={(value) => formik.setFieldValue('to', value)}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            fullWidth
                            margin="normal"
                            error={formik.touched.to && Boolean(formik.errors.to)}
                            helperText={formik.touched.to && formik.errors.to}
                          />
                        )}
                      />
                    </LocalizationProvider>
                    <TextField
                      label="City"
                      name="city"
                      value={formik.values.city}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      fullWidth
                      margin="normal"
                      error={formik.touched.city && Boolean(formik.errors.city)}
                      helperText={formik.touched.city && formik.errors.city}
                    />
                    <TextField
                      label="Department"
                      name="department"
                      value={formik.values.department}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      fullWidth
                      margin="normal"
                      error={formik.touched.department && Boolean(formik.errors.department)}
                      helperText={formik.touched.department && formik.errors.department}
                    />
                    <TextField
                      label="SubCategory"
                      name="subCategory"
                      value={formik.values.subCategory}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      fullWidth
                      margin="normal"
                      error={formik.touched.subCategory && Boolean(formik.errors.subCategory)}
                      helperText={formik.touched.subCategory && formik.errors.subCategory}
                    />
                    <TextField
                      label="Position"
                      name="position"
                      value={formik.values.position}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      fullWidth
                      margin="normal"
                      error={formik.touched.position && Boolean(formik.errors.position)}
                      helperText={formik.touched.position && formik.errors.position}
                    />
                    {formik.values.experienceType === 'Full Time' && (
                      <TextField
                        label="Monthly Salary"
                        name="monthlySalary"
                        value={formik.values.monthlySalary}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        fullWidth
                        margin="normal"
                        error={formik.touched.monthlySalary && Boolean(formik.errors.monthlySalary)}
                        helperText={formik.touched.monthlySalary && formik.errors.monthlySalary}
                      />
                    )}
                  </>
                )}

                <DialogActions>
                  <Button onClick={handleClose} color="secondary">
                    Cancel
                  </Button>
                  <Button type="submit" color="primary">
                    Save
                  </Button>
                </DialogActions>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      )}
    />
  );
};

export default ExperienceFieldArray;
