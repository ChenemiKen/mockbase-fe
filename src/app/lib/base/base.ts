import axios from "axios";
import { z } from 'zod'

const SERVER = process.env.NEXT_PUBLIC_SERVER_URL

const schema = z.object({
    method: z.string({}),
    path: z.string({})
})

export async function createEndpoint(formData: FormData) {
    console.log(formData)
    
    const endpoint: Endpoint = {
        method: formData.get('method')!.toString(),
        path: formData.get('path')!.toString(),
        responseBody: formData.get('responseBody')!.toString(),
    }

    const validatedFields = schema.safeParse({...endpoint})

    return axios.post(`${SERVER}/endpoints`, endpoint).then( res => res.data)
}

export async function fetchEndpoints(){
    return axios.get(`${SERVER}/endpoints`).then(res => res.data)
}