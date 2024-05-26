import LanguageCard from "@components/language-card";
import { banglore, delhi, hydrabad, kolkata, mumbai } from "@public/assests";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./index.module.css";
import { Box } from "@mui/material";
import Cities from "@components/cities/cities";

type LanguageCardProps = {
  id: number;
  banner: string;
  title: string;
};

type Props = {
  languageData: LanguageCardProps[];
  hoverColor?: string;
  backgroundColor?: string;
};

const LanguageSelection = ({
  languageData,
  hoverColor,
  backgroundColor,
}: Props) => {
  const router = useRouter();

  const handleLangauageSelect = (language: string) => {
    router.push("/users/login/mobile-otp");
  };

  return (
    <div className={`${styles["main-page"]} min-h-[calc(100vh-64px)]`}>
      <div className={`${styles["language-list"]} `}>
        <div className={`${styles["main-languages"]}`}>
          <h1 className={`${styles.heading} text-[#4B5563]`}>
            Choose Language
          </h1>
          <div className={styles["languages-grid"]}>
            {languageData &&
              languageData?.map((language: any) => (
                <LanguageCard
                  banner={language.banner}
                  title={language.title}
                  backgroundColor={backgroundColor}
                  hoverColor={hoverColor}
                  onClick={() => handleLangauageSelect(language.title)}
                />
              ))}
          </div>
        </div>
        <Box
          sx={{
            width: {
              xs: "100%",
              sm: "100%",
              md: "75%",
            },
            margin: "auto",
            marginTop: "80px",
          }}
        >
          <Cities />
        </Box>
      </div>
    </div>
  );
};

export default LanguageSelection;
