import Image from "next/image";
import Link from "next/link";

import styles from "./index.module.css";
import { Box, useMediaQuery } from "@mui/material";
import Topbar from "@components/topbar";
import { Back, PrimaryLogo, SecondaryLogo } from "@public/assets/icons";
import { Logout } from "@modules/look";

interface HeaderProps {
  primary?: boolean;
  label?: string;
  logo?: any;
  logoHeight?: number;
  leftNavItems?: any;
  rightNavItems?: any;
  backgroundColor?: string;
  platform?: any;
  width?: string;
  button?: any;
  color?: string;
  onBack?: any;
}

export const DesktopNavbar = ({
  logo,
  label,
  button,
  logoHeight,
  primary,
  leftNavItems,
  rightNavItems,
  color,
  backgroundColor,
  platform,
  onBack,
  ...props
}: HeaderProps) => {
  const mode = primary ? styles.header__primary : styles.header__secondary;

  return (
    <header>
        <Box
          sx={{
            background: "#fff",
            display: "flex",
            justifyContent: 'space-between',
            px: "16px",
            py: '10x',
            alignItems: 'center',
            minHeight: "56px",
            boxShadow: '0 4px 25px rgba(0, 0, 0, 0.07)'
          }}
        >
          <Link href={"/"}>
            <a>
              <Image
                src={logo}
                height={logoHeight}
                alt="logo"
                style={{ alignSelf: "flex-start" }}
              />
            </a>
          </Link>
          <Logout
            style={{ width: "100%", textAlign: "right", alignSelf: "center" }}
          />
        </Box>
      {/* <Box
        className={`${styles.header} ${mode} xs:hidden`}
        style={{ backgroundColor: backgroundColor, color: color }}
      >
        <div className={styles.logo_container}>
          <Link href={"/"}>
            <a>
              <Image
                src={logo}
                height={logoHeight}
                alt="logo"
                className={styles.logo}
              />
            </a>
          </Link>
          <ul className={styles.left_nav}>
            {leftNavItems &&
              leftNavItems.map((item: any) => {
                return (
                  <li key={item.id}>
                    <Link href={item.path}>
                      <a className={styles.nav_li}>
                        <span>{item.title}</span>
                        {item.type === "dropdown" && (
                          <span className={styles.dropdown_arrow}>^</span>
                        )}
                      </a>
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
        <Logout
          style={{ width: "100%", textAlign: "right", alignSelf: "center" }}
        />
        <nav>
          <ul className={styles.nav_items}>
            {rightNavItems &&
              rightNavItems.map((item: any) => (
                <li key={item.id}>
                  <Link href={item.path}>
                    <a className={styles.nav_li}>{item.title}</a>
                  </Link>
                  {item.type === "dropdown" && <div>Hello</div>}
                </li>
              ))}
          </ul>
        </nav>
      </Box> */}
    </header>
  );
};
