import { Grid, Paper } from "@mui/material";
import { useGetInfoStations } from "../hooks/useGetInfoStations";
import { TextComponent } from "./common/TextComponent";
import { Title } from "./common/Title";
import { useStatem, useEffect } from "react";

import { connect } from "react-redux";
import { useState } from "react";

const InformationCard = (props) => {
  //const { information } = useGetInfoStations();

  //const initialState = information();
 // const [update, setUpdate] = useState(initialState);
  const [estacion, setEstacion] = useState("")

  useEffect( () => {
    console.log(estacion)
    setEstacion(props.estacion.estaciones_reducer.estacion)
  }, [props.estacion.estaciones_reducer.estacion])
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
        {estacion !== "" ? 
          <>
            <Title value="Estacion:"></Title>
            <TextComponent value={estacion.name}/>

            <Title value="Precipitacion:"></Title>
            <TextComponent value={estacion.precipitacion}/>
            
            <Title value="Humedad:"></Title>
            <TextComponent value={estacion.humedad}/>
            
            <Title value="Temperatura:"></Title>
            <TextComponent value={estacion.temperatura}/>
            
            <Title value="Localidad:"></Title>
            <TextComponent value={estacion.localidad}/>
            
            <Title value="Direccion del viento:"></Title>
            <TextComponent value={estacion.direc_viento}/>
            
            <Title value="Velocidad del viento:"></Title>
            <TextComponent value={estacion.veloc_viento}/>
          </>
           : ""   }
        
          
      </Paper>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    estacion: state
  }
}

export default connect(mapStateToProps)(InformationCard);
