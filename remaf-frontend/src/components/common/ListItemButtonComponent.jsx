import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ParkIcon from "@mui/icons-material/Park";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useEffect, useState } from "react";

export const ListItemButtonComponent = ({ title, id }) => {
  let idValues = id;

  const [idValue, setIdValue] = useState(0);

  const handleClickButton = (idValues) => {
    console.log(idValues);
    setIdValue(idValues);
  };

  useEffect(() => {}, [idValues]);

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
