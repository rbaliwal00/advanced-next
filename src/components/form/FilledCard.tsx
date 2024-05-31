import React from "react";
import ThemeCard from "./Themecard";
import PropTypes from 'prop-types';
import { IconButton, Box } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import DownloadIcon from '@mui/icons-material/Download';
import EditIcon from '@mui/icons-material/Edit';
import ShareIcon from '@mui/icons-material/Share';

const formDetails = {
    name: 'kikhae',
    position: 'Architect',
    department: 'IT',
    currentLocation: 'Blr',
    number: '8830285891',
    email: 'beingTmk@gmail.com',
    preferredLocation: 'hyd',
    experience: 'Experienced'
}

const ButtonStack = () => {
    return (
        <Box display="flex"
            sx={{ 
                flexDirection:{
                    xs: 'row',
                    sm: 'coloumn'
                },
                alignItems: "center",
                position: "absolute",
                right: "-30px",
                top: "50%",
                transform: "translateY(-50%)"            
            }}
             
        >
            <IconButton
                sx={{
                    backgroundColor: 'white',
                    boxShadow: '0px 4px 25px rgba(0, 0, 0, 0.05)',
                    marginBottom: 2,
                    '&:hover': {
                        backgroundColor: 'white',
                    },
                }}
            >
                <VisibilityIcon sx={{ color: 'black' }} />
            </IconButton>

            <IconButton
                sx={{
                    backgroundColor: 'white',
                    boxShadow: '0px 4px 25px rgba(0, 0, 0, 0.05)',
                    marginBottom: 2,
                    '&:hover': {
                        backgroundColor: 'white',
                    },
                }}
            >
                <DownloadIcon sx={{ color: 'black' }} />
            </IconButton>

            <IconButton
                sx={{
                    backgroundColor: 'white',
                    boxShadow: '0px 4px 25px rgba(0, 0, 0, 0.05)',
                    marginBottom: 2,
                    '&:hover': {
                        backgroundColor: 'white',
                    },
                }}
            >
                <EditIcon sx={{ color: 'black' }} />
            </IconButton>

            <IconButton
                sx={{
                    backgroundColor: 'white',
                    boxShadow: '0px 4px 25px rgba(0, 0, 0, 0.05)',
                    marginBottom: 2,
                    '&:hover': {
                        backgroundColor: 'white',
                    },
                }}
            >
                <ShareIcon sx={{ color: '#FF7E41' }} />
            </IconButton>
        </Box>
    );
};

const FilledCard = ({type}) => {
    console.log("check  form", formDetails);

    return (<Box display={'flex'} sx={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    background: 'red',
                    position: 'relative',
                    padding: '20px',
                    maxWidth: {
                        xs: '328px',
                        sm: '440px'
                    }
            }}>
                <ThemeCard type={type || 'job'} formDetails={formDetails} />
                <ButtonStack />
            </Box>)
    }

FilledCard.propTypes = {
    type: PropTypes.string,
    formDetails: PropTypes.object
}

export default FilledCard;