import MaterialUIFieldAdapter from "@components/form/MaterialUIFieldAdapter";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, IconButton, Typography, useMediaQuery } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import PropTypes from "prop-types";
import React from "react";

const ReferenceFormTemplate = ({
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
            {formikProps.values.references[index].name === ""
              ? "Reference Name"
              : formikProps.values.references[index].name}
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
            name={`references.${index}.name`}
            label="Reference Name"
          />
          <MaterialUIFieldAdapter
            fromik={formikProps}
            name={`references.${index}.phone_number`}
            type="text"
            label="Referral Contact Number"
            placeholder="Type"
          />
          <MaterialUIFieldAdapter
            fromik={formikProps}
            type="text"
            name={`references.${index}.brand_name`}
            label="Brand Name"
          />
          <MaterialUIFieldAdapter
            fromik={formikProps}
            type="text"
            name={`references.${index}.email`}
            label="Add Email (Optional)"
          />
          <MaterialUIFieldAdapter
              type="categoryAutocomplete"
              name={`references.${index}.department`}
              subCategoryName={`references.${index}.sub_category`}
              positionName={`references.${index}.position`}
              customValue={
                {
                  departmentName: formikProps.values.references[index].department,
                  subCategoryName: formikProps.values.references[index].sub_category,
                  positionName: formikProps.values.references[index].position
                }
              }
          />
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

ReferenceFormTemplate.propTypes = {
  index: PropTypes.number.isRequired,
  formikProps: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onAccordionChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ReferenceFormTemplate;
