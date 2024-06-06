import React, { useState } from "react";
import { JobSeekerDashCards } from "src/constants/dashboard";
import Dashcard from "./Dashcard";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import JobStaticVisitingCard from "@components/visitingCard/JobstaticVisitingCard";
import { ExperiencedType } from "src/constants/experienced";
import ExperiencedCard from "@components/experiencedCardList/ExperiencedCard";
import { JobNearYou } from "src/constants/jobs-near-you";
import ExperiencedCardList from "@components/experiencedCardList/ExperiencedCardList";

const JobSeekerDashboard = () => {
  const mobile = useMediaQuery("(max-width:600px)");
  const [color, setColor] = useState("red");

  const jobData = {
    currentLocation: "current Locaion",
    department: "Japanese cuisine",
    email: "hello@really.com",
    experience: "2-4 years",
    imageURL:
      "https://as1.ftcdn.net/v2/jpg/02/43/12/34/1000_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
    mobileNumber: "+123-456-7890",
    name: "Yanis petros",
    position: "sous chef",
    preferredLocationOne: "Preferred Location 1",
    preferredLocationTwo: "Preferred Location 2",
    themeColor: color,
    type: "job",
    experienceType: "fresher",
  };

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
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={3}>
            Visiting Card
          </Grid>
          <Grid item xs>
            <Box
              sx={{
                maxWidth: "607px",
                padding: "25px",
                borderRadius: "12px",
                border: "1px solid #F3F4F6",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: "20px",
                    color: "#4B5563",
                    marginBottom: "10px",
                  }}
                >
                  Jobs Near You
                </Typography>
                <ExperiencedCardList experiencedCardList={JobNearYou} />
              </Box>
            </Box>
          </Grid>
          <Grid item xs>
            3
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default JobSeekerDashboard;
