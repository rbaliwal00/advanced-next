import { Box } from "@mui/material";
import { Form } from "formik";
import React from "react";
// import MaterialUIFieldAdapter from './MaterialUIFieldAdapter';  // Adjust import path as needed
import award from "@public/assests/awards.svg";
import PropTypes from "prop-types";
import { nextBtn, renderBackButton } from "../form/utilities";
import AddItemsButton from "./addItemsButton";
import AwardFormTemplate from "./awardFormTemplate";

const AwardForm = ({
  onBack,
  isLastStep,
  type,
  step,
  deleteFunction,
  ...formikProps
}) => {
  const initialAwards = {
    awardTitle: "",
    brandName: "",
    department: "",
    position: "",
  };

  const [expandedIndex, setExpandedIndex] = React.useState(false);

  const handleAccordionChange = (index) => (event, isExpanded) => {
    setExpandedIndex(isExpanded ? index : -1);
  };

  const handleAddAward = () => {
    const updatedAwards = [...(formikProps.values.awards ?? []), initialAwards];
    formikProps.setFieldValue("awards", updatedAwards);
    setExpandedIndex(updatedAwards.length - 1);
  };

  const handleDeleteAward = async (index) => {
    const id = formikProps.values.awards[index].id;
    const updatedAwards = [...formikProps.values.awards];
    updatedAwards.splice(index, 1);
    formikProps.setFieldValue("awards", updatedAwards);
    if (expandedIndex === index) {
      setExpandedIndex(-1);
    } else if (expandedIndex > index) {
      setExpandedIndex(expandedIndex - 1);
    }
    if (id) {
      await deleteFunction(id);
    }
  };

  return (
    <Form {...formikProps}>
      <Box
        sx={{
          maxWidth: {
            xs: "100%",
            sm: "608px",
          },
          m: "auto",
          mt: {
            xs: "8px",
            sm: "32px",
          },
          px: {
            xs: "16px",
            sm: "35px",
          },
          py: {
            xs: "16px",
            sm: "30px",
          },
          boxShadow: {
            xs: "none",
            sm: "0px 4px 25px 0px rgba(0, 0, 0, 0.05)",
          },
          borderRadius: {
            xs: "0px",
            sm: "12px",
          },
          bgcolor: "background.paper",
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          sx={{
            justifyContent: {
              xs: "center",
              sm: "flex-start",
            },
            height:
              formikProps.values.education.length !== 0 &&
              {
                //   xs: 'calc(100vh - 14rem)',
                //   sm: 'calc(100vh - 20rem)'
              },
          }}
        >
          {formikProps.values.awards.length === 0 && <img src={award.src} />}
          {formikProps.values.awards.map((_, index) => (
            <Box key={index} width="100%">
              <AwardFormTemplate
                formikProps={formikProps}
                index={index}
                expanded={expandedIndex === index}
                onAccordionChange={handleAccordionChange(index)}
                onDelete={() => handleDeleteAward(index)}
              />
            </Box>
          ))}
          <AddItemsButton
            handleAddFunction={handleAddAward}
            text={"Add Award"}
          />
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          width="100%"
          // sx={{
          //   marginX: {
          //     xs: "20px",
          //   },
          //   backgroundColor: "red",
          //   borderRadius: "8px 8px 0px 0px",
          //   boxShadow: {
          //     xs: "0px 4px 15px rgba(0, 0, 0, 0.05)",
          //   },
          // }}
        >
          {nextBtn(isLastStep)}
          {renderBackButton(onBack, step)}
        </Box>
      </Box>
      {/* <Persist name="business-form" /> */}
    </Form>
  );
};

AwardForm.propTypes = {
  formikProps: PropTypes.object,
  onBack: PropTypes.func.isRequired,
  type: PropTypes.string,
  isLastStep: PropTypes.bool.isRequired,
  step: PropTypes.number,
};

export default AwardForm;
