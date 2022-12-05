import axios from "axios"

export const set_estacion = (id, name) => async (dispatch) => {
    try {

        //console.log(id)
        //let datos = ""
        const dato = (await axios.post("http://25.60.214.193:3000/datos/get_datos" ,{
            id_estacion: id
        })).data[0]

        const {punto} = (await axios.post("http://25.60.214.193:3000/datos/get_point", {
            id_estacion: id
        })).data[0]
        //console.log(punto)
        
        //.then( res => {console.log(res)})
        
        //console.log(data)
        dispatch({
            type: "SET_ESTACION"
            ,id: id
            ,name: name
            ,precipiatacion: dato.precipitacion
            ,humedad: dato.humedad
            ,temperatura: dato.temperatura
            ,localidad: dato.localidad
            ,direc_viento: dato.direcc_viento
            ,veloc_viento: dato.veloc_viento 
            ,punto: punto
        })

    } catch (error) {
        dispatch({
            type: "error",
            payload: "Algo malio sal"
        })
    }
}

export const set_estaciones = () => async (dispatch) => {
    try {
        
        const datos = await axios.get("http://25.60.214.193:3000/datos/")
        //console.log(datos);
        dispatch({
            type: "SET_ESTACIONES",
            payload: datos
        })
    } catch (error) {
        dispatch({
            type: "error",
            payload: "Algo malio sal"
        })
    }
}