import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import back from "./assets/webImages/backIcons.png";
import Topbar from "@components/top-bar";
import {
  LogoutIcon,
  PrimaryLogo,
  kycSucess,
  kycVerificationLogo,
  rejectLogo,
} from "@public/assests";
import { DesktopNavbar } from "@components/desktop-navbar";

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
const topBar = {
  label: "Label",
  backgroundColor: "#113B73",
  color: "white",
  button: LogoutIcon,
  logo: PrimaryLogo,
  progress: "30%",
};

const KYCVerification = () => {
  return (
    <div className={styles.kyc}>
      {/* <div className={styles.desktopNav}>
                <DesktopNavbar {...desktopNavbarProps} />
            </div>
            <div className={styles.topBar}>
                <Topbar {...topBar} />
            </div> */}
      <div className={styles["topbar-verification"]}>
        <Topbar backgroundColor="white" />
      </div>
      <div className={styles["kyc-info"]}>
        <Image src={kycVerificationLogo} alt="no img" />
        <h4>
          Thank you for your interest. KYC Verification will be updated in 24
          hours as per our company’s policy.
        </h4>
      </div>
      {/* tempararly button */}
      <div className={styles['next-btn']}>
      <button type="button" onClick={()=>alert('next button')}>Next</button>
      </div>
    </div>
  );
};

export default KYCVerification;
