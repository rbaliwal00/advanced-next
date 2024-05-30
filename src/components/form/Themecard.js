import React from "react";
import { Box, Card, Typography, Grid, CardContent, Container, Avatar } from "@mui/material";
import PropTypes from 'prop-types';

const styles = {
    label: {
        fontSize: {
            xs: '8px',
            sm: '12px'
        },
        color: '#8899A8',
        fontWeight: '400',
    },
    valueTxt: {
        fontSize: {
            xs: '11px',
            sm: '16px'
        },
        color: '#4B5563',
        fontWeight: '500',
    },
    nameTxt: {
        fontSize: {
            xs: '16px',
            sm: '20px'
        },
        color: '#4B5563',
        fontWeight: '500',
    }
}

const renderCard = (type, formDetails) => {
    const { phone_number, email, profile, organization_auth_map } = formDetails;
    const { education, experience,  preference, image_url ='https://picsum.photos/200/300', first_name, last_name } = profile[0];
    const { brand_name, business_nature, company_name, no_of_employee, organization_location_map, contact} = organization_auth_map[0].organization
    const { block_number, area, city } = organization_location_map[0].location;


    if (type === 'job')
        return (

            <Card style={{
                width: '100%',
                minWidth: '320px',
                px: {
                    xs: '8px',
                    sm: '32px'
                },
                py: '16px',
                boxShadow: '0px 4px 25px 0px rgba(0, 0, 0, 0.05)'
            }}>
                <CardContent sx={{ m: 0}}>
                    <Grid container >
                        <Grid item xs={6} sm={6} style={{ textAlign: 'left' }}>
                            <Box>
                                <Typography sx={styles.label}>
                                    Department
                                </Typography>
                                <Typography sx={styles.valueTxt}>
                                    {experience[0].department}
                                </Typography>
                            </Box>
                            <Box style={{ marginTop: '20px' }}>
                                <Typography sx={styles.label}>
                                    Position
                                </Typography>
                                <Typography sx={styles.valueTxt}>
                                    {experience[0].position}
                                </Typography>
                            </Box>
                            <Box style={{ marginTop: '20px' }}>
                                <Typography sx={styles.label}>
                                    Current Location
                                </Typography>
                                <Typography sx={styles.valueTxt}>
                                    {'Bangalore'}
                                </Typography>
                            </Box>
                            <Box style={{ marginTop: '20px' }}>
                                <Typography sx={styles.label}>
                                    Preferred Location
                                </Typography>
                                <Typography sx={styles.valueTxt}>
                                    {preference[0].working_city}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6} sm={6} style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            {image_url && <Avatar
                                alt="Yanis Petros"
                                src={image_url} // Update with your avatar path
                                style={{ width: 80, height: 80, marginLeft: 'auto', marginBottom: '10px' }}
                            />}
                            <Typography sx={styles.nameTxt} component="div">
                                {first_name + last_name}
                            </Typography>
                            <Typography variant="subtitle1">
                                {experience[0].work_experience}
                            </Typography>
                            <Typography sx={styles.label}>
                                Contact No.
                            </Typography>
                            <Typography sx={styles.valueTxt} color="text.primary">
                                {phone_number}
                            </Typography>
                            <Typography sx={styles.label}>
                                Email
                            </Typography>
                            <Typography sx={styles.valueTxt} color="text.primary">
                                {email}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        )
    else
        return (
            <Card style={{
                width: '100%',
                px: {
                    xs: '16px',
                    sm: '32px'
                },
                py: '16px',
                boxShadow: '0px 4px 25px 0px rgba(0, 0, 0, 0.05)',
            }}>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={6} sm={6} style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <Avatar
                                alt="Yanis Petros"
                                src="/path/to/avatar.jpg" // Update with your avatar path
                                style={{ width: 80, height: 80, marginLeft: 'auto', marginBottom: '10px' }}
                            />
                            <Typography sx={styles.nameTxt}>
                                {brand_name}
                            </Typography>
                            <Typography sx={styles.valueTxt}>
                                {company_name}
                            </Typography>
                            <Typography sx={styles.label} style={{ marginTop: '10px' }}>
                                Contact Person
                            </Typography>
                            <Typography sx={styles.valueTxt}>
                                {contact[0].name}
                            </Typography>
                            <Typography sx={styles.label} style={{ marginTop: '10px' }}>
                                Contact No.
                            </Typography>
                            <Typography sx={styles.valueTxt}>
                                {contact[0].phone_number}
                            </Typography>
                        </Grid>
                        <Grid item xs={6} sm={6} style={{ textAlign: 'left' }}>
                            <Box>
                                <Typography sx={styles.label}>
                                    Nature of Business
                                </Typography>
                                <Typography sx={styles.valueTxt}>
                                    {business_nature}
                                </Typography>
                            </Box>
                            <Box style={{ marginTop: '20px' }}>
                                <Typography sx={styles.label}>
                                    Nunber of Employees
                                </Typography>
                                <Typography sx={styles.valueTxt}>
                                    {no_of_employee}
                                </Typography>
                            </Box>
                            <Box style={{ marginTop: '20px' }}>
                                <Typography sx={styles.label}>
                                    Current Location
                                </Typography>
                                <Typography sx={styles.valueTxt}>
                                    {block_number + city + area}
                                </Typography>
                            </Box>
                            <Box style={{ marginTop: '20px' }}>
                                <Typography sx={styles.label}>
                                    Email
                                </Typography>
                                <Typography sx={styles.valueTxt}>
                                    {contact[0].email}
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        )
}

const ThemeCard = ({type, formDetails}) => {
   return (
       <Container sx={{ maxWidth: { xs: '328px', sm: '560px' }, minWidth: { xs: '180px', sm: '300px'}, p: '4px', mt: '32px', width: '100%'}}>
            {renderCard(type, formDetails)}
        </Container>
   )
}

ThemeCard.proptypes = {
    type: PropTypes.string,
    formDetails: PropTypes.object
}

export default ThemeCard;