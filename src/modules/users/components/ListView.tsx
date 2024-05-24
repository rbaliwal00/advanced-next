import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

import { PrimaryLogo } from "@public/assets/icons";
import ExperienceSelection from "./ExperienceSelection";
import Otp from "./Otp";
import PreferenceFormFresher from "./PreferenceFormFresher";
import SupplierThemeSelection from "@components/themeSelection/SupplierThemeSelection";
import PreferenceFormExp from "./PreferenceFormExp";
import SupplierVisitingCardPage from "@components/visitingCardPage/SupplierVisitingCardPage";
import GstPancard from "./GSTPancard";

const Component = (props) => {
  const { loadingPosts, posts = {}, onDelete } = props;
  const { nodes = [] } = posts;

  const desktopNavbarProps = {
    logo: PrimaryLogo,
    primary: true,
    rightNavItems: [
      {
        id: 1,
        type: "link",
        title: "Hire",
        path: "/hire",
      },
      {
        id: 2,
        type: "link",
        title: "Become Supplier",
        path: "/supplier",
      },
      {
        id: 3,
        type: "link",
        title: "Job / Internship",
        path: "/job",
      },
      {
        id: 4,
        type: "link",
        title: "Job / Internship",
        path: "/job",
      },
    ],
    leftNavItems: [
      {
        id: 1,
        type: "dropdown",
        title: "Jobs",
        path: "jobs",
        links: [
          {
            id: 1,
            type: "link",
            title: "Search Jobs",
            path: "/search-jobs",
          },
          {
            id: 2,
            type: "link",
            path: "/manage-jobs",
            title: "Manage Jobs",
          },
        ],
      },
      {
        id: 2,
        type: "link",
        title: "Learning",
        path: "/learning",
      },
    ],
  };

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

  if (loadingPosts) {
    return (
      <Box>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <div className="">
      {/* <GstPancard platform="mobile" /> */}
      <PreferenceFormExp onClick={props.handleClick} />
      {/* <PreferenceFormExp platform="web" /> */}
      {/* <PreferenceFormFresher /> */}
      {/* <SupplierThemeSelection label={""} buttonTitle={""} closeOnBackdropClick={false} /> */}
      <SupplierVisitingCardPage />
      {/* <MobileVerification /> */}
      {/* <MobileNumberForm /> */}
      {/* <MobileVerification /> */}
      {/* <Otp /> */}
      <ExperienceSelection />
    </div>
  );
};

export default Component;
