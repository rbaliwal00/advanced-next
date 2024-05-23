import { useEffect, useState } from "react";

import colorBlue from '@public/assets/JobVisitingCard/color-blue.png';
import colorGreen from '@public/assets/JobVisitingCard/color-green.png';
import colorRed from '@public/assets/JobVisitingCard/color-red.png';
import colorYellow from '@public/assets/JobVisitingCard/color-yellow.png';

interface JobVisitingCardProps {  
  name: string;
  experience: string;
  position: string;
  department: string;
  imageURL: string; 
  themeColor: 'red' | 'blue' | 'green' | 'yellow';
  mobileNumber: string; 
  email: string; 
  currentLocation: string;
  preferredLocationOne: string;
  preferredLocationTwo: string;
}

const JobVisitingCard = ({...props}: JobVisitingCardProps) => {

  const [bgImage, setBgImage] = useState<any>();

  useEffect(()=>{
    console.log('hi image ',props.themeColor)
    switch(props.themeColor){
      case 'red':
        setBgImage(colorRed.src);
        break;
      case 'blue':
        setBgImage(colorBlue.src);
        break;
      case 'green':
        setBgImage(colorGreen.src);
        break;
      case 'yellow':
        setBgImage(colorYellow.src);
        break;
      default:
          return undefined;
    }

    // if(props.themeColor === 'red'){

    // }
  },[props.themeColor])


  return (
    <div className="h-full">
        <div 
          // style={{height:'70vh',width:'73vw'}}
          className="h-full"
          >
          <div
            style={{
              backgroundImage: `url(${bgImage})` ,
              backgroundSize: "100% 100%",
              backgroundPosition: "center",
              backgroundRepeat: 'no-repeat',
              width: "inherit", 
              height: "100%",
              padding:'4%',
              paddingLeft:'5.9%'
            }}
            className={`  text-white relative `}
          >
            <div className="grid justify-center h-full grid-cols-[1fr_1fr] h-[78%] items-center ">
                <div className=' grid  text-end text-[100%]  left-[9%] h-full pt-[10%] '>
                  <div className="">
                    <h1 className="text-[100%] font-extrabold">{props.name}</h1>
                    <div className=" flex justify-end text-[75%] "><p>{props.experience}</p>,<p>{props.position}</p></div>
                    <p className="text-[60%] pr-4">{props.department}</p>
                  </div>
                  <h3 className="pr-[18%] pt-[3%]  text-[75%]">{props.currentLocation}</h3>
                  <div className="pr-[16%] pt-[4%]  text-[75%]">
                    <h3 className="pl-[17%]">{props.mobileNumber}</h3>
                    <h3 className="pl-[16%]">{props.email}</h3>
                  </div>
                  <div className=" text-[75%]">
                    <h3 className="pl-[12%]">{props.preferredLocationOne}</h3>
                    <h3>{props.preferredLocationTwo}</h3>
                  </div>
                </div>
                <div className="grid justify-items-center items-center h-full">
                  <img
                    style={{borderColor:props.themeColor}}
                    className=" left-[57.5%] top-[23%] mt-12% w-[72%] h-[65%]  rounded-[50%]  border-solid left-[52.7%] "
                    src={props.imageURL}
                    alt="hello image"
                    width={500}
                    height={500}
                  />
               </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default JobVisitingCard;
