import { useEffect, useState } from "react";

import colorBlue from '@public/assets/HireVisitingCard/color-blue.png';
import colorGreen from '@public/assets/HireVisitingCard/color-green.png';
import colorRed from '@public/assets/HireVisitingCard/color-red.png';
import colorYellow from '@public/assets/HireVisitingCard/color-yellow.png';

interface HireVisitingCardProps {
  companyName: string;
  contactPersonName: string;
  natureOfBusiness:string;
  themeColor: 'red' | 'blue' | 'green' | 'yellow';
  mobileNumber: string; 
  email: string; 
  website: string; 
  address: string; 
  imageURL: string; 
  brandName: string; 

}

const HireVisitingCard = ({...props}: HireVisitingCardProps) => {



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
  },[props.themeColor])


  return (
    <div>
        <div>
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
            className={` text-white relative `}
          >
           <div className='grid gap-12 h-full grid-rows-[50%_50%] smobile:text-[75%]'>
            <div className=''>
              <h1 className="text-[120%] font-extrabold">{props.companyName}</h1>
              <h3>{props.contactPersonName}</h3>
              <h3>{'Nature of Business: '+props.natureOfBusiness}</h3>
            </div>
            <div className=''>
              <h3>{props.mobileNumber}</h3>
              <h3>{props.email}</h3>
              <h3>{props.website}</h3>
              <h3>{props.address}</h3>
            </div>
            <div className="">
              <img
                style={{borderColor:props.themeColor}}
                className="absolute w-[23%] h-[40.1%] rounded-[50%]  border-solid left-[52.7%] top-[29%]"
                src={props.imageURL}
                alt="hello image"
                width={500}
                height={500}
              />
              <p className='absolute left-[57.7%] top-[70%]'>{props.brandName}</p>
            </div>
           </div>
          </div>
        </div>
    </div>
  );
};

export default HireVisitingCard;
