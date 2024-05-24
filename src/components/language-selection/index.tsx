import LanguageCard from "@components/language-card";
import { banglore, delhi, hydrabad, kolkata, mumbai } from "@public/assests";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./index.module.css";

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
    <div className={styles["main-page"]}>
      <div className={styles["language-list"]}>
        <div className={styles["main-languages"]}>
          <h1 className={styles.heading}>Choose Language</h1>
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
        <div className={styles.cities}>
          <p>Cities we are in</p>
          <h1>
            <Image src={delhi} alt="no img" />
          </h1>
          <h1>
            <Image src={mumbai} alt="no img" />
          </h1>
          <h1>
            <Image src={banglore} alt="no img" />
          </h1>
          <h1>
            <Image src={kolkata} alt="no img" />
          </h1>
          <h1>
            <Image src={hydrabad} alt="no img" />
          </h1>
        </div>
        <Box
          sx={{
            width: {
              xs: "100%",
              sm: "100%",
              md: "75%",
            },
            margin: "auto",
          }}
        >
          <Cities />
        </Box>
      </div>
    </div>
  );
};

export default LanguageSelection;
