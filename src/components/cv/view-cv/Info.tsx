import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";

const Info = ({ profile_data }) => {
  const mobile = useMediaQuery("(max-width:600px)");

  const bio = profile_data.bio && profile_data.bio[0];

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
              {bio?.skills.join(", ")}
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
              {bio?.language.join(", ")}
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

            {profile_data?.awards?.map((award: any) => (
              <Box>
                <Typography
                  sx={{ fontSize: "8px", color: "#000000", fontWeight: 300 }}
                >
                  {award.name}
                </Typography>
                <Typography
                  sx={{ fontSize: "8px", color: "#000000", fontWeight: 300 }}
                >
                  {award.brand_name}
                </Typography>
                <Typography
                  sx={{ fontSize: "8px", color: "#000000", fontWeight: 300 }}
                >
                  {award.department}
                </Typography>
                <Typography
                  sx={{ fontSize: "8px", color: "#000000", fontWeight: 300 }}
                >
                  {award.position}
                </Typography>
              </Box>
            ))}
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
            {profile_data?.references?.map((refer: any, index: any) => (
              <Box>
                <Typography
                  sx={{ fontSize: "8px", color: "#000000", fontWeight: 300 }}
                >
                  {refer.name}
                </Typography>
                <Typography
                  sx={{ fontSize: "8px", color: "#000000", fontWeight: 300 }}
                >
                 {refer.phone_number}
                </Typography>
                <Typography
                  sx={{ fontSize: "8px", color: "#000000", fontWeight: 300 }}
                >
                  {refer.brand_name}
                </Typography>
                <Typography
                  sx={{ fontSize: "8px", color: "#000000", fontWeight: 300 }}
                >
                  {refer.email}
                </Typography>
                <Typography
                  sx={{ fontSize: "8px", color: "#000000", fontWeight: 300 }}
                >
                  {refer.department}
                </Typography>
                <Typography
                  sx={{ fontSize: "8px", color: "#000000", fontWeight: 300 }}
                >
                  {refer.position}
                </Typography>
              </Box>
            ))}
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
                {
                  profile_data?.references?.map((refer: any, index: any) => (
                    <Box>
                    <Typography
                      sx={{ fontSize: "8px", color: "#000000", fontWeight: 300 }}
                    >
                      {refer.name}
                    </Typography>
                    <Typography
                      sx={{ fontSize: "8px", color: "#000000", fontWeight: 300 }}
                    >
                     {refer.phone_number}
                    </Typography>
                    <Typography
                      sx={{ fontSize: "8px", color: "#000000", fontWeight: 300 }}
                    >
                      {refer.brand_name}
                    </Typography>
                    <Typography
                      sx={{ fontSize: "8px", color: "#000000", fontWeight: 300 }}
                    >
                      {refer.email}
                    </Typography>
                    <Typography
                      sx={{ fontSize: "8px", color: "#000000", fontWeight: 300 }}
                    >
                      {refer.department}
                    </Typography>
                    <Typography
                      sx={{ fontSize: "8px", color: "#000000", fontWeight: 300 }}
                    >
                      {refer.position}
                    </Typography>
                  </Box>))}
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
                {
                  bio?.skills.map((skill: any) => (
                    <Typography
                      sx={{ fontSize: "8px", color: "#000000", fontWeight: 300 }}
                    >
                      {skill}
                    </Typography>
                  ))
                }
                
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
                {profile_data?.awards?.map((award: any) => (
              <Box>
                <Typography
                  sx={{ fontSize: "8px", color: "#000000", fontWeight: 300 }}
                >
                  {award.name}
                </Typography>
                <Typography
                  sx={{ fontSize: "8px", color: "#000000", fontWeight: 300 }}
                >
                  {award.brand_name}
                </Typography>
                <Typography
                  sx={{ fontSize: "8px", color: "#000000", fontWeight: 300 }}
                >
                  {award.department}
                </Typography>
                <Typography
                  sx={{ fontSize: "8px", color: "#000000", fontWeight: 300 }}
                >
                  {award.position}
                </Typography>
              </Box>
            ))}
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
                {
                  bio?.language?.map((language: any) => (
                    <Typography
                      sx={{ fontSize: "8px", color: "#000000", fontWeight: 300 }}
                    >
                      {language}
                    </Typography>
                  ))
                }
              </Box>
            </Grid>
          </Grid>
        </Box>
      )}
    </Box>
  );
};

export default Info;
