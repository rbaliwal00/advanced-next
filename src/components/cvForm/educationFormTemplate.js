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


const EducationFormTemplate = ({ index, formikProps, expanded, onAccordionChange, onDelete }) => {

  const isMobile = useMediaQuery('(max-width:600px)');

  console.log('asdfjasdflkjsd',formikProps.value)
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
            {formikProps.values.education[index].institution_name===''?'Name of Institution':formikProps.values.education[index].institution_name}, 
            {!formikProps.values.education[index].to_date ?' Passout Years':formikProps.values.education[index].to_date}
          </Typography>
          {
            !isMobile && 
            <IconButton onClick={() => onDelete(index)}>
              <DeleteOutlineIcon style={{ color: '#8899A8' }} />
            </IconButton>
          }
          
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Box>
          <MaterialUIFieldAdapter
              fromik={formikProps}
              name={`education.${index}.institution_name`}
            type="text"
            label="Name of Institution"
            placeholder="Type"
          />
          <MaterialUIFieldAdapter
              fromik={formikProps}
              type="select"
            name={`education.${index}.study_field`}
            label="Education Type"
            options={[{ value: 'Field 1', label: 'Field 1' }, { value: 'city2', label: 'City 2' }]} // Populate according to your data
          />
          <MaterialUIFieldAdapter
              fromik={formikProps}
              name={`education.${index}.cgpa`}
            type="text"
            label="Add CGPA/Percentage (Optional)"
            placeholder="Type"
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
              type="date"
              name={`education.${index}.from_date`}
              label="From"
              fromik={formikProps}
            />
            <MaterialUIFieldAdapter
              type="date"
              name={`education.${index}.to_date`}
              label="To"
              fromik={formikProps}
            />
          </Box>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}

EducationFormTemplate.propTypes = {
  index: PropTypes.number.isRequired,
  formikProps: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onAccordionChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default EducationFormTemplate;
