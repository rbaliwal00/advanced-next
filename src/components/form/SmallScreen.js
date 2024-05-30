import { useMediaQuery } from '@mui/material';

const useIsSmallScreen = () => {
    console.log("cehck isSmallScreen", useMediaQuery('(max-width:370px)'));

    return useMediaQuery('(max-width:370px)');
};

export default useIsSmallScreen;
