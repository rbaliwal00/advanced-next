import { Paper, Box, Typography, Button, IconButton, Divider } from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";
import { CvFormImg, CvVideoImg } from "@components/form/utilities";
import UploadFileIcon from '@mui/icons-material/UploadFile';
// const renderUploadCard = ({}) => {

//     return (
        
//     )
// }

const CvTypeUpload = () => {
    const [file, setFile] = useState(null);

    const styles = {
        card: {
            p: '16px',
            borderRadius: '10px',
            borderWidth: 1,
            BorderColor: '#F3F4F6',
            mt: '16px'
        },
        contained: {
            borderRadius: '8px', maxHeight: '48px', py: '10px', width: '100%',
            backgroundColor: '#113B73',
            textTransform: 'none'
        },
        outlined: {
            textTransform: 'none', width: '100%',
            borderRadius: '8px', maxHeight: '48px', py: '10px', backgroundColor: '#fff', borderWidth: 1, borderColor: '#113B73'
        },
        img: {
            maxheight: 'auto',
            maxWidth: '80px',
        }
    }

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
    };

    return (
        <Box sx={{ maxWidth: '328px', m: 'auto', px: '16px'}}>
            <Paper elevation={2} sx={[styles.card, { display: 'flex', flexDirection: 'column', alignItems: 'center',}]}>
                <Box sx={{ width: '80px', height: '104px'}}>
                    <Image src={CvFormImg} style={{ width: '100%'}}/>
                </Box>
                <Typography sx={{}}>Create your Hospitality</Typography>
                <Button variant={"contained"} component="label" sx={styles.contained} >
                    <Typography fontSize={'16px'} fontWeight={'600'} color={'#fff'} sx={{ textAlign: 'center'}}>Cv in Minutes</Typography>
                    <input type="file" hidden onChange={handleFileChange} />
                </Button>
            </Paper>
            <Paper elevation={2} sx={[styles.card, { display: 'flex', flexDirection: 'column', alignItems: 'center',}]}>
                <Box sx={{ width: '80px', height: '104px'}}>
                    <Image src={CvVideoImg} style={{ width: '100%'}}/>
                </Box>
                <Typography sx={{}}>Create your Hospitality</Typography>
                <Button variant={"outlined"} component="label" sx={styles.contained} >
                    <Typography fontSize={'16px'} fontWeight={'600'} color={'#fff'} sx={{ textAlign: 'center'}}>Cv in Minutes</Typography>
                    <input type="file" hidden onChange={handleFileChange} />
                </Button>
            </Paper>
            <Divider sx={{ m: 'auto', mt: '24px', mb: '24px', maxWidth: '160px', color: '#637381'}} />
             <Button
                variant="outlined"
                startIcon={<UploadFileIcon />}
                sx={{
                    padding: '10px 20px',
                    borderRadius: '8px',
                    border: '1px solid #e0e0e0',
                    color: '#1A3365',
                    textTransform: 'none',
                    fontSize: '16px',
                    '&:hover': {
                        border: '1px solid #1A3365',
                        backgroundColor: '#f5f5f5',
                    },
                    width: '100%',
                    maxWidth: '328px',
                    maxHeight: '48px'
                }}>
                Upload CV
            </Button>
        </Box>
    )
}

export default CvTypeUpload;