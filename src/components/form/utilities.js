import { Button, Typography } from "@mui/material";

const eighteenYearsAgo = new Date();
eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);

export default eighteenYearsAgo;

export const validateFile = (file, maxSize) => {
    if (!file) return true; // Skip if no file is uploaded
    const sizeInBytes = maxSize * 1024 * 1024; // Convert MB to bytes
    return file.size <= sizeInBytes && ['image/jpeg', 'image/png', 'image/gif'].includes(file.type);
};

export const phoneRegExp = /^(\+\d{1,3}[- ]?)?\d{10}$/;

export const nextBtn = (isLast) => {
    const text = isLast ? 'Confirm' : 'Next';

    return (
        <Button type="submit" variant="contained" sx={{
            borderRadius: '8px', maxHeight: '48px', py: '10px', width: {
                xs: '100%',
                sm: '79%'
            }, 
            backgroundColor: '#113B73',
            textTransform: 'none'
         }} 
        >
            <Typography fontSize={'16px'} fontWeight={'600'} color={'#fff'}>{text}</Typography>
        </Button>
    )
}

export const renderBackButton = ( onBack, step ) => {
    if (step > 0){
        return (
            <Button type="button" variant="outlined" sx={{
                width: { sm: '19%' }, // Applies width starting from the sm breakpoint
                textTransform: 'none',
                display: {
                    xs: 'none', // Hides the button on extra small screens (below 600px)
                    sm: 'block' // Displays the button on screens 600px and wider
                },
                borderRadius: '8px', maxHeight: '48px', py: '10px', backgroundColor: '#fff', borderWidth: 1, borderColor: '#113B73'
                }} onClick={onBack}>
                <Typography fontSize={'16px'} fontWeight={'600'} color={'#113B73'}>Back</Typography>
            </Button> 
        )
    }else return <></>
}


export const createTimer = (duration, onUpdate) => {
    let seconds = duration;
    const intervalId = setInterval(() => {
        seconds -= 1;
        onUpdate(seconds);  // Call the onUpdate function with the current time

        if (seconds <= 0) {
            clearInterval(intervalId);
            onUpdate(0);  // Optionally notify that the timer has ended
        }
    }, 1000);

    return {
        getCurrentTime: () => seconds,
        stop: () => {
            clearInterval(intervalId);
            console.log('Timer stopped manually with', seconds, 'seconds remaining.');
        }
    };
}