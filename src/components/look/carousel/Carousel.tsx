import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FullWidthBgImage } from "./FullWidthBgImage";
import { ArrowCircleRight, ArrowCircleLeft } from "@mui/icons-material";
import { useResponsive } from "./useResponsive";
import { useRef } from "react";
import ThemeCard from '../../form/Themecard'
import { Grid } from "@mui/material";
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
  handleClickItem: (val: string) => {}
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

const PrevArrow = (props) => {
  const { className, style, onClick, screenType } = props;

  return (
    <>
      {screenType !== "MOBILE" && (
        <div
          className={className}
          style={{ ...style, display: "block", left: '-15px', zIndex: '300' }}
          onClick={onClick}
        // onClick={() => sliderRef.current?.slickPrev()}
        // className="absolute top-[150px] left-[-30px] transform -translate-y-1/2 z-10 cursor-pointer"
        >
          <ArrowCircleLeft style={{ fontSize: 24, color:'black' }} />
        </div>
      )}
    </>
  )
}

const NextArrow = (props) => {
  const { className, style, onClick, screenType } = props;

  return (
    <>
      {screenType !== "MOBILE" && (
        <div
          className={className}
          style={{ ...style, display: "block", right:'-15px', zIndex:'300' }}
          onClick={onClick}
        // onClick={() => sliderRef.current?.slickNext()}
        // className="absolute top-[150px] right-[-30px] transform -translate-y-1/2 z-10 cursor-pointer"
        >
          <ArrowCircleRight style={{ fontSize: 24, color: 'black' }} />
        </div>
      )}
    </>
  )
}

const Carousel: React.FC<SliderProps> = ({
  data,
  label,
  heading,
  subheading,
  slideNum,
  autoplay,
  autoplaySpeed,
  centerMode,
  handleClickItem
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
    responsive:[
      {
        brakpoint:540,
        settings:{
          centerMode:false
        }
      }
    ],
    prevArrow: <PrevArrow screenType={screenType} />,
    nextArrow: <NextArrow screenType={screenType} />
  };

  return (
    <>
      <div className="w-full flex justify-center items-center">
        <div className="relative " style={{
          width: 'calc(100% - 40px)',
          margin: 'auto',
        }}>

            <div className="flex overflow-x-scroll space-x-4 p-4">
              {data?.length > 0 &&
                data?.map((item, index) => (
                  <div onClick={() => handleClickItem(item.title)} key={index}>
                    <ThemeCard type={'job'} formDetails={formDetails} />
                  </div>
                ))}
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