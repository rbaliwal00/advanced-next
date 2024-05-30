import React from "react";
import { Container, Typography, Card, CardContent, Grid, Box, Avatar } from '@mui/material';

interface FullWidthBgImageProps {
  image: string;
  label: string;
  text: string;
  height: string;
  borderRadius: string;
}

export const FullWidthBgImage: React.FC<FullWidthBgImageProps> = ({
  image,
  label,
  text,
  height,
  borderRadius,
}) => {
  return (
    <div className="">

<Container style={{ display: 'flex', justifyContent: 'center', width:'100%' }}>
      <Card style={{ maxWidth: 600, padding: 20, boxShadow: '0 3px 5px 2px rgba(105, 135, 255, .3)', width:'328px', height:'200px' }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3} style={{ display: 'flex', alignItems: 'right', justifyContent: 'center' }}>
              <Avatar 
                alt="Brand Logo" 
                src="/path/to/logo.png" // Update with your logo path
                style={{ width: 100, height: 100 }}
              />
            </Grid>
            <Grid item xs={12} sm={9} style={{ textAlign: 'left' }}>
              <Typography variant="h5" component="div" style={{ fontWeight: 'bold' }}>
                Brand Name
              </Typography>
              <Typography variant="subtitle1">
                Company Name
              </Typography>
              <Typography variant="body2" style={{ marginTop: '10px' }}>
                Contact Person
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Person Name
              </Typography>
              <Typography variant="body2" style={{ marginTop: '10px' }}>
                Contact No.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                1234567890
              </Typography>
            </Grid>
          </Grid>
          <Box style={{ marginTop: '20px', textAlign: 'left' }}>
            <Typography variant="body2" color="text.secondary">
              Nature of Business
            </Typography>
            <Typography variant="body2" style={{ fontWeight: 'bold' }}>
              Hotel, Bar
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{ marginTop: '10px' }}>
              Nature of Employees
            </Typography>
            <Typography variant="body2" style={{ fontWeight: 'bold' }}>
              1-10
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{ marginTop: '10px' }}>
              Current Location
            </Typography>
            <Typography variant="body2" style={{ fontWeight: 'bold' }}>
              Block no., City
              <br />
              State
              <br />
              Pincode
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{ marginTop: '10px' }}>
              Email
            </Typography>
            <Typography variant="body2" style={{ fontWeight: 'bold' }}>
              someemail@gmail.com
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>

      </div>
  );
};
