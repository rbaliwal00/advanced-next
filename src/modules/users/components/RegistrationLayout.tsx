import React from "react";

import styles from "./index.module.css";
import Button, { ButtonProps } from "@components/button";
import Topbar, { TopbarProps } from "@components/topbar";

type Props = {
  buttonProps?: ButtonProps;
  topbarProps?: TopbarProps;
};

const RegistationLayout = ({ buttonProps, topbarProps }: Props) => {
  return (
    <div>
      <div>
        <Topbar {...topbarProps} />
      </div>
      <div className={styles.profile_layout_bottom}>
        <div className={styles.profile_layout_bottom_button}>
          <Button {...buttonProps} />
        </div>
      </div>
    </div>
  );
};

export default RegistationLayout;
