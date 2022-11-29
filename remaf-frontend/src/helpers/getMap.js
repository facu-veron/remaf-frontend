/* export const getMap = async () => {
  const url = "http://192.168.224.186:8080/mapstore/embedded.html#83";
  const response = await fetch(url);

  console.log(response);
};
 */

const mapURL = "http://192.168.224.186:8080/mapstore/embedded.html#83";

if (mapURL) {
  return mapURL;
} else {
  return console.log("no trajo nada");
}
