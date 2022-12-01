import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ForestIcon from "@mui/icons-material/Forest";
import { useState } from "react";
import { ListItemButtonStations } from "./common/ListItemButtonStations";

export const ListStations = () => {
  const [open, setOpen] = useState(true);

  const handleClickDropDown = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleClickDropDown}>
        <ListItemIcon>
          <ForestIcon />
        </ListItemIcon>
        <ListItemText primary="Estaciones" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <ListItemButtonStations title="Estacion 1" id={1} />
        <ListItemButtonStations title="Estacion 2" id={2} />
        <ListItemButtonStations title="Estacion 3" id={3} />
        <ListItemButtonStations title="Estacion 4" id={4} />
        <ListItemButtonStations title="Estacion 5" id={5} />
        <ListItemButtonStations title="Estacion 6" id={6} />
        <ListItemButtonStations title="Estacion 7" id={7} />
        <ListItemButtonStations title="Estacion 8" id={8} />
        <ListItemButtonStations title="Estacion 9" id={9} />
        <ListItemButtonStations title="Estacion 10" id={10} />
      </Collapse>
    </List>
  );
};
