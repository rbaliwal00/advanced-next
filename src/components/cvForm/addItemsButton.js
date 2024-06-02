import React from 'react'
import PropTypes from "prop-types";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Button, Typography } from "@mui/material";



const AddItemsButton = ({handleAddFunction,text}) => {
  return (
    <Button
            type="button"
            variant="contained"
            sx={{
              borderRadius: "8px",
              maxHeight: "48px",
              py: "10px",
              backgroundColor: "#FE8B4C",
              textTransform: "none",
              width: "100%",
              marginBottom: "1rem",
            }}
            onClick={handleAddFunction}
          >
            <AddCircleOutlineIcon />
            <Typography fontSize="16px" fontWeight="600" color="#fff">
              {text}
            </Typography>
          </Button>
  )
}

AddItemsButton.propTypes = {
    handleAddFunction: PropTypes.func.isRequired,
    step: PropTypes.string.isRequired
  };

export default AddItemsButton
