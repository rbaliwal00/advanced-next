import MaterialUIFieldAdapter from "@components/form/MaterialUIFieldAdapter";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, IconButton, Typography, useMediaQuery } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import PropTypes from "prop-types";
import React from "react";

const AwardFormTemplate = ({
  index,
  formikProps,
  expanded,
  onAccordionChange,
  onDelete,
}) => {
  const isMobile = useMediaQuery("(max-width:600px)");
  console.log("hi ajith kumar =>", formikProps.values);

  return (
    <Accordion
      expanded={expanded}
      onChange={onAccordionChange}
      className="border rounded-xl border-solid border-[#8899A8] "
      style={{ borderRadius: "12px", marginBottom: "1rem" }}
    >
      <AccordionSummary
        expandIcon={<MoreVertIcon />}
        aria-controls={`panel${index}-content`}
        id={`panel${index}-header`}
        sx={{
          "& .MuiAccordionSummary-content": {
            margin: 0,
          },
        }}
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          width={"100%"}
          alignItems={"center"}
        >
          <Typography color={"#113B73"}>
            {formikProps.values.awards[index].awardTitle === ""
              ? "Award Title"
              : formikProps.values.awards[index].awardTitle}
            ,
            {!formikProps.values.awards[index].brandName
              ? " Brand Name"
              : formikProps.values.awards[index].brandName}
          </Typography>
          {!isMobile && (
            <IconButton onClick={() => onDelete(index)}>
              <DeleteOutlineIcon style={{ color: "#8899A8" }} />
            </IconButton>
          )}
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Box>
          <MaterialUIFieldAdapter
            fromik={formikProps}
            type="text"
            name={`awards.${index}.awardTitle`}
            label="Award/Certification Title"
          />
          <MaterialUIFieldAdapter
            fromik={formikProps}
            name={`awards.${index}.brandName`}
            type="text"
            label="Brand Name"
            placeholder="Type"
          />
          <MaterialUIFieldAdapter
            fromik={formikProps}
            type="select"
            name={`awards.${index}.department`}
            label="Department"
            options={[
              { value: "city1", label: "City 1" },
              { value: "city2", label: "City 2" },
            ]} // Populate according to your data
          />
          <MaterialUIFieldAdapter
            fromik={formikProps}
            type="select"
            name={`awards.${index}.position`}
            label="Position"
            options={[
              { value: "city1", label: "City 1" },
              { value: "city2", label: "City 2" },
            ]} // Populate according to your data
          />
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

AwardFormTemplate.propTypes = {
  index: PropTypes.number.isRequired,
  formikProps: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onAccordionChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default AwardFormTemplate;
