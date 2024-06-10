import React from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import MaterialUIFieldAdapter from '@components/form/MaterialUIFieldAdapter';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Box, Typography, IconButton } from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { useMediaQuery } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const ExperiencedFormTemplate = ({ index, formikProps, expanded, onAccordionChange, onDelete }) => {

  const isMobile = useMediaQuery('(max-width:600px)');


  return (
    <Accordion 
    expanded={expanded}
    onChange={onAccordionChange}
    className='border rounded-xl border-solid border-[#8899A8] ' style={{ borderRadius: '12px',marginBottom: '1rem' }}>
      <AccordionSummary
        expandIcon={<MoreVertIcon/> }
        aria-controls={`panel${index}-content`}
        id={`panel${index}-header`}
        sx={{
            '& .MuiAccordionSummary-content': {
              margin: 0,
            }
        }}
      >
        <Box display={'flex'} justifyContent={'space-between'} width={'100%'} alignItems={'center'}  >
          <Typography color={'#113B73'}>
            {formikProps.values.experience[index].job_type===''?'Job Type':formikProps.values.experience[index].job_type}, 
            {!formikProps.values.experience[index].position ?' Position':formikProps.values.experience[index].position},
            {!formikProps.values.experience[index].from_date ?' From':formikProps.values.experience[index].from_date},
            {!formikProps.values.experience[index].to_date ?' to':formikProps.values.experience[index].to_date},
          </Typography>
            <IconButton onClick={() => onDelete(index)}>
              <DeleteOutlineIcon style={{ color: '#8899A8' }} />
            </IconButton>
          
          
        </Box>
      </AccordionSummary>
      <AccordionDetails> 
        <Box> 
          <MaterialUIFieldAdapter
              fromik={formikProps}
              type="select"
            name={`experience.${index}.type`}
            label="Job Type"
            options={[{ value: 'oneDay', label: 'One day' }, { value: 'internship', label: 'Internship' }, { value: 'partTime', label: 'Part time' }, { value: 'fullTime', label: 'Full time' }]} // Populate according to your data
          />
          <MaterialUIFieldAdapter
              fromik={formikProps}
              name={`experience.${index}.brand_name`}
            type="text"
            label="Brand Name"
            placeholder="Type"
          />
          <MaterialUIFieldAdapter
              type="categoryAutocomplete"
              name={`experience.${index}.department`}
              departmentName={`experience.${index}.department`}
              subCategoryName={`experience.${index}.sub_category`}
              positionName={`experience.${index}.position`}
              customValue={
                {
                  department: formikProps.values.experience[index].department,
                  subCategory: formikProps.values.experience[index].sub_category,
                  position: formikProps.values.experience[index].position
                }
              }
          />
          <Box 
            display={'flex'} 
            gap={'1rem'}
            sx={{
              flexDirection:{
                xs: "column",
                sm: "row",
              }
            }}
          >
            <MaterialUIFieldAdapter
              formik={formikProps}
              type="autocomplete"
              name={`experience.${index}.city`}
              label="City"
              placeholder="City"
            />
            <MaterialUIFieldAdapter
              fromik={formikProps}
              type="number"
              name={`experience.${index}.monthly_salary_text`}
              label="Salary"
            // options={[{ value: 'city1', label: 'City 1' }, { value: 'city2', label: 'City 2' }]} // Populate according to your data
          />
          </Box>
          <Box 
            display={'flex'} 
            gap={'1rem'}
            sx={{
              flexDirection:{
                xs: "column",
                sm: "row",
              }
            }}
          >
            <MaterialUIFieldAdapter
              type="date"
              name={`experience.${index}.from_date`}
              label="From"
              fromik={formikProps}
            />
            <MaterialUIFieldAdapter
              type="date"
              name={`experience.${index}.to_date`}
              label="To"
              fromik={formikProps}
            />
          </Box>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}

ExperiencedFormTemplate.propTypes = {
  index: PropTypes.number.isRequired,
  formikProps: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onAccordionChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ExperiencedFormTemplate;
