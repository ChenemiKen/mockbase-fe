import axios from "axios";
import { z } from 'zod'

const SERVER = process.env.NEXT_PUBLIC_SERVER_URL

const schema = z.object({
    method: z.string({}),
    path: z.string({})
})

export async function createEndpoint(endpoint: Endpoint) {    
    const validatedFields = schema.safeParse({...endpoint})

    return axios.post(`${SERVER}/endpoints`, endpoint).then( res => res.data)
}

export async function fetchEndpoints(){
    return axios.get(`${SERVER}/endpoints`).then(res => res.data)
}