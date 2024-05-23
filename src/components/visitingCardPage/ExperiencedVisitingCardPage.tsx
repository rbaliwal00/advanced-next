import { ReactNode, useEffect, useState } from 'react';
// import Button from './Button';
import {  useMediaQuery } from '@mui/material';
// import { DesktopNavbar } from './DesktopNavbar';

// import { Back, Download, Edit, EyeIcon, GST, OrangeShare, Pan, PrimaryLogo, SecondaryLogo } from './assets/icons';
import JobVisitingCard from '../visitingCard/JobVisitingCard';

import Image from 'next/image';


import { Download, Edit, Share } from '@mui/icons-material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import company from './assets/company.png';
// import { SecondaryLogo, Back, PrimaryLogo, EyeIcon, Download, Edit, EyeIcon, GST, OrangeShare, Pan  } from '@public/assets/icons';
import { DesktopNavbar } from '../desktop-navbar';
import RoundButton from '../round-button';
import Topbar from '../topbar';
import { SecondaryLogo, Back, PrimaryLogo, EyeIcon, OrangeShare, Pan, Gst } from '@public/assets/icons';
import Button from '../button';





export interface BottomSheetProps {
  label: string;
  buttonTitle: string;
  buttonFunction?: () => void;
  closeOnBackdropClick: boolean;
  children?: ReactNode
}

const ExperiencedVisitingCardPage = ({children,...props}:BottomSheetProps) => {

  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleClose = () => {
    console.log('handle speed =>',)
    setOpen(false);
  };

  const handleButtonFunction = () => {
    
    return !props.buttonFunction ? handleClose() : props.buttonFunction()
  };

  const handleBackDropClick = () => {
    return !!props.closeOnBackdropClick ? handleClose() : null;
  }

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
    themeColor: "red"
  }

  const jobDatas = [jobData,jobData,jobData];

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

    <div className={`grid ${!isMobile && 'grid-cols-[7fr_7fr]'} gap-4 p-4`}>
      <div className='grid gap-4 grid-rows-[max-content_max-content] pt-16'>
      <div className={`grid ${!isMobile && 'grid-cols-[max-content_max-content]'} gap-4`}>

        <div className={`${isMobile && 'w-full'}`}>
          <div className={`h-[22rem] ${isMobile ? 'w-full':'w-[40rem]'}`}>
            {/* <SupplierVisitingCard {...supplierVisitingData} /> */}
            <JobVisitingCard {...jobData} />
          </div>
         
        </div>
        <div className={` flex gap-4 ${isMobile ? 'justify-center w-[32rem]':'flex-col w-max'} `}>
              <RoundButton
              backgroundColor="white"
          border="1px solid #F3F4F6"
          color="black"
          icon={EyeIcon}
              onClick={() => {}}
            />
              <RoundButton
              backgroundColor="white"
          border="1px solid #F3F4F6"
          color="black"
          icon={OrangeShare}
              onClick={() => {}}
            />
              <RoundButton
              backgroundColor="white"
          border="1px solid #F3F4F6"
          color="black"
          icon={Download}
              onClick={() => {}}
            />
              <RoundButton
              backgroundColor="white"
          border="1px solid #F3F4F6"
          color="black"
          icon={Edit}

              onClick={() => {}}
            />
        </div>
      </div>
      <div className={`${isMobile ? 'w-full':'w-[40rem]'} grid gap-4 justify-items-center`}>
        <div className={`grid ${isMobile ? 'w-[70%]':'w-max' } gap-4`}>
          <div className='flex w-full gap-4 justify-center border items-center p-2 rounded-[9px] border-solid border-[#EFEFEF]'>
            <Image src={Gst} alt='' height={30}/>
            <p>GST</p>
            <p>{'gst document'}</p>
            <RoundButton
              backgroundColor="white"
              border="1px solid #F3F4F6"
              color="black"
              icon={EyeIcon}
              onClick={() => {}}
            />
          </div>
          <div className='flex w-full gap-4 justify-center border items-center p-2 rounded-[9px] border-solid border-[#EFEFEF]'>
            <Image src={Pan} alt='' height={30}/>
            <p>PAN</p>
            <p>{'pan document'}</p>
            <RoundButton
              backgroundColor="white"
              border="1px solid #F3F4F6"
              color="black"
              icon={EyeIcon}
              onClick={() => {}}
            />
          </div>
        </div>
      <Button
            kind="primary"
            onClick={() => {}}
            type="primary"
            text = "Search for Jobs"
          />
      </div>
      </div>
      {!isMobile && <div className='pl-12'>
        <h1 className='text-[2rem] font-bold'>Recommended Job</h1>
        <div className=' w-[30rem] pt-8 grid gap-4'>
          {
            jobDatas.map((data)=> 
              <div className='flex gap-2 mb-4 rounded-md drop-shadow-md justify-between p-4'>
            <div className='flex'>
                <Image src={company} style={{ width: 'auto', height: 'auto' }} alt="image" />
                <div className='px-4 '>
                    <h2 className='text-lg'>Executive Chef</h2>
                    <p className='opacity-50 text-xs'>Indian Bier House</p>
                    <span>
                        <p  className='text-sm'>Bangalore</p>
                    </span>
                    <p className='opacity-50 text-xs'>Full time</p>
                    <p className='opacity-50 text-xs'>₹ 70000-130000/M</p>
                </div>
            </div>
            <div className=''>
                <div  className='opacity-20 text-right'>
                    <Share />
                    <BookmarkBorderIcon />
                </div>
                <div  className='mx-6'>
                    <button className='rounded-md px-4 py-2 text-slate-800 text-lg text-blue-900 text-center'>
                        View
                    </button>
                    <button
                        className='w-full h-[2.7rem] pl-4 rounded-[0.45rem] my-2 bg-[#002351] text-white font-bold opacity-100 p-2 text-md'
                    >Apply
                    </button>
                </div>
            </div>
        </div>
            )

          }
        </div>
      </div>}
    </div>
    
   </div>
  );
};

export default ExperiencedVisitingCardPage;
