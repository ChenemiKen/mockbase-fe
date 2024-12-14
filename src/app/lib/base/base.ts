import axios from "axios";

export function fetchEndpoints(){
    axios.get("http://localhost:5010/api/v1/endpoints")
    .then(res => console.log(res.data))
}