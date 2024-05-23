import Image from "next/image";
import React, { useState } from "react";
import style from "./index.module.css";

type Icon = {
  id: string;
  banner: any;
  title: string;
  link?: string;
  active?: boolean;
  bannerActive?: any;
  onClick?: () => void;
};

export type MobileNavbarProps = {
  list: Icon[];
  platform?: string;
  color?: string;
  backgroundColor?: string;
  width?: string;
};

const MobileNavbar = ({
  list,
  color,
  backgroundColor,
  platform,
}: MobileNavbarProps) => {
  const [active, setActive] = useState("2");
  return (
    <div
      className={style.mobile_footer_container}
      style={{ backgroundColor, color }}
    >
      {list &&
        list.map((item) => (
          <div key={item.id}>
            {item.id === active ? (
              <div
                className={style.mobile_footer_banner_active}
                onClick={() => setActive(item.id)}
              >
                <div
                  className={`${style.mobile_navbar_img} ${style.mobile_navbar_img_active}`}
                >
                  <Image
                    src={item.bannerActive}
                    alt=""
                    onClick={item.onClick}
                    height={50}
                  />
                  <div className={style.mobile_footer_title_active}>
                    {item.title}
                  </div>
                </div>
              </div>
            ) : (
              <div onClick={() => setActive(item.id)}>
                <div className="mobile-navbar-img">
                  <Image
                    src={item.banner}
                    alt=""
                    onClick={item.onClick}
                    height={45}
                  />
                </div>
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default MobileNavbar;
