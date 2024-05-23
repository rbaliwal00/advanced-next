import Image from "next/image";
import React from "react";
import styles from "./index.module.css";

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
  return (
    <header
      className={`${styles.topbar_container} ${styles.clearfix}`}
      style={{ backgroundColor, color, borderRadius }}
    >
      <div className={styles.topbar_back_button}>
        {button && <Image src={button} alt="" className="" onClick={onBack} />}
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
      <div className={styles.topbar_progress}>
        <div className="bg-stroke dark:bg-dark-3 relative h-1.5 w-full rounded-2xl">
          <div
            className="bg-[#FE8B4C] absolute top-0 left-0 h-full rounded-2xl"
            style={{ width: progress }}
          ></div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
