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
                                <Typography fontStyle={styles.label}>
                                    Department
                                </Typography>
                                <Typography fontStyle={styles.valueTxt}>
                                    {department}
                                </Typography>
                            </Box>
                            <Box style={{ marginTop: '20px' }}>
                                <Typography fontStyle={styles.label}>
                                    Position
                                </Typography>
                                <Typography fontStyle={styles.valueTxt}>
                                    {position}
                                </Typography>
                            </Box>
                            <Box style={{ marginTop: '20px' }}>
                                <Typography fontStyle={styles.label}>
                                    Current Location
                                </Typography>
                                <Typography style={styles.valueTxt}>
                                    {currentLocation}
                                </Typography>
                            </Box>
                            <Box style={{ marginTop: '20px' }}>
                                <Typography style={styles.label}>
                                    Preferred Location
                                </Typography>
                                <Typography style={styles.valueTxt}>
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
                            <Typography style={styles.valueTxt} component="div">
                                {name}
                            </Typography>
                            <Typography variant="subtitle1">
                                {experience}
                            </Typography>
                            <Typography style={styles.label}>
                                Contact No.
                            </Typography>
                            <Typography style={styles.valueTxt} color="text.primary">
                                {number}
                            </Typography>
                            <Typography style={styles.label}>
                                Email
                            </Typography>
                            <Typography style={styles.valueTxt} color="text.primary">
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
                boxShadow: '0px 4px 25px 0px rgba(0, 0, 0, 0.05)'
            }}>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={6} sm={6} style={{ textAlign: 'right' }}>
                            <Box>
                                <Typography variant="body2" color="text.secondary">
                                    Department
                                </Typography>
                                <Typography variant="h6">
                                    Department
                                </Typography>
                            </Box>
                            <Box style={{ marginTop: '20px' }}>
                                <Typography variant="body2" color="text.secondary">
                                    Position
                                </Typography>
                                <Typography variant="h6">
                                    Position
                                </Typography>
                            </Box>
                            <Box style={{ marginTop: '20px' }}>
                                <Typography variant="body2" color="text.secondary">
                                    Current Location
                                </Typography>
                                <Typography variant="h6">
                                    Current Location
                                </Typography>
                            </Box>
                            <Box style={{ marginTop: '20px' }}>
                                <Typography variant="body2" color="text.secondary">
                                    Preferred Location
                                </Typography>
                                <Typography variant="h6">
                                    Location 1
                                    <br />
                                    Location 2
                                    <br />
                                    Location 3
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6} sm={6} style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <Avatar
                                alt="Yanis Petros"
                                src="/path/to/avatar.jpg" // Update with your avatar path
                                style={{ width: 80, height: 80, marginLeft: 'auto', marginBottom: '10px' }}
                            />
                            <Typography variant="h6" component="div" style={{ fontWeight: 'bold' }}>
                                Yanis Petros
                            </Typography>
                            <Typography variant="subtitle1">
                                Fresher
                            </Typography>
                            <Typography variant="body2" style={{ marginTop: '10px' }}>
                                Contact No.
                            </Typography>
                            <Typography variant="h6" color="text.primary">
                                1234567890
                            </Typography>
                            <Typography variant="body2" style={{ marginTop: '10px' }}>
                                Email
                            </Typography>
                            <Typography variant="h6" color="text.primary">
                                someemail@gmail.com
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        )
}

const ThemeCard = ({type, formDetails}) => {
   return (
       <Container sx={{ maxWidth: { xs: '328px', sm: '560px' }, minWidth: { xs: '320px', sm: '400px'}, p: 0}}>
            {renderCard(type, formDetails)}
        </Container>
   )
}

ThemeCard.proptypes = {
    type: PropTypes.string,
    formDetails: PropTypes.object
}

export default ThemeCard;