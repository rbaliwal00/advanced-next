import React, { useState } from 'react';
import { Box, Button, IconButton, Typography, Paper, Dialog, DialogContent, DialogActions } from '@mui/material';
import PropTypes from 'prop-types';

const GstInputComponent = ({ docType }) => {
    const [file, setFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState('');
    const [open, setOpen] = useState(false);

    const isDocGST = docType === 'gst'
    const label = isDocGST ? "Company's GST Document" : "Company's PAN Card";
    const btnText = isDocGST ?  "Upload GST" : 'Upload PAN'

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
        //onFileSelect(selectedFile)
        setPreviewUrl(URL.createObjectURL(selectedFile));
        // For demo purposes, we assume the GST number is extracted from the file
    };

    const styles = {
        contained: {
            borderRadius: '8px', maxHeight: '48px', py: '10px', width: '100%',
            backgroundColor: '#113B73',
            textTransform: 'none'
        },
        outlined: {
            textTransform: 'none', width: '100%',
            borderRadius: '8px', maxHeight: '48px', py: '10px', backgroundColor: '#fff', borderWidth: 1, borderColor: '#113B73'
        },
        iconBtn: { height: '42px', width: '42px', borderRadius: '21px', boxShadow: '0px 4px 25px 0px rgba(0, 0, 0, 0.05)' }
    }

    const handleDelete = () => {
        setFile(null);
        setPreviewUrl('');
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Paper elevation={3} sx={{ p: 3, mb: 3, textAlign: 'center', borderRadius: '10px' }}>
            {/* <Image /> */}
            <Button>

            </Button>
        </Paper>
    );
};

GstInputComponent.propTypes = {
    docType: PropTypes.string
}

export default GstInputComponent;
