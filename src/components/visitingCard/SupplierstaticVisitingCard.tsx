import { Box, Typography } from '@mui/material'
import Image from 'next/image';
import React from 'react'

interface SupplierVisitingCardProps {  
  companyName: string;
  contactPersonName: string;
  natureOfBusiness:string;
  themeColor: 'red' | 'blue' | 'green' | 'yellow';
  mobileNumber: string; 
  email: string; 
  website: string; 
  address: string; 
  imageURL: string; 
  brandName: string; 
  numberofEmployees: number;
  state: string;
  pincode: number;
  areaOfCoverage: string;
  scaleOfSupply: string;
  }
  

const SupplierStaticVisitingCard = ({...props}:SupplierVisitingCardProps) => {

    const fontSizeValue = {color:'#4b5563',fontSize:{xs: '11px', sm: '16px'},fontWeight:500}

  return (
    <Box
      my={0}
      display="grid"
      gridAutoFlow={'column'}
      alignItems="center"
      gap={12}
      p={2}
      sx={{ color:'#8899A8',
        border: '2px solid grey',
        fontSize:{xs: '8px', sm: '12px'   },
        fontWeight:400,
        width: {xs:'328px',sm:'557px'}
       }}
      boxShadow={'0px 4px 15px 0px #0000000D'}
      border={'1px solid #0000'}
      borderColor={'white'}
      
    >
      <Box textAlign={'right'} justifyItems={'end'} display={'grid'}>
        <img width={100} height={100} src={props.imageURL} alt='image' className='w-16 h-16 rounded-[50%]' />
        <Typography sx={{fontSize:{xs: '16px', sm: '20px'},color:'#4b5563',fontWeight:500}}>
          <p>{props.brandName}</p>
        </Typography>
        <Typography sx={{fontSize:{xs: '11px', sm: '16px'},color:'#4b5563',fontWeight:500}}>
          <p>{props.companyName}</p>
        </Typography>
        <p>Contact Person</p>
        <Typography sx={{fontSize:{xs: '11px', sm: '16px'},color:'#4b5563',fontWeight:500}}>
            <p>{props.contactPersonName}</p>
        </Typography>
        <p>Contact No.</p>
        <Typography sx={{fontSize:{xs: '11px', sm: '16px'},color:'#4b5563',fontWeight:500}}>
            <p >{props.mobileNumber}</p>
        </Typography>
      </Box>
      <Box>
        <p>Nature of Business</p>
        <Typography sx={fontSizeValue}>
            {props.natureOfBusiness}
        </Typography>
        <p>Area of Coverage</p>
        <Typography sx={fontSizeValue}>
            {props.areaOfCoverage}
        </Typography>
        <p>Scale of Supply</p>
        <Typography sx={fontSizeValue}>
            {props.scaleOfSupply}
        </Typography>
        <p>Current Location</p>
        <Typography sx={{fontSize:{xs: '11px', sm: '16px'},color:'#4b5563',fontWeight:500}}>
           <p> {props.address}</p>
           <p> {props.state}</p>
           <p> {props.pincode}</p>
        </Typography>
      </Box>
    </Box>
  )
}

export default SupplierStaticVisitingCard