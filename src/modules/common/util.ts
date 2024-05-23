import { useMediaQuery } from "@mui/material";

export const platform = () => {
  const isDeviceMobile = useMediaQuery("600px");
  return isDeviceMobile;
};
