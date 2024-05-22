import Button from "@components/button";
import { DesktopNavbar } from "@components/desktop-navbar";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Box, IconButton } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { Back, Payment, PrimaryLogo } from "@public/assets/icons";
import {
  Ads,
  AdsActive,
  Chat,
  ChatActive,
  Dash,
  DashActive,
  Home,
  HomeActive,
} from "@public/assets/icons/MobileNavbarIcons";
import PreferenceFormExp from "./PreferenceFormExp";
import GstPancard from "./GSTPancard";
import PreferenceFormFresher from "./PreferenceFormFresher";

const Component = (props) => {
  const { loadingPosts, posts = {}, onDelete } = props;
  const { nodes = [] } = posts;

  const desktopNavbarProps = {
    logo: PrimaryLogo,
    primary: true,
    rightNavItems: [
      {
        id: 1,
        type: "link",
        title: "Hire",
        path: "/hire",
      },
      {
        id: 2,
        type: "link",
        title: "Become Supplier",
        path: "/supplier",
      },
      {
        id: 3,
        type: "link",
        title: "Job / Internship",
        path: "/job",
      },
      {
        id: 4,
        type: "link",
        title: "Job / Internship",
        path: "/job",
      },
    ],
    leftNavItems: [
      {
        id: 1,
        type: "dropdown",
        title: "Jobs",
        path: "jobs",
        links: [
          {
            id: 1,
            type: "link",
            title: "Search Jobs",
            path: "/search-jobs",
          },
          {
            id: 2,
            type: "link",
            path: "/manage-jobs",
            title: "Manage Jobs",
          },
        ],
      },
      {
        id: 2,
        type: "link",
        title: "Learning",
        path: "/learning",
      },
    ],
  };

  if (loadingPosts) {
    return (
      <Box>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <div>
      {/* <GstPancard platform="mobile" /> */}
      {/* <PreferenceFormExp platform="web" /> */}
      <PreferenceFormFresher platform="web" />
    </div>
  );
};

export default Component;
