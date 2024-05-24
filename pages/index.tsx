import React from "react";

import { Cards, Container, Footer, Header, Main } from "@components";
import Form from "@components/form";
import PreferenceFormExp from "@modules/users/components/PreferenceFormExp";
import PreferenceFormFresher from "@modules/users/components/PreferenceFormFresher";
import SupplierThemeSelection from "@components/themeSelection/SupplierThemeSelection";
import LanguageCardList from "@components/languagecard-list";
import LanguageSelection from "@components/language-selection";

const Home: React.FC = () => {
  const LanguageData = [
    {
      id: 1,
      banner: "A",
      title: "English",
    },
    {
      id: 2,
      banner: "अ",
      title: "हिंदी",
    },
    {
      id: 3,
      banner: "ಅ",
      title: "ಕನ್ನಡ",
    },
    {
      id: 4,
      banner: "অ",
      title: "বাংলা",
    },
    {
      id: 5,
      banner: "அ",
      title: "தமிழ்",
    },
    {
      id: 6,
      banner: "आ",
      title: "मराठी",
    },
    {
      id: 7,
      banner: "O",
      title: "Odia​",
    },
    {
      id: 8,
      banner: "అ",
      title: "టేళూఙూ",
    },
    {
      id: 9,
      banner: "अ",
      title: "नेपाली",
    },
    {
      id: 10,
      banner: "અ",
      title: "ગુજરતિ",
    },
    {
      id: 11,
      banner: "അ",
      title: "മലയലമ്",
    },
  ];
  return (
    <Container>
      <LanguageSelection languageData={LanguageData} />
    </Container>
  );
};

export default Home;
