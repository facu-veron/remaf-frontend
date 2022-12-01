import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ParkIcon from "@mui/icons-material/Park";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useGetInfoStations } from "../../hooks/useGetInfoStations";
import InformationCard from "../InformationCard";
useGetInfoStations;

export const ListItemButtonStations = ({ title, id }) => {
  const { information } = useGetInfoStations();

  const handleClickButton = (idValue) => {
    information(idValue);
    console.log(information(idValue));
    console.log(idValue);
    return <InformationCard />;
  };

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
