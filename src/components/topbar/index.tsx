import Image from "next/image";
import React from "react";
import styles from "./index.module.css";
import { Box, LinearProgress, useMediaQuery } from "@mui/material";

export type TopbarProps = {
  label?: string;
  logo?: any;
  button?: any;
  logoHeight?: number;
  platform?: string;
  color?: string;
  backgroundColor?: string;
  onBack?: () => void;
  progress?: string;
  borderRadius?: number;
};

const ProgressBar = (progress: string = "") => {
  return (
    <LinearProgress
      variant="determinate"
      value={30}
      style={{ background: "#E5E7EB" }}
      sx={{ "& .MuiLinearProgress-bar": { backgroundColor: "#FE8B4C" } }}
    />
  );
};

const Topbar = ({
  label,
  logo,
  button,
  logoHeight,
  color,
  backgroundColor,
  progress,
  onBack,
  borderRadius,
  platform,
}: TopbarProps) => {

  const mobile = useMediaQuery('(max-width:600px)');

  if (mobile) {
    return <Box>{ProgressBar(progress)}</Box>
  } else {
    return (
      <Box
     
        className={`${styles.topbar_container} ${styles.clearfix}`}
        style={{ backgroundColor, color, borderRadius }}
      >
        <div className={styles.topbar_back_button}>
          {button && (
            <Image src={button} alt="" className="" onClick={onBack} />
          )}
          <div
            className={`${styles.topbar_label} ${
              button && styles.topbar_label_button
            }`}
          >
            {label}
          </div>
        </div>
        {logo && (
          <div className={styles.topbar_logo}>
            <Image src={logo} alt="" className="" height={logoHeight ?? 30} />
          </div>
        )}
        <Box className={`${styles.topbar_progress}`}>
          {ProgressBar(progress)}
        </Box>
      </Box>
    );
  }
};

export default Topbar;
