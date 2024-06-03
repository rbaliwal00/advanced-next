import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";

const Info = () => {
  const mobile = useMediaQuery("(max-width:600px)");

  return (
    <Box>
      {mobile ? (
        <>
          <Box>
            <Typography
              sx={{
                fontSize: "13.33px",
                fontWeight: 400,
                color: "#374151",
              }}
            >
              Skills
            </Typography>
            <Typography
              sx={{ fontSize: "8px", color: "#000000", fontWeight: 300 }}
            >
              Skill1, SKill2, skill3, skill4
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: "13.33px",
                fontWeight: 400,
                color: "#374151",
                marginTop: "10px",
              }}
            >
              Language
            </Typography>
            <Typography
              sx={{ fontSize: "8px", color: "#000000", fontWeight: 300 }}
            >
              Language1, Language2, Language3, Language4, Language5, Language6
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: "13.33px",
                fontWeight: 400,
                color: "#374151",
                marginTop: "10px",
              }}
            >
              Awards
            </Typography>
            <Typography
              sx={{ fontSize: "8px", color: "#000000", fontWeight: 300 }}
            >
              Award name
            </Typography>
            <Typography
              sx={{ fontSize: "8px", color: "#000000", fontWeight: 300 }}
            >
              Brand name
            </Typography>
            <Typography
              sx={{ fontSize: "8px", color: "#000000", fontWeight: 300 }}
            >
              Department
            </Typography>
            <Typography
              sx={{ fontSize: "8px", color: "#000000", fontWeight: 300 }}
            >
              Position
            </Typography>

            <Typography
              sx={{
                fontSize: "8px",
                color: "#000000",
                fontWeight: 300,
                marginTop: "10px",
              }}
            >
              Award name
            </Typography>
            <Typography
              sx={{ fontSize: "8px", color: "#000000", fontWeight: 300 }}
            >
              Brand name
            </Typography>
            <Typography
              sx={{ fontSize: "8px", color: "#000000", fontWeight: 300 }}
            >
              Department
            </Typography>
            <Typography
              sx={{ fontSize: "8px", color: "#000000", fontWeight: 300 }}
            >
              Position
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: "13.33px",
                fontWeight: 400,
                color: "#374151",
                marginTop: "10px",
              }}
            >
              Reference
            </Typography>
            <Typography
              sx={{ fontSize: "8px", color: "#000000", fontWeight: 300 }}
            >
              Reference name
            </Typography>
            <Typography
              sx={{ fontSize: "8px", color: "#000000", fontWeight: 300 }}
            >
              Reference contact number
            </Typography>
            <Typography
              sx={{ fontSize: "8px", color: "#000000", fontWeight: 300 }}
            >
              Brand name
            </Typography>
            <Typography
              sx={{ fontSize: "8px", color: "#000000", fontWeight: 300 }}
            >
              Add email
            </Typography>
            <Typography
              sx={{ fontSize: "8px", color: "#000000", fontWeight: 300 }}
            >
              Department
            </Typography>
            <Typography
              sx={{ fontSize: "8px", color: "#000000", fontWeight: 300 }}
            >
              Position
            </Typography>
          </Box>
        </>
      ) : (
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={5} sm={6}>
              <Box>
                <Typography
                  sx={{
                    fontSize: "13.33px",
                    fontWeight: 400,
                    color: "#374151",
                    marginTop: "10px",
                  }}
                >
                  Reference
                </Typography>
                <Typography
                  sx={{ fontSize: "8px", color: "#000000", fontWeight: 300 }}
                >
                  Reference name
                </Typography>
                <Typography
                  sx={{ fontSize: "8px", color: "#000000", fontWeight: 300 }}
                >
                  Reference contact number
                </Typography>
                <Typography
                  sx={{ fontSize: "8px", color: "#000000", fontWeight: 300 }}
                >
                  Brand name
                </Typography>
                <Typography
                  sx={{ fontSize: "8px", color: "#000000", fontWeight: 300 }}
                >
                  Add email
                </Typography>
                <Typography
                  sx={{ fontSize: "8px", color: "#000000", fontWeight: 300 }}
                >
                  Department
                </Typography>
                <Typography
                  sx={{ fontSize: "8px", color: "#000000", fontWeight: 300 }}
                >
                  Position
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: "13.33px",
                    fontWeight: 400,
                    color: "#374151",
                    marginTop: "16px",
                  }}
                >
                  Skills
                </Typography>
                <Typography
                  sx={{ fontSize: "8px", color: "#000000", fontWeight: 300 }}
                >
                  Skill1
                </Typography>
                <Typography
                  sx={{ fontSize: "8px", color: "#000000", fontWeight: 300 }}
                >
                  SKill2
                </Typography>
                <Typography
                  sx={{ fontSize: "8px", color: "#000000", fontWeight: 300 }}
                >
                  Skill3
                </Typography>
                <Typography
                  sx={{ fontSize: "8px", color: "#000000", fontWeight: 300 }}
                >
                  Skill4
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={7} sm={6}>
              <Box>
                <Typography
                  sx={{
                    fontSize: "13.33px",
                    fontWeight: 400,
                    color: "#374151",
                    marginTop: "10px",
                  }}
                >
                  Awards
                </Typography>
                <Typography
                  sx={{ fontSize: "8px", color: "#000000", fontWeight: 300 }}
                >
                  Award name
                </Typography>
                <Typography
                  sx={{ fontSize: "8px", color: "#000000", fontWeight: 300 }}
                >
                  Brand name
                </Typography>
                <Typography
                  sx={{ fontSize: "8px", color: "#000000", fontWeight: 300 }}
                >
                  Department
                </Typography>
                <Typography
                  sx={{ fontSize: "8px", color: "#000000", fontWeight: 300 }}
                >
                  Position
                </Typography>

                <Typography
                  sx={{
                    fontSize: "8px",
                    color: "#000000",
                    fontWeight: 300,
                    marginTop: "10px",
                  }}
                >
                  Award name
                </Typography>
                <Typography
                  sx={{ fontSize: "8px", color: "#000000", fontWeight: 300 }}
                >
                  Brand name
                </Typography>
                <Typography
                  sx={{ fontSize: "8px", color: "#000000", fontWeight: 300 }}
                >
                  Department
                </Typography>
                <Typography
                  sx={{ fontSize: "8px", color: "#000000", fontWeight: 300 }}
                >
                  Position
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: "13.33px",
                    fontWeight: 400,
                    color: "#374151",
                    marginTop: "10px",
                  }}
                >
                  Language
                </Typography>
                <Typography
                  sx={{ fontSize: "8px", color: "#000000", fontWeight: 300 }}
                >
                  <Typography
                    sx={{ fontSize: "8px", color: "#000000", fontWeight: 300 }}
                  >
                    Language1
                  </Typography>
                  <Typography
                    sx={{ fontSize: "8px", color: "#000000", fontWeight: 300 }}
                  >
                    Language2
                  </Typography>
                  <Typography
                    sx={{ fontSize: "8px", color: "#000000", fontWeight: 300 }}
                  >
                    Language3
                  </Typography>
                  <Typography
                    sx={{ fontSize: "8px", color: "#000000", fontWeight: 300 }}
                  >
                    Language4
                  </Typography>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      )}
    </Box>
  );
};

export default Info;
