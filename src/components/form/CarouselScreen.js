import React from 'react';
import { Box, Button, Container, IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DownloadIcon from '@mui/icons-material/Download';
import EditIcon from '@mui/icons-material/Edit';
import ShareIcon from '@mui/icons-material/Share';
import PropTypes from 'prop-types';
import { nextBtn, renderBackButton } from './utilities';
import { Carousel } from "@components/look";
import { Form, Field } from 'formik';




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
    label: 'check carousel',
    heading: 'Theme Selection',
    subheading: 'select a card',
    // slideNum: 3,
    autoplay: false,
    autoplaySpeed: 3,
    // centerMode: true
}

const CarouselComponent = ({ field, form, setFieldValue, name }) => {
    const handleFieldValue = (item) => {
        setFieldValue(name, item)
    }

    console.log("carouselcomponent", field.data);
    const CarouselProps = {
        data: [{
                image: 'https://picsum.photos/id/237/200/300',
                title: 'theme1'
            }, 
            {
                image: 'https://picsum.photos/id/237/200/300',
                title: 'theme2'
            },
            {
                image: 'https://picsum.photos/id/237/200/300',
                title: 'theme3'
            },
        ],
        label: 'check carousel',
        heading: 'Theme Selection',
        subheading: 'select a card',
        slideNum: 3,
        autoplay: false,
        autoplaySpeed: 3,
        // centerMode: true
    }
    return <Carousel {...field}  {...CarouselProps} handleClickItem={(item) => handleFieldValue(item)}/>
}

const VisitingCardComponent = ({type, isLastStep, ... formikProps }) => {
    const fieldName = type === 'fresher' || 'experienced' ? 'profile.data.vc_theme' : 'organization_auth_map.data.organization.data.vc_theme'

    return (
        <Form {...formikProps}>
            <Box >    
                <Field
                    name={fieldName}
                    component={(fieldProps) => (
                        <CarouselComponent
                            {...fieldProps}
                            setFieldValue={formikProps.setFieldValue}
                            name={fieldName}
                        />
                    )}
                />
                <Box display="flex" justifyContent="center" width="100%" fullWidth sx={{ mt: '32px', alignItems: 'center'}}>
                    {nextBtn(isLastStep)}
                </Box>
            </Box>
        </Form>
    )
}

VisitingCardComponent.propTypes = {
    formikProps: PropTypes.object,
    type: PropTypes.string,
    isLastStep: PropTypes.bool,
    step: PropTypes.number,
}

export default VisitingCardComponent;
