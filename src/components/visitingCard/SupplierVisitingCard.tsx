import { useEffect, useState } from "react";

import colorBlue from '@public/assets/SupplierVisitingCard/color-blue.png';
import colorGreen from '@public/assets/SupplierVisitingCard/color-green.png';
import colorRed from '@public/assets/SupplierVisitingCard/color-red.png';
import colorYellow from '@public/assets/SupplierVisitingCard/color-yellow.png';

interface SupplierVisitingCardProps {
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

const SupplierVisitingCard = ({...props}: SupplierVisitingCardProps) => {

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
            className={`  text-white relative h-full `}
          >
            <div className="grid grid-cols-[1fr_1fr] h-full">
               <div className="grid justify-items-center items-center">
                <img
                  style={{borderColor:props.themeColor}}
                  className=" h-[80%] w-[68%]  rounded-[50%]  border-solid left-[52.7%] top-[29%]"
                  src={props.imageURL}
                  alt="hello image"
                  width={500}
                  height={500}
                />
                <div>
                  <p className=' left-[57.7%] top-[70%]'>{props.brandName}</p>
                  <p className=' left-[57.7%] top-[70%]'>{props.natureOfBusiness}</p>
                </div>
               </div>
                <div className=' grid  '>
                  <div>
                    <h1 className="text-[1.3rem] font-extrabold">{props.companyName}</h1>
                    <p>{props.natureOfBusiness}</p>
                  </div>
                  <h3 className="pl-[14%]">{props.contactPersonName}</h3>
                  <h3 className="pl-[17%]">{props.mobileNumber}</h3>
                  <h3 className="pl-[16%]">{props.email}</h3>
                  <h3 className="pl-[12%]">{props.website}</h3>
                  <h3>{props.address}</h3>
                </div>
            </div>
          </div>
        </div>
  );
};

export default SupplierVisitingCard;
