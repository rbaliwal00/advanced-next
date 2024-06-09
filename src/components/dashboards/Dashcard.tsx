import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { transform } from "lodash";
import { useRouter } from "next/router";
import Toast from "@components/toast";

const Dashcard = ({
  lastUpdated,
  link,
  dashcardWidth,
  height,
  banner,
  progress,
  title,
  stat1,
  stat2,
  amount,
  platform,
}: any) => {
  const router = useRouter();

  const formatDate = (date: Date): string => {
    if (date) {
      let formatDate = new Date(date);
      const day = formatDate.getUTCDate();
      const month = formatDate.toLocaleString("default", { month: "short" });
      const year = formatDate.getFullYear();

      return day + "/" + month + "/" + year;
    }
    return "";
  };

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleClickedLink = (link) => {
    if (link === "/users/cv") {
      router.push(link);
    } else if (link === "/users/get-one"){
      router.push(link)
    } else {
      handleClick();
    }
  };

  return (
    <Box
      sx={{
        width: "154px",
        height: "104px",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
        borderRadius: "10px",
        border: "1px solid rgba(239, 239, 239, 1)",
        padding: "10px 20px 10px 10px",
        position: "relative",
        cursor: "pointer",
      }}
      onClick={() => handleClickedLink(link)}
    >
      <Toast
        type="success"
        text="Coming Soon"
        open={open}
        handleClose={handleClose}
      />
      <Box sx={{}}>
        {lastUpdated && (
          <Box>
            <Typography sx={{ fontSize: "10px", color: "#C1C1C1" }}>
              Last Updated
            </Typography>
            <Typography sx={{ fontSize: "10px", color: "#C1C1C1" }}>
              {formatDate(lastUpdated)}
            </Typography>
          </Box>
        )}
        {amount && (
          <Typography sx={{ fontSize: "20px", color: "#FE8B4C" }}>
            {amount}
          </Typography>
        )}
        <Box sx={{ position: "absolute", top: "-20px", right: "-12px" }}>
          <Image src={banner} alt="" height={"72px"} width={"72px"} />
        </Box>
        {stat1 && stat2 ? (
          <div style={{ marginTop: "-10px", padding: 0 }}>
            <div style={{ color: "#EFEFEF" }}>
              <span style={{ color: "#EFEFEF", fontSize: "30px" }}>
                {stat1?.count}
              </span>
              <span style={{ fontSize: "10px", color: "#EFEFEF" }}>
                {"  "}
                {stat1?.title}
              </span>
            </div>
            <div style={{ marginTop: "-15px" }}>
              <span style={{ color: "#EFEFEF", fontSize: "30px" }}>
                {stat2?.count}
              </span>
              <span style={{ fontSize: "10px", color: "#EFEFEF" }}>
                {"  "}
                {stat2?.title}
              </span>
            </div>
          </div>
        ) : (
          <div>
            <span style={{ color: "#EFEFEF", fontSize: "40px" }}>
              {stat1?.count}
            </span>
            <span style={{ fontSize: "10px", color: "#EFEFEF" }}>
              {"  "}
              {stat1?.title}
            </span>
          </div>
        )}
        <Box sx={{ position: "absolute", bottom: "5px" }}>
          {progress && (
            <Box>
              <Typography sx={{ fontSize: "10px", color: "#FE8B4C" }}>
                {progress}%
              </Typography>
              <Box sx={{ background: "#efefef" }}>
                <Box
                  style={{
                    width: `${progress}%`,
                    backgroundColor: "#fe8b4c",
                    height: "3px",
                  }}
                ></Box>
              </Box>
            </Box>
          )}
          <Typography
            sx={{ color: "#484848", fontSize: "18px", fontWeight: 600 }}
          >
            {title}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashcard;
