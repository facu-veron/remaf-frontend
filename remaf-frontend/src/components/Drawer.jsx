import styled from "@emotion/styled";
import { Divider, List, Toolbar } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";

import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListStations  from "./ListStation";
import { ListCapas } from "./Listcapas";

const drawerWidth = 240;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

export const DrawerComponent = ({ toggleDrawer, open }) => {
  return (
    <Drawer variant="permanent" open={open}>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [1],
        }}
      >
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider
        sx={{
          opacity: 0.2,
        }}
      />
      {/* List items */}
      <List component="nav">
        <ListStations />
        <Divider sx={{ my: 1, opacity: 0.2 }} />
        <ListCapas />
        <Divider sx={{ my: 1, opacity: 0.2 }} />
      </List>
    </Drawer>
  );
};
