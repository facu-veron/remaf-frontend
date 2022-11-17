import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ForestIcon from "@mui/icons-material/Forest";
import LayersIcon from "@mui/icons-material/Layers";
import ParkIcon from "@mui/icons-material/Park";
import { useState } from "react";

export const ListEstaciones = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <ForestIcon />
        </ListItemIcon>
        <ListItemText primary="Estaciones" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <ParkIcon />
            </ListItemIcon>
            <ListItemText primary="Estacion 1" />
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <ParkIcon />
            </ListItemIcon>
            <ListItemText primary="Estacion 2" />
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <ParkIcon />
            </ListItemIcon>
            <ListItemText primary="Estacion 3" />
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <ParkIcon />
            </ListItemIcon>
            <ListItemText primary="Estacion 4" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
};
