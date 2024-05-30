import React from "react";
import { LinearProgress, Box, Typography } from "@mui/material";
import { styles } from "./utilities";
import PropTypes from "prop-types";

const CustomProgressBar = ({progress, label}) => {
    return (
        <Box sx={[styles.formContainers, { display: 'flex', 
            flexDirection: { 
                xs: 'column-reverse',
                sm: 'column'
            },
            paddingTop: {
                xs: '0px',
                sm: '10px'
            },
            boxShadow: 'none',
            background: '#F9FAFB',
        }]}>
            <Typography sx={{ fontSize: '24px', fontWeight: '600', color: '#4B5563', textTransform: 'capitalize' }}>{label}</Typography>
            <LinearProgress
                variant="determinate"
                value={progress}
                style={{ background: "#E5E7EB" }}
                sx={{ "& .MuiLinearProgress-bar": { backgroundColor: "#FE8B4C" } }}
            />
        </Box>
    )
}

CustomProgressBar.proptypes = {
    progress: PropTypes.number,
    label: PropTypes.string
}

export default CustomProgressBar;