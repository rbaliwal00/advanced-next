import { Grid, useMediaQuery } from "@mui/material";
import { HireDashCards } from "src/constants/dashboard";
import Dashcard from "./Dashcard";

const HireDashboard = () => {
  const mobile = useMediaQuery("(max-width:600px)");

  return (
    <div>
      <div style={{ marginTop: "20px", padding: "16px" }}>
        {mobile ? (
          <Grid container spacing={2}>
            {HireDashCards.map((card, index) => (
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
    </div>
  );
};

export default HireDashboard;
