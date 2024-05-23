import React from "react";

import { Cards, Container, Footer, Header, Main } from "@components";
import Form from "@components/form";
import PreferenceFormExp from "@modules/users/components/PreferenceFormExp";
import PreferenceFormFresher from "@modules/users/components/PreferenceFormFresher";
import SupplierThemeSelection from "@components/themeSelection/SupplierThemeSelection";

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <SupplierThemeSelection />
    </Container>
  );
};

export default Home;
