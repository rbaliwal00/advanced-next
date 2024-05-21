import Button from "@components/button";
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

const Component = (props) => {
  const { loadingPosts, posts = {}, onDelete } = props;
  const { nodes = [] } = posts;

  if (loadingPosts) {
    return (
      <Box>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <div style={{ padding: "24px" }}>
      <TableContainer component={Paper}>
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
      </TableContainer>
      <Button text="LAVELLLL" />
    </div>
  );
};

export default Component;
