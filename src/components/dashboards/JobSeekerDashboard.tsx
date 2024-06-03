import React from "react";
import { JobSeekerDashCards } from "src/constants/dashboard";
import Dashcard from "./Dashcard";
import { Grid, useMediaQuery } from "@mui/material";

const JobSeekerDashboard = () => {
  const mobile = useMediaQuery("(max-width:600px)");

  return (
    <div style={{ marginTop: "20px", padding: "16px" }}>
      {mobile ? (
        <Grid container spacing={2}>
          {JobSeekerDashCards.map((card, index) => (
            <Grid
              item
              key={index}
              xs
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Dashcard {...card} />
            </Grid>
          ))}
        </Grid>
      ) : null}
    </div>
  );
};

export default JobSeekerDashboard;
