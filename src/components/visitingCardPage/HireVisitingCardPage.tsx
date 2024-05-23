import HireVisitingCard from '@components/visitingCard/HireVisitingCard';
import JobVisitingCard from '@components/visitingCard/JobVisitingCard';
import { useMediaQuery } from '@mui/material';
import { Back, EyeIcon, Gst, OrangeShare, Pan, PrimaryLogo, SecondaryLogo, Download, Edit } from '@public/assets/icons';
import Image from 'next/image';
import Button from '../button';
import { DesktopNavbar } from '../desktop-navbar';
import RoundButton from '../round-button';
import Topbar from '../topbar';

const HireVisitingCardPage = () => {

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
          <div className={`h-[22rem] ${isMobile ? 'w-[90vw]':'w-[40rem]'}`}>
          <HireVisitingCard
            address="Anywhere St., Any City, ST 12345"
            brandName="Brand Name"
            companyName="Company Name"
            contactPersonName="Contact Person Name"
            email="ceo@email.com"
            imageURL="https://d27jswm5an3efw.cloudfront.net/app/uploads/2019/08/image-url-3.jpg"
            mobileNumber="+91 9900653064"
            natureOfBusiness="Nature of Business"
            themeColor="blue"
            website="www.horecah.com"
          />
          </div>
         
        </div>
        <div className={` flex gap-4 ${isMobile ? 'justify-center':'flex-col w-max'} `}>
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
              <RoundButton
              backgroundColor="white"
          border="1px solid #F3F4F6"
          color="black"
          icon={OrangeShare}
              onClick={() => {}}
            />
        </div>
      </div>
      <div className={`${isMobile ? 'w-[90vw]':'w-[40rem]'} grid gap-4 justify-items-center`}>
        <div className={`grid text-[#C1C1C1] ${isMobile ? '':'w-max' } gap-4`}>
          <div className='flex w-full gap-4 justify-center border items-center p-2 rounded-[9px] border-solid border-[#EFEFEF]'>
            <div className='flex pr-4 items-center'>
              <Image src={Gst} alt='' height={30}/>
              <p>GST</p>
            </div>
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
      {!isMobile && <div className=''>
        <h1 className='text-[2rem] font-bold'>Recommended</h1>
        <div className=' w-[20rem] pt-8 grid gap-4'>
          {
            jobDatas.map((data)=> <JobVisitingCard {...data} />)
          }
        </div>
      </div>}
    </div>
    
   </div>
  );
};

export default HireVisitingCardPage;
