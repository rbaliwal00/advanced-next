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
    { name: "Bengaluru (HQ)", src: bangalore },
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
        <p className="text-center m-4 pt-6 text-[#4B5563]">Cities we are in</p>
        <div className="flex justify-between">
          {cities.map((city, i) => (
            <div key={i}>
              <Image src={city.src} alt="image" />
            </div>
          ))}
        </div>
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
