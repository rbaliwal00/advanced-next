import React, { useRef} from "react";
import ThemeCard from "./Themecard";
import PropTypes from 'prop-types';
import { IconButton, Box } from "@mui/material";
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ShareIcon from '@mui/icons-material/Share';
import { toPng } from 'html-to-image';
import { saveAs } from 'file-saver';

const checkDataWithFLows = (type :string) => {
    console.log("chcek dta", type);
}

const ButtonStack = ({type, handleDownloadImage}) => {
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
                onClick={() => checkDataWithFLows(type)}
            >
                <EditOutlinedIcon sx={{ color: 'black' }} />
            </IconButton>

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
                <ShareIcon sx={{ color: '#FF7E41' }} />
            </IconButton>
        </Box>
    );
};

const FilledCard = ({type, formDetails}) => {
    const cardRef = useRef<HTMLDivElement>(null);

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
                <ButtonStack type={type || 'job'} handleDownloadImage={handleDownloadImage}/>
            </Box>)
    }

FilledCard.propTypes = {
    type: PropTypes.string,
    formDetails: PropTypes.object
}

export default FilledCard;