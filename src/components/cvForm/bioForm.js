import React from 'react';
import { Formik, Form } from 'formik';
import { Box, Button, Typography } from '@mui/material';
// import MaterialUIFieldAdapter from './MaterialUIFieldAdapter';  // Adjust import path as needed
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Persist } from 'formik-persist';
import { nextBtn, renderBackButton } from '../form/utilities';
import MaterialUIFieldAdapter from '@components/form/MaterialUIFieldAdapter';
import  stars  from '@public/assests/stars.svg';
import Image from 'next/image';
import RoundButton from '@components/round-button';

import  facebook  from '@public/assets/socialMedia/facebook.svg';
import  instagram  from '@public/assets/socialMedia/instagram.svg';
import  linkedin  from '@public/assets/socialMedia/linkedin.svg';
import  whatsapp  from '@public/assets/socialMedia/whatsapp.svg';




const BioForm = ({ onBack, isLastStep, type, step, ...formikProps }) => {
    return (
                <Form {...formikProps}>
                    <Box sx={{
                        maxWidth: {
                            xs: '100%', // alksdjflksdjf a;sdlkjf s;akldfjas;kldfj;alksdjf a 
                            sm: '608px' // alksdjflksdjf a;sdlkjf s;akldfjas;kldfj;alksdjf a
                        },
                        m: 'auto',
                        mt: {
                            xs: '8px',
                            sm: '32px',
                        },
                        px: {
                            xs: '16px',
                            sm: '35px'
                        },
                        py:{
                            xs: '16px',
                            sm: '30px'},
                        boxShadow: {
                            xs: 'none',
                            sm:'0px 4px 25px 0px rgba(0, 0, 0, 0.05)'},
                        borderRadius: {
                            xs: '0px',
                            sm: '12px'
                        },
                        bgcolor: 'background.paper',
                    }}>
                       <MaterialUIFieldAdapter
                            fromik={formikProps}
                            name={`about`}
                          type="textarea"
                          label="About"
                          placeholder="use AI to write"
                        />
                        <Button variant="contained" sx={{
                            borderRadius: '8px', maxHeight: '48px', py: '10px', width: {
                                xs: '100%',
                                sm: '100%'
                            }, 
                            backgroundColor: '#113B73',
                            textTransform: 'none',
                            maxWidth: '608px',
                            boxShadow: 'none',
                            gap: '1rem'
                         }} 
                        >   <img src={stars.src} alt="stars"  />
                            <Typography fontSize={'16px'} fontWeight={'600'} color={'#fff'} fontFamily={'Poppins'}>Write with A.I.</Typography>
                        </Button>
                        <MaterialUIFieldAdapter
                            fromik={formikProps}
                            name={`portfolioLink`}
                            type="text"
                            label="Portfolio Link"
                            placeholder="Type"
                        />
                        <MaterialUIFieldAdapter
                            fromik={formikProps}
                            name={`newsletterLink`}
                            type="text"
                            label="Newsletter Link"
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
                            <Box display={'grid'} gap={'5px'}>
                            <Box width={'max-content'} padding={'10px'} boxShadow={'0px 4px 10px 0px #0000000D'} borderRadius={'50%'}>
                                <img src={whatsapp.src} alt="stars" width={'40px'} />
                            </Box>
                                <MaterialUIFieldAdapter
                                    fromik={formikProps}
                                    name={`whatsAppNumber`}
                                    type="text"
                                    label=""
                                    placeholder="Whatsapp No."
                                />
                            </Box>
                            <Box display={'grid'} gap={'5px'}>
                            <Box width={'max-content'} padding={'10px'} boxShadow={'0px 4px 10px 0px #0000000D'} borderRadius={'50%'}>
                                <img src={facebook.src} alt="stars" width={'40px'} />
                            </Box>
                                <MaterialUIFieldAdapter
                                    fromik={formikProps}
                                    name={`facebookLink`}
                                    type="text"
                                    label=""
                                    placeholder="facebook"
                                />
                            </Box>
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
                            <Box display={'grid'} gap={'5px'}>
                            <Box width={'max-content'} padding={'10px'} boxShadow={'0px 4px 10px 0px #0000000D'} borderRadius={'50%'}>
                                <img src={instagram.src} alt="stars" width={'40px'} />
                            </Box>
                                <MaterialUIFieldAdapter
                                    fromik={formikProps}
                                    name={`instagramLink`}
                                    type="text"
                                    label=""
                                    placeholder="Instagram"
                                />
                            </Box>
                            <Box display={'grid'} gap={'5px'}>
                            <Box width={'max-content'} padding={'10px'} boxShadow={'0px 4px 10px 0px #0000000D'} borderRadius={'50%'}>
                                <img src={linkedin.src} alt="stars" width={'40px'} />
                            </Box>
                                <MaterialUIFieldAdapter
                                    fromik={formikProps}
                                    name={`linkedInLink`}
                                    type="text"
                                    label=""
                                    placeholder="linkedin"
                                />
                            </Box>
                        </Box>
                        <MaterialUIFieldAdapter
                            name="languages"
                            type="multiselect"
                            label="Language"
                            formik={formikProps}
                            options={[{ value: 'tech', label: 'Tech' }, { value: 'retail', label: 'Retail' }]}
                        />
                        <MaterialUIFieldAdapter
                            name="skills"
                            type="multiselect"
                            label="Skills"
                            formik={formikProps}
                            options={[{ value: 'tech', label: 'Tech' }, { value: 'retail', label: 'Retail' }]}
                        />
                        <Box display="flex" justifyContent="space-between" width="100%" fullWidth>
                            {nextBtn(isLastStep)}
                            {renderBackButton(onBack, step)}
                        </Box>
                        
                    </Box>
                    {/* <Persist name="business-form" /> */}
                </Form>
            )
};

BioForm.propTypes = {
    formikProps: PropTypes.object,
    onBack: PropTypes.func.isRequired,
    type: PropTypes.string,
    isLastStep: PropTypes.bool.isRequired,
    step: PropTypes.number
}

export default BioForm;