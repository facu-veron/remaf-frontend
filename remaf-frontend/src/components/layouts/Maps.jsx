import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { border } from "@mui/system";

export const Maps = () => {
  return (
    <div>
      <iframe
        width="500"
        height="500"
        src="http://192.168.224.186:8080/mapstore/#/context/remaf_contexto/59"
      ></iframe>
    </div>
  );
};
