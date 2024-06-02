import React from 'react';
import { Container, Typography } from '@mui/material';
import FormikEnhancedExperienceForm from './ExperienceForm';

const App = () => (
  <Container>
    <Typography variant="h2" gutterBottom>
      Experience Form
    </Typography>
    <FormikEnhancedExperienceForm title="Experience Form" />
  </Container>
);

export default App;
