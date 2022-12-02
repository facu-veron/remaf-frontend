import { useRef, useState } from "react";
import { stationsData } from "../data/stationsData";

export const useGetInfoStations = () => {
  const [infoStation, setInfoStation] = useState({});

  const information = (id) => {
    const data = stationsData.find((info) => info.id === id);
    setInfoStation(data);

    return data;
  };

  console.log(" infostation ", infoStation);
  return {
    ...infoStation,
    infoStation,
    information,
  };
};
