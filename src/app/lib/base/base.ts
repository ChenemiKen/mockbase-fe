import axios from "axios";

export async function fetchEndpoints(){
    return axios.get("http://localhost:5010/api/v1/endpoints")
    .then(res => res.data)
}