import { Alert, Box, IconButton, SnackbarContent } from "@mui/material";
import Button from "@mui/material/Button";
import Grow, { GrowProps } from "@mui/material/Grow";
import Snackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";
import * as React from "react";

function GrowTransition(props: GrowProps) {
  return <Grow {...props} />;
}

type ToastProps = {
  text: string;
  open?: boolean;
  handleClose?: any;
  type?: "success" | "error" | "warning" | "default";
};

const Toast = ({ text, type = "default", open, handleClose }: ToastProps) => {
  // const [open, setOpen] = React.useState(false);
  // console.log("show", text);

  // const handleClick = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  const getTextColor = () => {
    switch (type) {
      case "success":
        return "green";
      case "error":
        return "red";
      case "warning":
        return "orange";
      default:
        return "black";
    }
  };

  const vertical = "top";
  const horizontal = "center";

  return (
    <Box>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert
          onClose={handleClose}
          variant="filled"
          sx={{
            width: "280px",
            background: "white",
            border: "1px solid #22AD5C",
            color: "#22AD5C",
            borderRadius: "12px",
          }}
        >
          {text}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Toast;
