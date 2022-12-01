import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { DrawerComponent } from "../components/Drawer";
import { AppBarComponent } from "../components/AppBar";
import { useState } from "react";
import { Maps } from "../components/Maps";
import { HumidityGraph } from "../components/graphics/HumidityGraph";
import { TemperatureGraph } from "../components/graphics/TemperatureGraph";
import { PrecipitationGraph } from "../components/graphics/PrecipitationGraph";
import InformationCard from "../components/InformationCard";

const mdTheme = createTheme();

export const Dashboard = () => {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        {/* AppBar */}
        <AppBarComponent toggleDrawer={toggleDrawer} open={open} />
        {/* AppBar */}

        {/* Drawer */}
        <DrawerComponent toggleDrawer={toggleDrawer} open={open} />
        {/* Drawer */}
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Mapa */}

              <Maps value="http://25.60.214.193:8080/mapstore/#/context/remaf_casa?center=-58.36493142796677,-26.14016856640275&zoom=15" />

              {/* Informacion adicional */}
              <InformationCard />
              {/* Informacion adicional */}

              {/* Datos estadisticos */}
              <HumidityGraph />
              <TemperatureGraph />
              <PrecipitationGraph />
              {/* Datos estadisticos */}
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
