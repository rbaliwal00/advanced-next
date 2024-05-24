import Button from "@components/button";
import { DesktopNavbar } from "@components/desktop-navbar";
import { useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";
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
import OTPInput from "./OtpInput";
import { addBanner } from "@public/assests";

const Otp = () => {
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
  const router = useRouter();
  return (
    <div>
      {matches ? (
        <div className="h-[100vh] bg-[rgb(17,59,115)] text-white p-4">
          <div className="text-center pt-2">
            <Image src={PrimaryLogo} alt="" />
          </div>
          <h4 className="text-center text-[22px]">Verify OTP</h4>
          <p className="text-[#C1C1C1] text-center mb-2 text-sm">
            Enter the 4 digit code sent to 9414098765
          </p>
          <div className="flex justify-center mb-10">
            <OTPInput />
          </div>
          <div className="">
            <Image src={addBanner} width={400} height={300} alt="image" />
          </div>
          <Button color="#113B73" backgroundColor="white" text="Verify" />
          <Button color="white" backgroundColor="#113B73" text="Back" />
          <p className="text-center font-[400] text-[10px] mt-6">
            By continuing agree to Horecah
          </p>
          <p className="text-center font-[600] text-[13.33px]">
            Terms of use & Privacy Policy
          </p>
        </div>
      ) : (
        <div>
          <div className="bg-[#113B73] text-white h-[100vh]">
            <DesktopNavbar {...desktopNavbarProps} />
            <div className="flex gap-4 ">
              <div className="w-1/2 flex justify-center">
                <div className="mb-10 p-6 ">
                  <h5 className="text-[23.04px]">Why join Horecah</h5>
                  <p>2000+ Student cvs to select</p>
                  <p>500+ Hotel to Apply</p>
                  <p>100+ Suppliers ready for service</p>
                  <div className="mt-10">
                    <Image src={HorecahAdsBanner} alt="" />
                  </div>
                </div>
              </div>
              <div className="border-l-2 h-[60vh] mt-12"></div>
              <div className="w-1/2 flex justify-center">
                <div className="p-6">
                  <h3 className="text-[24px] md:text-[33.18px] font-[600] text-center">
                    Verify OTP
                  </h3>
                  <p className="text-center font-[400] text-[13.33px] mb-12">
                    Enter the 4 digit code sent to 9090909090
                  </p>
                  <div className="flex justify-center">
                    <OTPInput />
                  </div>
                  <p className="mb-10 text-[12px] text-end mt-2">
                    Resend OTP in 10 secs
                  </p>
                  <Button
                    color="#113B73"
                    backgroundColor="white"
                    text="Verify"
                  />
                  <Button
                    color="white"
                    backgroundColor="#113B73"
                    text="Back"
                    onClick={() => router.back()}
                  />
                  <p className="text-center font-[400] text-[10px] mt-6">
                    By continuing agree to Horecah
                  </p>
                  <p className="text-center font-[600] text-[13.33px]">
                    Terms of use & Privacy Policy
                  </p>
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

export default Otp;
