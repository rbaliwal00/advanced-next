import Button from "@components/button";
import { DesktopNavbar } from "@components/desktop-navbar";
import { useMediaQuery } from "@mui/material";
import {
  HorecahAdsBanner,
  PrimaryLogo,
  bangalore,
  delhi,
  hydrabad,
  kolkata,
  mumbai,
} from "@public/assets/icons";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { addBanner } from "@public/assests";
import Link from "next/link";
import OtpRegistrationFlow from "@components/form/MobileOtpFlow";

const MobileVerification = (props) => {
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

  const matches = useMediaQuery("(max-width:600px)");

  return (
    <div>
      {matches ? (
        <div className="h-[100vh] bg-[rgb(17,59,115)] text-white p-4">
          <OtpRegistrationFlow />
        </div>
      ) : (
        <div>
          <div className="bg-[#002351] text-white h-[100vh]">
            <div className="flex gap-4 py-4">
              <div className="w-1/2 flex justify-center">
                <div className="mb-10 p-6 ">
                  <div className={`text-start pl-7`}>
                    <h1 className="text-xl md:text-3xl font-bold py-6">
                      Why join Horecah
                    </h1>
                    <ul className="leading-[1.8rem] text-sm md:text-xl">
                      <li>2000+ Student cvs to select</li>
                      <li>500+ Hotel to Apply</li>
                      <li>100+ Suppliers ready for service</li>
                    </ul>
                  </div>
                  <div className="">
                    <Image
                      src={addBanner}
                      width={400}
                      height={300}
                      alt="image"
                    />
                    {/* <Swiper
                      pagination={{ type: "bullets", clickable: true }}
                      autoplay={{ delay: 2000 }}
                      loop
                      modules={[Navigation, Pagination, Autoplay]}
                      className="center"
                      style={{
                        textAlign: "center",
                        margin: "auto",
                        width: "400px",
                      }}
                    >
                      {[1, 2, 3].map((el: number) => (
                        <SwiperSlide key={el}>
                          <Image
                            src={addBanner}
                            width={800}
                            height={400}
                            alt="image"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper> */}
                  </div>
                </div>
              </div>
              <div className="border-l-2 h-[60vh] mt-12"></div>
              <div className="mx-auto p-6">
                <OtpRegistrationFlow />
              </div>
            </div>
            <div className="text-center mt-[-10px]">
              <p className="mb-2">Cities we are in</p>
              <div className="flex justify-center gap-4">
                <div>
                  <Image src={delhi} alt="no img" />
                </div>
                <div>
                  <Image src={mumbai} alt="no img" />
                </div>
                <div>
                  <Image src={bangalore} alt="no img" />
                </div>
                <div>
                  <Image src={kolkata} alt="no img" />
                </div>
                <div>
                  <Image src={hydrabad} alt="no img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileVerification;