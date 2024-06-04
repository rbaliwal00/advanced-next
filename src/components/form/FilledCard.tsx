import React, { useRef} from "react";
import ThemeCard from "./Themecard";
import PropTypes from 'prop-types';
import { IconButton, Box, Button } from "@mui/material";
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ShareIcon from '@mui/icons-material/Share';
import { toPng } from 'html-to-image';
import { saveAs } from 'file-saver';
import Link from "next/link";
import { useRouter } from "next/router";


const ButtonStack = ({updateType, handleDownloadImage}) => {

    const nextRoute = '/users/update' + updateType[0].toUpperCase() + updateType.slice(1);
    const fullMsg = `Check my VC card here https://dev.client.horecah.com/`
    const shareOnWatsapp = () => {
        const whatsappURL = `https://api.whatsapp.com/send?text=${encodeURIComponent(fullMsg)}`;
        window.open(whatsappURL, '_blank');
    }


    return (
        <Box display="flex"
            sx={{ 
                flexDirection: 'column',
                alignItems: "center",
                position: "absolute",
                left: "372px",
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
                    borderWidth: '1px',
                    borderColor: '#EFEFEF'
                }}
                onClick={handleDownloadImage}
            >
                <FileDownloadOutlinedIcon sx={{ color: 'black' }} />
            </IconButton>

            <Link href={nextRoute}>
                <IconButton
                    sx={{
                        backgroundColor: 'white',
                        boxShadow: '0px 4px 25px rgba(0, 0, 0, 0.05)',
                        marginBottom: '16px',
                        '&:hover': {
                            backgroundColor: 'white',
                        },
                        borderWidth: '1px',
                        borderColor: '#EFEFEF'
                    }}
                >
                    <EditOutlinedIcon sx={{ color: 'black' }} />
                </IconButton>
            </Link>

            <IconButton
                sx={{
                    backgroundColor: 'white',
                    boxShadow: '0px 4px 25px rgba(0, 0, 0, 0.05)',
                    marginBottom: '16px',
                    '&:hover': {
                        backgroundColor: 'white',
                    },
                    borderWidth: '1px',
                    borderColor: '#EFEFEF'
                }}
                onClick={shareOnWatsapp}
            >
                <ShareIcon sx={{ color: '#FF7E41' }} />
            </IconButton>
        </Box>
    );
};

const FilledCard = ({type, formDetails}) => {
    const cardRef = useRef<HTMLDivElement>(null);
    console.log("check formdetails here", formDetails);
    const updateType = formDetails.profile[0].sub_type;

    const redirectToDashboard = () => {

    }

    const handleDownloadImage = async () => {
        if (cardRef.current === null) {
            return;
        }

        const dataUrl = await toPng(cardRef.current, { width: cardRef.current.scrollWidth, height: cardRef.current.scrollHeight});
        saveAs(dataUrl, 'theme-card.png');
    };

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
                        sm: '376px'
                    },
                    m: 'auto',
                    mt: '32px'
            }}>
                <div ref={cardRef}>
                    <ThemeCard type={type || 'job'} formDetails={formDetails} />
                </div>
                <ButtonStack updateType={updateType || 'job'} handleDownloadImage={handleDownloadImage}/>

                {/* <Button onClick={}>

                </Button> */}
            </Box>)
    }

FilledCard.propTypes = {
    type: PropTypes.string,
    formDetails: PropTypes.object
}

export default FilledCard;