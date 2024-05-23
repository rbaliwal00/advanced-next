import React from "react";

import { Cards, Container, Footer, Header, Main } from "@components";
import Form from "@components/form";
import PreferenceFormExp from "@modules/users/components/PreferenceFormExp";
import PreferenceFormFresher from "@modules/users/components/PreferenceFormFresher";

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Form />
    </Container>
  );
};

export default Home;
