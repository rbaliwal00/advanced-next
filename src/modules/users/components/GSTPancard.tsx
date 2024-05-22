import Button from "@components/button";
import { DesktopNavbar } from "@components/desktop-navbar";
import Topbar from "@components/topbar";
import UploadCard from "@components/upload-card";
import {
  SecondaryLogo,
  Back,
  PrimaryLogo,
  Gst,
  Pancard,
} from "@public/assets/icons";
import React from "react";

import styles from "./index.module.css";

const GstPancard = ({ platform }: any) => {
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
    label: "GST / PAN",
    backgroundColor: "white",
    color: "#374151",
    progress: "30%",
    borderRadius: 12,
  };
  const mobileTopbarProps = {
    label: "GST / PAN",
    type: "primary",
    color: "white",
    button: Back,
    logo: PrimaryLogo,
    progress: "30%",
    borderRadius: 0,
  };

  return (
    <div>
      {platform === "web" && (
        <div className="mb-10">
          <DesktopNavbar {...desktopNavbarProps} />
        </div>
      )}
      <div className={styles.gst_container}>
        <div className={`${styles.content_center}`}>
          {platform === "web" && <Topbar {...webTopbarProps} />}
          {platform === "mobile" && <Topbar {...mobileTopbarProps} />}
          <div className="mt-10">
            <UploadCard
              description="Description"
              logo={Gst}
              buttonText="Upload GST"
            />
          </div>
          <div className="mt-10">
            <UploadCard
              description="Description"
              logo={Pancard}
              buttonText="Upload PAN"
            />
          </div>
          <div className="flex justify-between mt-10">
            <div className="w-[73%]">
              <Button text="Next" />
            </div>
            <div className="w-[25%]">
              <Button text="Back" kind="secondary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GstPancard;
