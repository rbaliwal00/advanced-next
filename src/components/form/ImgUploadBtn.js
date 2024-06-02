import React, { useState } from 'react';
import { Button, Box, Avatar, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import PropTypes from 'prop-types';

function ImageUploadButton({ onFileSelect, label }) {
    const [file, setFile] = useState(null); // State to hold the uploaded file
    const [previewUrl, setPreviewUrl] = useState(''); // State to hold the preview URL

    const handleUploadClick = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            // Handle file processing or updating state
            setFile(selectedFile);
            const fileUrl = URL.createObjectURL(selectedFile)
            onFileSelect(fileUrl);
            setPreviewUrl(fileUrl)
        }
    };

    return (
        <Box
            sx={{ width: '100%', alignSelf: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
            <input
                accept="image/*"
                style={{ display: 'none' }}
                id={`file-upload-${label}`}
                multiple
                type="file"
                onChange={handleUploadClick}
            />
            <label htmlFor={`file-upload-${label}`}>
                {file ? (
                    <Avatar
                        src={previewUrl}
                        sx={{
                            width: 64,
                            height: 64,
                            marginBottom: '8px',
                        }}
                    />
                ) : (
                    <Button
                        component="span"
                        sx={{
                            width: 64,
                            height: 64,
                            borderRadius: '50%',
                            backgroundColor: '#e0e0e0',
                            color: '#000',
                            marginBottom: '8px'
                        }}
                    >
                            <AddIcon color={'#6B7280'} />
                    </Button>
                )}
            </label>
            <Box
                sx={{
                    fontSize: '14px',
                    fontWeight: 'bold',
                    mb: '28px'
                }}
            >
                <Typography color={'#6B7280'}>{label || 'Upload Image'}</Typography>
            </Box>
        </Box>
    );
}

ImageUploadButton.propTypes = {
    onFileSelect: PropTypes.func.isRequired,
    label: PropTypes.string
};

export default ImageUploadButton;
