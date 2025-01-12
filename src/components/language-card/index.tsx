"use client";
import React, { useState } from "react";
import styles from "./index.module.css";

type Props = {
  banner: string;
  title: string;
  hoverColor?: string;
  backgroundColor?: string;
  onClick: () => void;
};

const LanguageCard = ({
  banner,
  title,
  hoverColor,
  backgroundColor,
  onClick,
}: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const cardStyle = {
    backgroundColor: isHovered ? hoverColor : backgroundColor,
  };

  return (
    <div
      className={styles.card}
      style={cardStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <h1 style={{ fontWeight: "bold"}}>{banner}</h1>
      <p style={{ fontSize: "19.2px", fontWeight: "400" }}>{title}</p>
    </div>
  );
};

export default LanguageCard;
