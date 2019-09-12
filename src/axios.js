// import the library version of axios
import axios from "axios";
// create a version of axios with useful defaults
export default axios.create({
    // use your own url
    baseURL: "http://rowley.restful.training/api/ping-pong/games/",
    // use your own key
    params: {"key": "329b4a1603504df9b05cba4b9dbfe57c68e1946c"},
    // make sure we get JSON back
    headers: {"Accept": "application/json"},
});