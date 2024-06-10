import Image from "next/image";
import {
  bangalore,
  delhi,
  hydrabad,
  kolkata,
  mumbai,
} from "@public/assets/icons";
import { Box } from "@mui/material";

const Cities = () => {
  const cities = [
    { name: "Delhi", src: delhi },
    { name: "Mumbai", src: mumbai },
    { name: "Bengaluru(HQ)", src: bangalore },
    { name: "Kolkata", src: kolkata },
    { name: "Hyderabad", src: hydrabad },
  ];
  return (
    <div className="w-full">
      <Box
        display={{
          xs: "none",
          sm: "block",
        }}
      >
        <p className="text-center text-[14px] m-4 pt-6 text-[#4B5563]">
          Cities we are in
        </p>
        <Box className="flex justify-between mt-[-40px]">
          {cities.map((city, i) => (
            <Box key={i} sx={{ position: "relative", maxWidth: "600px" }}>
              <Image
                src={city.src}
                alt="image"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: {
                    sm: "30px",
                    md: "30px",
                    lg: "50px",
                  },
                  left: "50%",
                  transform: "translateX(-50%)",
                  fontSize: "10px",
                  fontWeight: 500,
                  color: "black",
                }}
              >
                {city.name}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      {/* <Box
        display={{
          xs: "block",
          sm: "none",
        }}
      >
        <div
          style={{
            overflowX: "auto",
            whiteSpace: "nowrap",
            textAlign: "center",
          }}
        >
          {cities.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              alt={`Image ${index}`}
              style={{ display: "inline-block", marginRight: "10px" }}
            />
          ))}
        </div>
      </Box> */}
    </div>
  );
};

export default Cities;
