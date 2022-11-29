import { useEffect, useState } from "react";
import { getMap } from "../helpers/getMap";

/* export const useFetchMap = () => {
  const [map, setMap] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const isLoadingMap = async () => {
    const newMap = await getMap();
    try {
      setMap(newMap);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(true);
      console.log("error desde catch");
    }
  };

  console.log(isLoadingMap());

  useEffect(() => {
    isLoadingMap();
  }, []);
  console.log(isLoading);
  return {
    map,
    isLoading,
  };
};
 */

getMap();
