import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

import { PrimaryLogo } from "@public/assets/icons";
import ExperienceSelection from "./ExperienceSelection";
import Otp from "./Otp";
import PreferenceFormFresher from "./PreferenceFormFresher";
import SupplierThemeSelection from "@components/themeSelection/SupplierThemeSelection";

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
      {/* <PreferenceFormExp platform="web" /> */}
      {/* <PreferenceFormFresher /> */}
      <SupplierThemeSelection label={""} buttonTitle={""} closeOnBackdropClick={false} />
      {/* <MobileVerification /> */}
      {/* <MobileNumberForm /> */}
      {/* <MobileVerification /> */}
      {/* <Otp /> */}
      {/* <ExperienceSelection /> */}
    </div>
  );
};

export default Component;
