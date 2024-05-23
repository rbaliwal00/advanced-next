import { useMediaQuery } from '@mui/material';
import { useState } from 'react';
import { Back, PrimaryLogo, SecondaryLogo } from '@public/assets/icons';
import Carousel from '../carousel';
import { DesktopNavbar } from '../desktop-navbar';
import Topbar from '../topbar';

const HireThemeSelection = () => {

  const [color, setColor] = useState('red');
  
  const leftNavitems =  [
    {
      id: 1,
      links: [
        {
          id: 1,
          path: '/search-jobs',
          title: 'Search Jobs',
          type: 'link'
        },
        {
          id: 2,
          path: '/manage-jobs',
          title: 'Manage Jobs',
          type: 'link'
        }
      ],
      path: 'jobs',
      title: 'Jobs',
      type: 'dropdown'
    },
    {
      id: 2,
      path: '/learning',
      title: 'Learning',
      type: 'link'
    }
  ];

  const rightNavItems = [
    {
      id: 1,
      path: '/hire',
      title: 'Hire',
      type: 'link'
    },
    {
      id: 2,
      path: '/supplier',
      title: 'Become Supplier',
      type: 'link'
    },
    {
      id: 3,
      path: '/job',
      title: 'Job / Internship',
      type: 'link'
    }
  ]

  const desktopNavbarData = {
    leftNavItems: leftNavitems,
    rightNavItems: rightNavItems,
    logo: SecondaryLogo
  }

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

  const isMobile = useMediaQuery('(max-width:640px)');



  return (
   <div className='h-screen w-screen'>
    {isMobile ?
        <Topbar
      backgroundColor="#113B73"
      button={Back}
      color="white"
      label="Label"
      logo={PrimaryLogo}
      onBack={() => {}}
      platform=""
      progress="30%"
    />:
    <DesktopNavbar {...desktopNavbarData} />}

      <div className='grid justify-items-center'>
        <div className={`w-[70%] ${isMobile && 'invisible'}`}>
            <h3 className='text-2xl font-semibold pl-8 pt-8'>Theme</h3> 
            <div className=' w-full px-8 py-4 left-0 bottom-0'>
              <div className='bg-stroke dark:bg-dark-3 relative h-1.5 w-full rounded-2xl'>
                  <div className='bg-[#FE8B4C] absolute top-0 left-0 h-full rounded-2xl' 
                  style={{width: '30%'}}></div>
              </div>
            </div>
        </div>
        <div>
          <Carousel
          data={supplierDatas}
          color={color}
        />
          <div className="grid gap-4 items-center justify-items-center justify-self-center mt-2 text-center">
            <h2 className='text-base font-semibold'>Choose Color</h2>
            <div className="grid grid-flow-col gap-4 pb-4">
              <div
                className={`bg-yellow cursor-pointer
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
                className={`bg-blue cursor-pointer
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
                className={`bg-green cursor-pointer
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
                className={`bg-red cursor-pointer
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
