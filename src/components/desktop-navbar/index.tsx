import Image from "next/image";
import Link from "next/link";

import styles from "./index.module.css";

interface HeaderProps {
  primary?: boolean;
  logo?: any;
  logoHeight?: number;
  leftNavItems?: any;
  rightNavItems?: any;
  backgroundColor?: string;
  platform?: any;
  width?: string;
  color?: string;
}

export const DesktopNavbar = ({
  logo,
  logoHeight,
  primary,
  leftNavItems,
  rightNavItems,
  color,
  backgroundColor,
  platform,
  ...props
}: HeaderProps) => {
  const mode = primary ? styles.header__primary : styles.header__secondary;

  return (
    <header
      className={`${styles.header} ${mode}`}
      style={{ backgroundColor: backgroundColor, color: color }}
    >
      <div className={styles.logo_container}>
        <Image
          src={logo}
          height={logoHeight}
          alt="logo"
          className={styles.logo}
        />
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
    </header>
  );
};
