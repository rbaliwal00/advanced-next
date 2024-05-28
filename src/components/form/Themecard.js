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
    const { department, name, position, experience, number, email, currentLocation, preferredLocation, image ='https://picsum.photos/200/300' } = formDetails

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
                                    {department}
                                </Typography>
                            </Box>
                            <Box style={{ marginTop: '20px' }}>
                                <Typography sx={styles.label}>
                                    Position
                                </Typography>
                                <Typography sx={styles.valueTxt}>
                                    {position}
                                </Typography>
                            </Box>
                            <Box style={{ marginTop: '20px' }}>
                                <Typography sx={styles.label}>
                                    Current Location
                                </Typography>
                                <Typography sx={styles.valueTxt}>
                                    {currentLocation}
                                </Typography>
                            </Box>
                            <Box style={{ marginTop: '20px' }}>
                                <Typography sx={styles.label}>
                                    Preferred Location
                                </Typography>
                                <Typography sx={styles.valueTxt}>
                                    {preferredLocation}
                                    <br />
                                    Location 2
                                    <br />
                                    Location 3
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6} sm={6} style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            {image && <Avatar
                                alt="Yanis Petros"
                                src={image} // Update with your avatar path
                                style={{ width: 80, height: 80, marginLeft: 'auto', marginBottom: '10px' }}
                            />}
                            <Typography sx={styles.nameTxt} component="div">
                                {name}
                            </Typography>
                            <Typography variant="subtitle1">
                                {experience}
                            </Typography>
                            <Typography sx={styles.label}>
                                Contact No.
                            </Typography>
                            <Typography sx={styles.valueTxt} color="text.primary">
                                {number}
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
                                {name}
                            </Typography>
                            <Typography sx={styles.valueTxt}>
                                {experience}
                            </Typography>
                            <Typography sx={styles.label} style={{ marginTop: '10px' }}>
                                Contact No.
                            </Typography>
                            <Typography sx={styles.valueTxt}>
                                {number}
                            </Typography>
                            <Typography sx={styles.label} style={{ marginTop: '10px' }}>
                                Email
                            </Typography>
                            <Typography sx={styles.valueTxt}>
                                {email}
                            </Typography>
                        </Grid>
                        <Grid item xs={6} sm={6} style={{ textAlign: 'left' }}>
                            <Box>
                                <Typography sx={styles.label}>
                                    Department
                                </Typography>
                                <Typography sx={styles.valueTxt}>
                                    Department
                                </Typography>
                            </Box>
                            <Box style={{ marginTop: '20px' }}>
                                <Typography sx={styles.label}>
                                    Position
                                </Typography>
                                <Typography sx={styles.valueTxt}>
                                    Position
                                </Typography>
                            </Box>
                            <Box style={{ marginTop: '20px' }}>
                                <Typography sx={styles.label}>
                                    Current Location
                                </Typography>
                                <Typography sx={styles.valueTxt}>
                                    Current Location
                                </Typography>
                            </Box>
                            <Box style={{ marginTop: '20px' }}>
                                <Typography sx={styles.label}>
                                    Preferred Location
                                </Typography>
                                <Typography sx={styles.valueTxt}>
                                    Location 1
                                    <br />
                                    Location 2
                                    <br />
                                    Location 3
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