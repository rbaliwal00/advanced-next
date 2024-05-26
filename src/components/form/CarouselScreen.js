import React from 'react';
import { Box, Button, Container, IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DownloadIcon from '@mui/icons-material/Download';
import EditIcon from '@mui/icons-material/Edit';
import ShareIcon from '@mui/icons-material/Share';
import PropTypes from 'prop-types';
import { nextBtn, renderBackButton } from './utilities';


const VisitingCardComponent = ({ }) => {
    return (
        <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '20px' }}>

            <Box style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <IconButton aria-label="view" style={{ margin: '0 10px' }}>
                    <VisibilityIcon />
                </IconButton>
                <IconButton aria-label="download" style={{ margin: '0 10px' }}>
                    <DownloadIcon />
                </IconButton>
                <IconButton aria-label="edit" style={{ margin: '0 10px' }}>
                    <EditIcon />
                </IconButton>
                <IconButton aria-label="share" style={{ margin: '0 10px' }}>
                    <ShareIcon />
                </IconButton>
            </Box>

            <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
                Search for jobs
            </Button>
        </Container>
    )
}

VisitingCardComponent.propTypes = {
    formikProps: PropTypes.object,
    onBack: PropTypes.func.isRequired,
    type: PropTypes.string,
    isLastStep: PropTypes.bool.isRequired,
    step: PropTypes.number
}

export default VisitingCardComponent;
