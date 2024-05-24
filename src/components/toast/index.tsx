import { IconButton, SnackbarContent } from "@mui/material";
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
  type?: "success" | "error" | "warning" | "default";
};

const Toast = ({ text, type = "default" }: ToastProps) => {
  const [open, setOpen] = React.useState(false);
  console.log("show", text);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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

  return (
    <div>
      <Button onClick={handleClick}>Grow Transition</Button>
      <Snackbar
        open={open}
        onClose={handleClose}
        TransitionComponent={GrowTransition}
        autoHideDuration={1800}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        action={
          <IconButton
            size="small"
            aria-label="close"
            onClick={handleClose}
            style={{ color: "black" }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      >
        <SnackbarContent
          style={{
            backgroundColor: "white",
            color: getTextColor(),
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
          }}
          message={`${text}`}
        />
      </Snackbar>
    </div>
  );
};

export default Toast;
