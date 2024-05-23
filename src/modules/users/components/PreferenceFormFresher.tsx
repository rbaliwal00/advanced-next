import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import styles from "./index.module.css";
import {
  Back,
  GraduateIcon,
  OneDayJob,
  PrimaryLogo,
  SecondaryLogo,
} from "@public/assets/icons";
import { TimeIcon } from "@mui/x-date-pickers";
import Topbar from "@components/topbar";
import RadioCard from "@components/radio-card";
import UploadDoc from "@components/upload-doc";
import Button from "@components/button";
import { DesktopNavbar } from "@components/desktop-navbar";
import { Box, useMediaQuery } from "@mui/material";

const desktopNavbarProps = {
  logo: SecondaryLogo,
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
          title: "Manage Jobs",
          path: "/manage-jobs",
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

const webTopbarProps = {
  label: "Last Step",
  backgroundColor: "white",
  color: "#374151",
  progress: "30%",
  borderRadius: 12,
};
const mobileTopbarProps = {
  label: "Last Step",
  type: "primary",
  color: "white",
  button: Back,
  logo: PrimaryLogo,
  progress: "30%",
  borderRadius: 0,
};

const radioCardProps1 = {
  label: "Do you want one day job ?",
  buttons: [
    {
      id: "1",
      label: "Yes",
    },
    {
      id: "2",
      label: "No",
    },
  ],
  icon: OneDayJob,
};

const radioCardProps2 = {
  label: "Do you want Internship ?",
  buttons: [
    {
      id: "1",
      label: "Yes",
    },
    {
      id: "2",
      label: "No",
    },
  ],
  icon: GraduateIcon,
  iconHeight: 30,
  backgroundColor: "#113B73",
};

const radioCardProps3 = {
  label: "Do you want Part-Time job ?",
  buttons: [
    {
      id: "1",
      label: "Yes",
    },
    {
      id: "2",
      label: "No",
    },
  ],
  icon: TimeIcon,
  iconHeight: 30,
  backgroundColor: "#113B73",
};

const uploadDocProps = {
  title: "Upload ID Image",
  btnList: [
    {
      id: "1",
      label: "Aadhar",
    },
    {
      id: "2",
      label: "Passport",
    },
  ],
};

const PreferenceFormFresher = ({ platform, ...props }: any) => {
  // const { router } = props;
  const matches = useMediaQuery("(max-width:600px)");

  if (matches) {
    platform = "mobile";
  } else {
    platform = "web";
  }

  return (
    <Box
      sx={{
        maxWidth: {
          xs: "100%", // If viewport width is below 600px, maxWidth is 100%
          sm: "608px", // If viewport width is above 600px, maxWidth is 608px
        },
        m: "auto",
        mt: "32px",
        px: {
          xs: "16px",
          sm: "35px",
        },
        py: {
          xs: "16px",
          sm: "30px",
        },
        boxShadow: {
          xs: "none",
          sm: "0px 4px 25px 0px rgba(0, 0, 0, 0.05)",
        },
        borderRadius: 2,
        bgcolor: "background.paper",
      }}
    >
      <div className={`${matches ? "px-6" : ""}`}>
        <div
          className={`${styles.exp_margin_top} ${styles.exp_info_container}`}
        >
          <InfoOutlinedIcon
            className={styles.exp_info}
            onClick={() => console.log("info")}
          />
          <RadioCard {...radioCardProps1} />
        </div>
        <div className={styles.exp_margin_top}>
          <RadioCard {...radioCardProps2} />
        </div>
        <div className={styles.exp_margin_top}>
          <RadioCard {...radioCardProps3} />
        </div>
        <div className={styles.exp_margin_top}>
          <UploadDoc {...uploadDocProps} />
        </div>
        <div className={`flex justify-between ${styles.exp_margin_top}`}>
          <div className="w-[73%]">
            <Button text="Confirm" />
          </div>
          <div className="w-[25%]">
            <Button text="Back" kind="secondary" />
          </div>
        </div>
      </div>
    </Box>
  );
};

export default PreferenceFormFresher;
