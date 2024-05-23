import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import { Box, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CircularProgress from "@mui/material/CircularProgress";
import { TableBar } from "@mui/icons-material";
import TabButton from "@components/tab-button";
import KYCReject from "@components/kyc-reject";
import { log } from "console";
import { awards, educations, experience, languages, references, skills } from "@components/cv/create-cv";
import CV from "@components/cv";
import KYCSucess from "@components/kyc-sucess";
import KYCVerification from "@components/kyc-verification";
import LanguageCard from "@components/language-card";
import LanguageCardList from "@components/languagecard-list";
import LanguageSelection from "@components/language-selection";
import Popup from "@components/popup";
import WelcomePage from "@components/welcome-page";
import RoleSelection from "@components/select-role";

const Component = (props: any) => {
  const { loadingPosts, posts = {}, onDelete } = props;
  const { nodes = [] } = posts;

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
    // image: `https://img.freepik.com/free-photo/portrait-young-beautiful-woman-with-smoky-eyes-makeup-pretty-young-adult-girl-posing-studio-closeup-attractive-female-face_186202-4439.jpg`,
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

    {/* <KYCReject  contact={contactFun}/> */}

    {/* <CV {...cvProps}/> */}

    {/* <KYCSucess/> */}

    {/* <KYCVerification/> */}

    {/* <LanguageCard {...LanguageData[0]}/> */}

    {/* <LanguageCardList languageData={LanguageData}/> */}

    {/* <LanguageSelection languageData={LanguageData}/> */}

    {/* <Popup {...popupProps}/> */}

    <WelcomePage/>

    {/* <RoleSelection /> */}


      {/* <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Banner</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Sub title</TableCell>
              <TableCell>Category</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {nodes.map((node) => (
              <TableRow
                key={node.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="node">
                  {node.id}
                </TableCell>

                <TableCell component="th" scope="node">
                  {node.banner}
                </TableCell>

                <TableCell component="th" scope="node">
                  {node.title}
                </TableCell>

                <TableCell component="th" scope="node">
                  {node.sub_title}
                </TableCell>

                <TableCell component="th" scope="node">
                  {node.category}
                </TableCell>

                <TableCell align="right">
                  <IconButton
                    aria-label="edit"
                    color={"primary"}
                    href={`/posts/update/${node.id}`}
                  >
                    <EditIcon />
                  </IconButton>

                  <IconButton
                    aria-label="delete"
                    color={"error"}
                    onClick={() => onDelete(node.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> */}
      </>
  );
};

export default Component;
