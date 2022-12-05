import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ParkIcon from "@mui/icons-material/Park";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ForestIcon from "@mui/icons-material/Forest";
import { useEffect, useState } from "react";
import { ListItemButtonStations } from "./common/ListItemButtonStations";
import { connect } from 'react-redux';
import { set_estaciones, set_estacion } from "../actions/estaciones_action";

const ListStations = (props) => {
  const [open, setOpen] = useState(true);
  const [estaciones, setEstaciones] = useState([])

  const handleClickDropDown = () => {
    setOpen(!open);
  };

  useEffect( () => {
    console.log(props);
    props.set_estaciones()    
  }, [])

  useEffect( () => {
    console.log("hola");
    
    setEstaciones(props.datos.estaciones_reducer.estaciones)
  }, [props.datos.estaciones_reducer.estaciones])

  const handleClickButton = ({id_weather_station, name}) => {
    //information(idValue);
    //console.log(information(idValue));
    console.log("estacion")
    console.log(id_weather_station)
    props.set_estacion(id_weather_station, name)
    
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
        {console.log(estaciones)}
        {estaciones.length !== 0 ? estaciones.data.map( (elem) => 
            <List>
            <ListItemButton onClick={() => handleClickButton(elem)} sx={{ pl: 4 }}>
              <ListItemIcon>
                <ParkIcon />
              </ListItemIcon>
              <ListItemText primary={"Estacion " + elem.id_weather_station} />
            </ListItemButton>
          </List>
           
        ) : ""}
        
      </Collapse>
    </List>
  );
};

const mapStateToProps = (state) => {
  
  return {
    "datos": state
    }
  
}

export default connect(mapStateToProps, {set_estaciones, set_estacion})(ListStations)

