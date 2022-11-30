import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ForestIcon from "@mui/icons-material/Forest";
import { useState } from "react";
import { ListItemButtonComponent } from "./common/ListItemButtonComponent";

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
        <ListItemButtonComponent title="Estacion 1" id={1} />
        <ListItemButtonComponent title="Estacion 2" id={2} />
        <ListItemButtonComponent title="Estacion 3" id={3} />
        <ListItemButtonComponent title="Estacion 4" id={4} />
        <ListItemButtonComponent title="Estacion 5" id={5} />
        <ListItemButtonComponent title="Estacion 6" id={6} />
        <ListItemButtonComponent title="Estacion 7" id={7} />
        <ListItemButtonComponent title="Estacion 8" id={8} />
        <ListItemButtonComponent title="Estacion 9" id={9} />
        <ListItemButtonComponent title="Estacion 10" id={10} />
      </Collapse>
    </List>
  );
};
