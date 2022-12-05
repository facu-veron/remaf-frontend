import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import Loader from "../static/Loader";
import "animate.css";
export const Maps = ({ value }) => {
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDisabled(true);
    }, 8000);
  }, []);

  return (
    <Grid item xs={12} md={8} lg={9}>
      <Paper
        className="iframe animate__animated animate__fadeIn animate__delay-2s 
      animate__slower	3s animate__repeat-3"
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          height: 500,
        }}
      >
        {!disabled && <Loader />}

        <iframe
          style={{ display: disabled ? "block" : "none" }}
          className="iframe animate__animated animate__fadeIn"
          src={value}
        ></iframe>
      </Paper>
    </Grid>
  );
};
