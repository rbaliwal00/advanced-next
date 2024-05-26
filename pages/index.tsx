import React from "react";

import { Cards, Container, Footer, Header, Main } from "@components";
import Form from "@components/form";
import PreferenceFormExp from "@modules/users/components/PreferenceFormExp";
import PreferenceFormFresher from "@modules/users/components/PreferenceFormFresher";
import SupplierThemeSelection from "@components/themeSelection/SupplierThemeSelection";
import Themecard from '@components/form/Themecard'

const dummyData = {
  name: 'saksham',
  experience: 'fresher',
  number: 8209275391,
  email: 'saks5391@gmail.com',
  currentLocation: 'Blr',
  preferredLocation: ['Hyd', 'Blr', 'pune'],
  department: 'IT',
  position: 'Designer'
}

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      {/* <Themecard type={'job'} formDetails={dummyData} /> */}
      <Form />
    </Container>
  );
};

export default Home;
