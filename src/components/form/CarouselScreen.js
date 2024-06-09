import React from "react";
import { Box, Button, Container, IconButton } from "@mui/material";
import PropTypes from "prop-types";
import { nextBtn, renderBackButton } from "./utilities";
import { Carousel } from "@components/look";
import { Form, Field } from "formik";

const CarouselProps = {
  // data: [{
  //         image: 'https://picsum.photos/id/237/200/300',
  //         title: 'theme1'
  //     },
  //     {
  //         image: 'https://picsum.photos/id/237/200/300',
  //         title: 'theme2'
  //     },
  //     {
  //         image: 'https://picsum.photos/id/237/200/300',
  //         title: 'theme3'
  //     },
  // ],
  label: "check carousel",
  heading: "Theme Selection",
  subheading: "select a card",
  // slideNum: 3,
  autoplay: false,
  autoplaySpeed: 3,
  // centerMode: true
};

const CarouselComponent = ({ field, form, setFieldValue, name, type }) => {
  const handleFieldValue = (item) => {
    setFieldValue(name, item);
  };

  const CarouselProps = {
    data: [
      {
        image: "https://picsum.photos/id/237/200/300",
        title: "theme1",
      },
    ],
    label: "check carousel",
    heading: "Theme Selection",
    subheading: "select a card",
    slideNum: 3,
    autoplay: false,
    autoplaySpeed: 3,
    // centerMode: true
  };
  return (
    <Carousel
      {...field}
      type={type}
      {...CarouselProps}
      handleClickItem={(item) => handleFieldValue(item)}
    />
  );
};

const VisitingCardComponent = ({
  type,
  isLastStep,
  onBack,
  step,
  ...formikProps
}) => {
  const fieldName =
    type === "job" || type === "experienced"
      ? "profile.data.vc_theme"
      : "organization_auth_map.data.organization.data.vc_theme";

  return (
    <Form {...formikProps}>
      <Box>
        <Field
          name={fieldName}
          component={(fieldProps) => (
            <CarouselComponent
              {...fieldProps}
              setFieldValue={formikProps.setFieldValue}
              name={fieldName}
              type={type}
            />
          )}
        />
        <Box
          display="flex"
          justifyContent="center"
          width="100%"
          fullWidth
          sx={{
            m: "auto",
            mt: "32px",
            alignItems: "center",
            justifyContent: "space-between",
            maxWidth: { xs: "328px", sm: "608px" },
          }}
        >
          {nextBtn(isLastStep)}
          {renderBackButton(onBack, step)}
        </Box>
      </Box>
    </Form>
  );
};

VisitingCardComponent.propTypes = {
  formikProps: PropTypes.object,
  isLastStep: PropTypes.bool,
  step: PropTypes.number,
  type: PropTypes.string.isRequired,
  onBack: PropTypes.func,
};

export default VisitingCardComponent;
