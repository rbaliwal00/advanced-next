import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FullWidthBgImage } from "./FullWidthBgImage";
import { ArrowCircleRight, ArrowCircleLeft } from "@mui/icons-material";
import { useResponsive } from "./useResponsive";
import { useRef, useState } from "react";
import { Grid } from "@mui/material";
import ThemeCard from "@components/form/Themecard";
// import { Box } from "@mui/material";

interface SliderData {
  image: string;
  title: string;
}

interface SliderProps {
  data: SliderData[];
  label: string;
  heading: string;
  subheading: string;
  slideNum: number;
  autoplay: boolean;
  autoplaySpeed: number;
  centerMode: boolean;
  handleClickItem: (val: string) => {};
  type: string;
}

const formDetails = {
  data: {
    user_auth: [
      {
        id: "8fa531e7-a81b-4073-a327-eea7d1f011de",
        email: "user@example.com",
        phone_number: "9999900000",
        is_active: true,
        created_at: "2024-05-26T12:36:15.382201+00:00",
        updated_at: "2024-05-26T12:36:15.382201+00:00",
        profile: [],
        organization_auth_map: [],
      },
      {
        id: "ae6da7d4-a02f-4ede-9e7b-be3d93c3c551",
        email: "user@example.com",
        phone_number: "9999900001",
        is_active: true,
        created_at: "2024-05-26T14:30:15.157117+00:00",
        updated_at: "2024-05-26T14:30:15.157117+00:00",
        profile: [
          {
            first_name: "Name 1",
            last_name: "Name 2",
            gender: "Brocolli",
            dob: "Today",
            image_url: "Url 1",
            website: "example.com",
            vc_theme: "Vc theme 1",
            cv_theme: "CV theme 1",
            sub_type: "Sub type 1",
            type: "Type 1",
            awards: [
              {
                brand_name: "Brand 1",
                department: "Department 1",
                name: "Some name",
                position: "Position 1",
              },
            ],
            education: [
              {
                cgpa: "5.5",
                from_date: "2023-05-01",
                to_date: "2024-03-01",
                institution_city: "City 1",
                institution_name: "Institution 1",
                level: "Level 1",
                passout_year: "2022",
                study_field: "Field 1",
              },
            ],
            experience: [
              {
                brand_name: "Brand 1",
                department: "Department 1",
                from_date: "2022-03-03",
                to_date: "2023-03-04",
                montly_salary: 100000,
                position: "Position 1",
                sub_category: "Sub category 1",
                type: "Type 1",
                work_experience: "Experience 1",
              },
            ],
            preference: [
              {
                aadhar: "Aadhar 1",
                internship: false,
                one_day_job: false,
                partime_job: false,
                passport: "Passport 1",
                working_city: "City 1",
              },
            ],
            references: [
              {
                brand_name: "Name 1",
                department: "Department 1",
                email: "user@example.com",
                name: "user",
                phone_number: "1231231231",
                position: "Position 1",
              },
            ],
          },
        ],
        organization_auth_map: [
          {
            organization: {
              vc_theme: "Vc Theme 2",
              brand_name: "Brand 1",
              business_nature: "Nature 1",
              company_name: "Company 1",
              image_url: "some_url",
              no_of_employee: 10,
              gst_pan: [
                {
                  gst: "Gst 1",
                  pan: "Pan 1",
                  status: "Pending",
                },
              ],
              contact: [
                {
                  name: "Name 1",
                  email: "user1@example.com",
                  website: "example.com",
                  phone_number: "9999900000",
                },
              ],
              organization_location_map: [
                {
                  location: {
                    area: "Area 1",
                    block_number: "1/02",
                    city: "City 1",
                    pincode: 123123,
                    state: "State 1",
                    geolocation: [
                      {
                        latitude: "12.21",
                        longitude: "21.12",
                        type: "Type 1",
                      },
                    ],
                  },
                },
              ],
              suppliers: [
                {
                  area: "Area 1",
                  scale: "large",
                },
              ],
            },
          },
        ],
      },
    ],
  },
};

const PrevArrow = (props) => {
  const { className, style, onClick, screenType } = props;

  return (
    <>
      {screenType !== "MOBILE" && (
        <div
          className={className}
          style={{ ...style, display: "block", left: "-15px", zIndex: "300" }}
          onClick={onClick}
          // onClick={() => sliderRef.current?.slickPrev()}
          // className="absolute top-[150px] left-[-30px] transform -translate-y-1/2 z-10 cursor-pointer"
        >
          <ArrowCircleLeft style={{ fontSize: 24, color: "black" }} />
        </div>
      )}
    </>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick, screenType } = props;

  return (
    <>
      {screenType !== "MOBILE" && (
        <div
          className={className}
          style={{ ...style, display: "block", right: "-15px", zIndex: "300" }}
          onClick={onClick}
          // onClick={() => sliderRef.current?.slickNext()}
          // className="absolute top-[150px] right-[-30px] transform -translate-y-1/2 z-10 cursor-pointer"
        >
          <ArrowCircleRight style={{ fontSize: 24, color: "black" }} />
        </div>
      )}
    </>
  );
};

const Carousel: React.FC<SliderProps> = ({
  data,
  label,
  heading,
  subheading,
  slideNum,
  autoplay,
  autoplaySpeed,
  centerMode,
  handleClickItem,
  type,
}) => {
  const { screenType } = useResponsive();
  const sliderRef = useRef<Slider>(null);
  // const settings: SliderSettings = {
  //   arrows: true,
  //   dots: true,
  //   swipeToSlide: true,
  //   infinite: false,
  //   autoplay: autoplay,
  //   autoplaySpeed: autoplaySpeed,
  //   slidesToShow: screenType === "MOBILE" ? 1 : 3,
  //   slidesToScroll: screenType === "MOBILE" ? 1 : 1,
  //   centerMode: true,
  //   slideNum:
  // };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      {
        brakpoint: 540,
        settings: {
          centerMode: false,
        },
      },
    ],
    prevArrow: <PrevArrow screenType={screenType} />,
    nextArrow: <NextArrow screenType={screenType} />,
  };

  return (
    <>
      <div className="w-full flex justify-center items-center">
        <div
          className="relative "
          style={{
            width: "calc(100% - 40px)",
            margin: "auto",
          }}
        >
          <div className="flex overflow-x-scroll space-x-4 p-4">
            <div
              onClick={() => handleClickItem("Vc Theme 1")}
              style={{ margin: "auto" }}
            >
              <ThemeCard
                type={type || "job"}
                formDetails={formDetails.data.user_auth[1]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

interface SliderSettings {
  arrows: boolean;
  dots: boolean;
  swipeToSlide: boolean;
  infinite: boolean;
  autoplay: boolean;
  autoplaySpeed: number;
  slidesToShow: number;
  slidesToScroll: number;
  centerMode: boolean;
}

export default Carousel;
