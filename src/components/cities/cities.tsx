import Image from "next/image";
import { banglore, delhi, hydrabad, kolkata, mumbai } from "@public/assests";
import { Box } from "@mui/material";

const Cities = () => {
  const cities = [
    { name: "Delhi", src: delhi },
    { name: "Mumbai", src: mumbai },
    { name: "Bengaluru (HQ)", src: banglore },
    { name: "Kolkata", src: kolkata },
    { name: "Hyderabad", src: hydrabad },
  ];
  return (
    <div className="w-full">
      <p className="text-center m-4 pt-6">Cities we are in</p>
      <Box
        display={{
          xs: "none",
          sm: "block",
        }}
      >
        <div className="flex justify-between">
          {cities.map((city, i) => (
            <div key={i}>
              <Image src={city.src} alt="image" />
            </div>
          ))}
        </div>
      </Box>
      <Box
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
      </Box>
    </div>
  );
};

export default Cities;
