import React from "react";
import ThemeCard from "./Themecard";
import PropTypes from 'prop-types';
import { IconButton, Box } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import DownloadIcon from '@mui/icons-material/Download';
import EditIcon from '@mui/icons-material/Edit';
import ShareIcon from '@mui/icons-material/Share';

const checkDataWithFLows = (data) => {
    console.log("cehck data---", data);
}

const ButtonStack = ({data}) => {
    return (
        <Box display="flex"
            sx={{ 
                flexDirection: 'column',
                alignItems: "center",
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)"            
            }}
             
        >
            <IconButton
                sx={{
                    backgroundColor: 'white',
                    boxShadow: '0px 4px 25px rgba(0, 0, 0, 0.05)',
                    marginBottom: '16px',
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
                    marginBottom: '16px',
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
                    marginBottom: '16px',
                    '&:hover': {
                        backgroundColor: 'white',
                    },
                }}
                onClick={() => checkDataWithFLows(data)}
            >
                <EditIcon sx={{ color: 'black' }} />
            </IconButton>

            <IconButton
                sx={{
                    backgroundColor: 'white',
                    boxShadow: '0px 4px 25px rgba(0, 0, 0, 0.05)',
                    marginBottom: '16px',
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

const FilledCard = ({type, formDetails}) => {

    return (<Box display={'flex'} sx={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    position: 'relative',
                    padding: '16px',
                    maxWidth: {
                        xs: '360px',
                        sm: '472px'
                    },
                    minWidth: {
                        xs: '100%',
                        sm: '360px'
                    },
                    m: 'auto',
                    mt: '32px'
            }}>
                <ThemeCard type={type || 'job'} formDetails={formDetails} />
                <ButtonStack data={formDetails}/>
            </Box>)
    }

FilledCard.propTypes = {
    type: PropTypes.string,
    formDetails: PropTypes.object
}

export default FilledCard;