import axios from "axios";
import Path from "./Path.json";

let getData = () => {
  return axios
    .get(Path.URL)
    .then((req) => axios.get(Path.URL + req.data.countriesRoute.Path));
};

let requests = {
  getData,
};
export default requests;
