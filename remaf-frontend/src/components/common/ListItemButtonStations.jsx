import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ParkIcon from "@mui/icons-material/Park";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useEffect } from "react";

export const ListItemButtonStations = ({ title, id }) => {
  let idValue = id;

  const handleClickButton = (idValue) => {
    console.log(idValue);
  };

  useEffect(() => {}, [idValue]);

  return (
    <List>
      <ListItemButton onClick={() => handleClickButton(id)} sx={{ pl: 4 }}>
        <ListItemIcon>
          <ParkIcon />
        </ListItemIcon>
        <ListItemText primary={title} />
      </ListItemButton>
    </List>
  );
};
