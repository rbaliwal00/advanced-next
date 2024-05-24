import React from "react";
import Image from "next/image";
import Topbar from "@components/top-bar";
import { LogoutIcon, PrimaryLogo, rejectLogo } from "@public/assests";
import styles from "./index.module.css";
import { DesktopNavbar } from "@components/desktop-navbar";
import Button from "@components/button";

type Props = {
  contact: () => void;
};

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

const KYCReject = ({ contact }: Props) => {
  return (
    <div className={styles.kyc}>
      
      <div className={styles["topbar-verification"]}>
        <Topbar backgroundColor="white"/>
      </div>
      <div className={styles["kyc-info"]}>
        <Image src={rejectLogo} alt="no img" />
        <h3 className="">
          Your KYC has been <br /> rejected
        </h3>
        <button type="button" onClick={contact}>
          Contact Us
        </button>
      </div>.
      {/* temperarly button */}
      <div className={styles['next-btn']}>
      <button type="button" onClick={()=>alert('next button')}>Next</button>
      </div>
    </div>
  );
};

export default KYCReject;
