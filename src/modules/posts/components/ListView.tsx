import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CircularProgress from "@mui/material/CircularProgress";
import { TableBar } from "@mui/icons-material";
import TabButton from "@components/tab-button";
import KYCReject from "@components/kyc-reject";
import { log } from "console";
import { awards, educations, experience, languages, references, skills } from "@components/cv/create-cv";
import KYCSucess from "@components/kyc-sucess";
import KYCVerification from "@components/kyc-verification";
import LanguageCard from "@components/language-card";
import LanguageCardList from "@components/languagecard-list";
import LanguageSelection from "@components/language-selection";
import Popup from "@components/popup";
import WelcomePage from "@components/welcome-page";
import RoleSelection from "@components/select-role";
import Button from "@components/button";
import RadioCard from "@components/radio-card";
import {
  EyeIcon,
  Gst,
  OneDayJob,
  PrimaryLogo,
  SecondaryLogo,
} from "@public/assets/icons";
import Topbar from "@components/topbar";
import { back } from "nock";
import UploadDoc from "@components/upload-doc";
import UploadCard from "@components/upload-card";
import RoundButton from "@components/round-button";
import PreferenceFormFresher from "@modules/users/components/PreferenceFormFresher";
import Experience from "@components/cv/Experience";
import Otp from "@modules/users/components/Otp";
import MobileVerification from "@modules/users/components/MobileVerification";
import { face } from "@public/assests";
import CV from "@components/cv";
import Toast from "@components/toast";

const Component = (props: any) => {
  const { loadingPosts, posts = {}, onDelete } = props;
  const { nodes = [] } = posts;

  // const radioCardProps1 = {
  //   label: "Do you want one day job ?",

  //   buttons: [
  //     {
  //       id: "1",
  //       label: "Yes",
  //     },
  //     {
  //       id: "2",
  //       label: "No",
  //     },
  //   ],
  //   icon: OneDayJob,
  // };

  // const webTopbarProps = {
  //   label: "Last Step",
  //   backgroundColor: "white",
  //   color: "#374151",
  //   progress: "30%",
  //   borderRadius: 12,
  //   logo: SecondaryLogo,
  // };

  if (loadingPosts) {
    return (
      <>
      
      {/* <Box> */}
        {/* <CircularProgress /> */}
      {/* </Box> */}
      </>
    );
  }

  const tabButtonpProps = {
    tabArray: [ {label : 'Tab 1'}, {label : 'Tab 2'}, {label : 'Tab 3'}, {label : 'Tab 3'}, {label : 'Tab 3'}, {label : 'Tab 3'} ]
  }

  const contactFun = () => {
    console.log('contact us');
  }

  const cvProps = {
    skills: skills,
    educations: educations,
    languages: languages,
    awards: awards,
    references: references,
    experience: experience,
    name: 'Poonam Singh',
    designation: 'Director',
    image: `${face}`,
    about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum amet possimus minima nesciunt quod facilis adipisci eum ipsa officiis commodi sunt autem odio repudiandae atque tempore illo nisi, dolore incidunt.',
    portfolio: 'www.portfolio.com',
    newsletter: 'www.newsletter.com',
      phone: '+123-456-7890',
      whatsApp: '+123-456-7890',
      email: 'fed1@gmail.com',
      instagram: 'instagram.com',
      facebook: 'facebook.com',
      linkedin: 'linkedin.com',
      address: 'Phaltan, Satara, ABC 234'
  }

 const LanguageData =  [
    {
      id: 1,
      banner: 'A',
      title: 'English'
    },
    {
      id: 2,
      banner: 'अ',
      title: 'हिंदी',
    },
    {
      id: 3,
      banner: 'ಅ',
      title: 'ಕನ್ನಡ',
    },
    {
      id: 4,
      banner: 'অ',
      title: 'বাংলা',
    },
    {
      id: 5,
      banner: 'அ',
      title: 'தமிழ்',
    },
    {
      id: 6,
      banner: 'आ',
      title: 'मराठी',
    },
    {
      id: 7,
      banner: 'O',
      title: 'Odia​',
    },
    {
      id: 8,
      banner: 'అ',
      title: 'టేళూఙూ',
    },
    {
      id: 9,
      banner: 'अ',
      title: 'नेपाली',
    },
    {
      id: 10,
      banner: 'અ',
      title: 'ગુજરતિ',
    },
    {
      id: 11,
      banner: 'അ',
      title: 'മലയലമ്',
    },
  ]

  const popupProps = {
    title : 'Are You Sure ?',
    childTitle : 'You can edit your popup box later You can edit your popup box later.',
    confirm: () => {
      alert('Are you confirm')
    }
  }
  return (
    <>
      {/* <TabButton {...tabButtonpProps}/> */}

    {/* <KYCReject  contact={contactFun}/>  */}

    {/* <CV {...cvProps}/> */}

    {/* <KYCSucess/> */}

    {/* <KYCVerification/> */}

    {/* <LanguageCard {...LanguageData[0]}/> */}

    {/* <LanguageCardList languageData={LanguageData}/> */}

    {/* <LanguageSelection languageData={LanguageData}/> */}

    {/* <Popup {...popupProps}/> */}

    {/* <WelcomePage/> */}

    {/* <RoleSelection /> */}
    {/* <PreferenceFormFresher /> */}

    {/* <Otp /> */}
    {/* <MobileVerification /> */}

    <Toast text = 'Toast msg for error, warning' type='error'/>
    </>
  );
};

export default Component;
