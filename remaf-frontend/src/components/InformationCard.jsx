import { Grid, Paper } from "@mui/material";
import { useGetInfoStations } from "../hooks/useGetInfoStations";
import { TextComponent } from "./common/TextComponent";
import { Title } from "./common/Title";

const InformationCard = () => {
  const { information } = useGetInfoStations();

  const initialState = information();
  const [update, setUpdate] = useState(initialState);
  return (
    <Grid item xs={12} md={4} lg={3}>
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          width: 240,
          height: "auto",
        }}
      >
        <Title value="Estaciones:"></Title>
        <TextComponent value="Estacion 1" />
      </Paper>
    </Grid>
  );
};

export default InformationCard;
