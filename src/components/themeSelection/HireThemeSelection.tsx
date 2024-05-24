import { useMediaQuery } from '@mui/material';
import { useState } from 'react';
import Carousel from '../carousel';

const HireThemeSelection = () => {

  const [color, setColor] = useState('red');

  const supplierData = {
    address:"Anywhere St., Any City, ST 12345",
    brandName:"Brand Name",
    companyName:"Company Name",
    contactPersonName:"Contact Person Name",
    email:"ceo@email.com",
    imageURL:"https://d27jswm5an3efw.cloudfront.net/app/uploads/2019/08/image-url-3.jpg",
    mobileNumber:"+91 9900653064",
    natureOfBusiness:"Nature of Business",
    themeColor:color,
    website:"www.horecah.com",
    type: 'hire'
  }

  const supplierDatas = [supplierData,supplierData,supplierData,supplierData,supplierData,supplierData,supplierData];

  return (
   <div >
      <div className='grid justify-items-center'>
        <div className='grid'>
          <Carousel
          data={supplierDatas}
          color={color}
        />
          <div className="grid gap-4 items-center justify-items-center justify-self-center mt-2 text-center">
            <h2 className='text-base font-semibold'>Choose Color</h2>
            <div className="grid grid-flow-col gap-4 pb-4 w-full justify-between">
              <div
                className={`bg-[yellow] cursor-pointer
                              shadow-[0px_4px_4px_0px_#00000040] w-[20px] h-[20px] rounded-[50%]
                              ${
                                color === "yellow"
                                  ? "border-2 border-solid border-[#484848]"
                                  : ""
                              }  `}
                onClick={() => setColor('yellow')}
              >
                {" "}
              </div>
              <div
                className={`bg-[blue] cursor-pointer
                              shadow-[0px_4px_4px_0px_#00000040] w-[20px] h-[20px] rounded-[50%]
                              ${
                                color === "blue"
                                  ? "border-2 border-solid border-[#484848]"
                                  : ""
                              }  `}
                onClick={() => setColor('blue')}
              >
                {" "}
              </div>
              <div
                className={`bg-[green] cursor-pointer
                              shadow-[0px_4px_4px_0px_#00000040] w-[20px] h-[20px] rounded-[50%]
                              ${
                                color === "green"
                                  ? "border-2 border-solid border-[#484848]"
                                  : ""
                              } `}
                onClick={() => setColor('green')}
              >
                {" "}
              </div>
              <div
                className={`bg-[red] cursor-pointer
                              shadow-[0px_4px_4px_0px_#00000040] w-[20px] h-[20px] rounded-[50%]
                              ${
                                color === "red"
                                  ? "border-2 border-solid border-[#484848]"
                                  : ""
                              }  `}
                onClick={() => setColor('red')}
              >
                {" "}
              </div>
            </div>
        <button className="text-white bg-[#002351] rounded-[0.4rem]  w-max px-28 py-4">
          <p className="text-xl font-bold " onClick={()=>{}}>
            Next
          </p>
        </button>
      </div>
        </div>
      </div>
    
   </div>
  );
};

export default HireThemeSelection;
