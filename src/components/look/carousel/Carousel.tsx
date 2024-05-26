import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FullWidthBgImage } from "./FullWidthBgImage";
import { ArrowCircleRight, ArrowCircleLeft } from "@mui/icons-material";
import { useResponsive } from "./useResponsive";
import { useRef } from "react";
import ThemeCard from '../../form/Themecard'

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
  centerMode:boolean;
}

const formDetails = {
  name: 'kikhae',
  position: 'Architect',
  department: 'IT',
  currentLocation: 'Blr',
  number: '8830285891',
  email: 'beingTmk@gmail.com',
  preferredLocation: 'hyd',
  experience: 'Experienced'
}

const Carousel: React.FC<SliderProps> = ({
  data,
  label,
  heading,
  subheading,
  slideNum,
  autoplay,
  autoplaySpeed,
  centerMode
}) => {
  const { screenType } = useResponsive();
  const sliderRef = useRef<Slider>(null);
  const settings: SliderSettings = {
    arrows: false,
    dots: true,
    swipeToSlide: true,
    infinite: true,
    autoplay: autoplay,
    autoplaySpeed: autoplaySpeed,
    slidesToShow: screenType === "MOBILE" ? 2 : slideNum,
    slidesToScroll: screenType === "MOBILE" ? 2 : slideNum,
    centerMode,
  };

  return (
    <>
      <div className="w-full flex justify-center items-center">
        <div className="relative w-full">
          {screenType !== "MOBILE" && (
            <div
              onClick={() => sliderRef.current?.slickPrev()}
              className="absolute top-[150px] left-[-30px] transform -translate-y-1/2 z-10 cursor-pointer"
            >
              <ArrowCircleLeft style={{ fontSize: 24 }} />
            </div>
          )}

          <Slider {...settings} ref={sliderRef} variableWidth>
            {data?.length > 0 &&
              data?.map((item, index) => (
                <a
                  key={index}
                  href="https://blog-gray-zeta.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ThemeCard type={'job'} formDetails={formDetails}/>
                </a>
              ))}
          </Slider>
          {screenType !== "MOBILE" && (
            <div
              onClick={() => sliderRef.current?.slickNext()}
              className="absolute top-[150px] right-[-30px] transform -translate-y-1/2 z-10 cursor-pointer"
            >
              <ArrowCircleRight style={{ fontSize: 24 }} />
            </div>
          )}
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
