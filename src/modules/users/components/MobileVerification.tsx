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
import { useRouter } from "next/router";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { addBanner } from "@public/assests";
import Link from "next/link";

const MobileVerification = (props: any) => {
  // const {
  //   router: { push },
  // } = props;

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
        <div className="h-[100vh] bg-[rgb(17,59,115)] text-white p-5">
          <div className="text-center pt-2">
            <Image src={PrimaryLogo} alt="" />
          </div>
          <h3 className="text-[33.18px] text-center font-semibold">Welcome!</h3>
          <h4 className="text-center text-[27px] font-semibold">
            Enter Mobile Number
          </h4>
          <p className="text-center text-[13px] ">
            We Will send you a Confirmation Code
          </p>
          <div className="mb-11 mt-3">
            <label className="mb-[8px] block text-[16px] text-base font-[600] text-dark dark:text-white">
              Mobile Number
            </label>
            <input
              type="text"
              placeholder="Type Mobile Number"
              className="w-full text-black rounded-md border border-stroke dark:border-dark-3 py-[10px] px-5 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2 dark:disabled:bg-dark-4 dark:disabled:border-dark-4"
            />
          </div>
          <div className={`mb-9 text-center`}>
            <Swiper
              slidesPerView={1}
              spaceBetween={0}
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
                  {/* <div className={styles.bannerImage}> */}
                  <Image src={addBanner} width={800} height={400} alt="image" />
                  {/* </div> */}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <Button color="#113B73" backgroundColor="white" text="Get OTP" />
          <p className="text-center font-[400] text-[10px] mt-6">
            By continuing agree to Horecah
          </p>
          <p className="text-center font-[600] text-[13.33px]">
            Terms of use & Privacy Policy
          </p>
        </div>
      ) : (
        <div>
          <div className="bg-[#002351] text-white h-[100vh]">
            <DesktopNavbar {...desktopNavbarProps} />
            <div className="flex gap-4 py-4">
              <div className="w-1/2 flex justify-center">
                <div className="mb-10 p-6 ">
                  <div className={`text-start pl-7`}>
                    <h1 className="text-3xl font-bold py-6">
                      Why join Horecah
                    </h1>
                    <ul className="leading-[1.8rem] text-xl ">
                      <li>2000+ Student cvs to select</li>
                      <li>500+ Hotel to Apply</li>
                      <li>100+ Suppliers ready for service</li>
                    </ul>
                  </div>
                  <div className="mt-10">
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={0}
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
                          {/* <div className={styles.bannerImage}> */}
                          <Image
                            src={addBanner}
                            width={800}
                            height={400}
                            alt="image"
                          />
                          {/* </div> */}
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </div>
              <div className="border-l-2 h-[60vh] mt-12"></div>
              <div className="w-1/2 flex justify-center">
                <div className="p-6">
                  <h3 className="text-[24px] md:text-[33.18px] font-[600] ">
                    Enter Mobile Number
                  </h3>
                  <p className="text-center font-[400] text-[13.33px] mb-20">
                    We Will send you a Confirmation Code
                  </p>
                  <div className="mb-14">
                    <label className="mb-[10px] block text-[16px] text-base font-[600] text-dark dark:text-white">
                      Mobile Number
                    </label>
                    <input
                      type="text"
                      placeholder="Type Mobile Number"
                      className="w-full text-black rounded-md border border-stroke dark:border-dark-3 py-[10px] px-5 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2 dark:disabled:bg-dark-4 dark:disabled:border-dark-4"
                    />
                  </div>
                  <Button
                    color="#113B73"
                    backgroundColor="white"
                    text="Get OTP"
                    // onClick={() => Router.push("verify")}
                  />
                  <p className="text-center font-[400] text-[12px] mt-5">
                    By continuing agree to Horecah
                  </p>
                  <div className="text-center font-[600] text-[15.33px]">
                    <Link href="">
                      <p className="inline-block border-b-2 border-white">
                        Terms of use & Privacy Policy
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
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
