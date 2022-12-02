import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import Loader from "../static/Loader";
import "animate.css";

import { connect } from "react-redux";

const FrameMap = ({url, disabled}) => {
  return (
    <iframe
        style={{ display: disabled ? "block" : "none" }}
        className="iframe animate__animated animate__fadeIn"
        src={url}
      ></iframe>
  )
}

const Maps = ( props) => {
  const [disabled, setDisabled] = useState(false);
  const url_base = "http://25.60.214.193:8080/mapstore/#/context/remaf"
  const [url, setUrl] = useState(url_base)
  const [map_component, setMap_component] = useState(<FrameMap url={url} disabled={disabled}  />)
  
  useEffect(() => {
    const estacion = props.state.estaciones_reducer.estacion
    const punto = estacion.punto.slice(6, -1).split(" ")
    console.log("puntoo")
    console.log(punto)
    setUrl(url_base + "?center=" + punto[0] + "," + punto[1] +"&zoom=15")
    //console.log(props.state.estaciones_reducer.estacion)
  }, [props.state.estaciones_reducer.estacion]);

  useEffect( () => {
    // setTimeout(() => {
    //   setDisabled(true);
    // }, 5000);
    
    setMap_component(<div />)
    setDisabled(false)
    setTimeout(() => {
      setMap_component(<FrameMap url={url} disabled={disabled}/>)
      setDisabled(true)
      
    }, 2000);
    

  }, [url])

  useEffect( () => {
    setMap_component(<FrameMap url={url} disabled={disabled}/>)
    setDisabled(true)
  }, [])



  

  return (
    <Grid item xs={12} md={8} lg={9}>
      <Paper
        className="iframe animate__animated animate__fadeIn animate__delay-2s 
      animate__slower	3s animate__repeat-3"
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          height: 500,
        }}
      >
        {!disabled && <Loader />}

        {map_component}
        
      </Paper>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(mapStateToProps)(Maps)
