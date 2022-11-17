import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

export const Maps = ({ value }) => {
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
        <iframe className="iframe" src={value}></iframe>
      </Paper>
    </Grid>
  );
};
