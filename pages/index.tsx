import React from "react";

import { Cards, Container, Footer, Header, Main } from "@components";
import Button from "@components/button";
import PreferenceFormExp from "@modules/users/components/PreferenceFormExp";

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <PreferenceFormExp />
    </Container>
  );
};

export default Home;
