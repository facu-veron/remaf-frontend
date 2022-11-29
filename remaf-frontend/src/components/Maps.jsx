import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import Loader from "../static/Loader";

export const Maps = ({ value }) => {
  const [loader, setloader] = useState(true);

  setTimeout(() => {
    setloader(false);
  }, 5000);
  return (
    <Grid item xs={12} md={8} lg={9}>
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",

          height: 500,
        }}
      >
        {loader ? (
          <Loader />
        ) : (
          <iframe
            className="iframe animate__animated animate__fadeIn"
            src={value}
          ></iframe>
        )}
      </Paper>
    </Grid>
  );
};
