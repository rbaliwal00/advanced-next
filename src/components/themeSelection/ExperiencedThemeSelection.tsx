import { useMediaQuery } from '@mui/material';
import { ReactNode, useEffect, useState } from 'react';
// import { DesktopNavbar } from './DesktopNavbar';

// import { Back, PrimaryLogo, SecondaryLogo } from './assets/icons';


import Carousel from '../carousel';
import { SecondaryLogo, Back, PrimaryLogo } from '@public/assets/icons';
import { DesktopNavbar } from '../desktop-navbar';
import Topbar from '../topbar';

const ExperiencedThemeSelection = () => {

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



  const jobData = {
    currentLocation: "current Locaion",
    department: "Japanese cuisine",
    email: "hello@really.com",
    experience: "2-4 years",
    imageURL: "https://as1.ftcdn.net/v2/jpg/02/43/12/34/1000_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
    mobileNumber: "+123-456-7890",
    name: "Yanis petros",
    position: "sous chef",
    preferredLocationOne: "Preferred Location 1",
    preferredLocationTwo: "Preferred Location 2",
    themeColor: color,
    type: 'job'
  }

  const jobDatas = [jobData,jobData,jobData,jobData,jobData,jobData,jobData];

  const isMobile = useMediaQuery('(max-width:640px)');



  return (
   <div >


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
        <div className='grid'>
          <Carousel
          data={jobDatas}
          color={color}
        />
          <div className="grid gap-4 items-center justify-items-center justify-self-center mt-2 text-center">
            <h2 className='text-base font-semibold'>Choose Color</h2>
            <div className="grid grid-flow-col gap-4 pb-4 w-full justify-between">
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

export default ExperiencedThemeSelection;
