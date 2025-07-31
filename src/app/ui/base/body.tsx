import { createEndpoint } from "@/app/lib/base/base";
import { Dispatch, SetStateAction } from "react";

type Props = {
  setEndpoints: Dispatch<SetStateAction<Endpoint[]>>
};

export default function Body({setEndpoints}: Props){

    function submit(formData: FormData){
        createEndpoint(formData).then(res => {
            setEndpoints((endpoints) => [...endpoints, res])
        })
    }

    return(
        <div className="container-fluid">
            <form action={submit} data-bs-theme="dark">
                <div className="input-group mb-5">
                    <div className="col-2">
                        <select name="method" className="form-select">
                            <option value="GET">GET</option>
                            <option value="POST">POST</option>
                            <option value="PUT">PUT</option>
                            <option value="PATCH">PATCH</option>
                            <option value="UPDATE">UPDATE</option>
                            <option value="DELETE">DELETE</option>
                        </select>
                    </div>
                    <span className="input-group-text ms-1" id="basic-addon3">{process.env.NEXT_PUBLIC_BASE_URL}</span>
                    <input name="path" type="text" className="form-control col-auto" defaultValue={'/'} aria-describedby="basic-addon3 basic-addon4"/>
                    <div className="col-2 ms-2">
                        <input type="submit" className="btn btn-primary" value="Save" />
                    </div>
                </div>
                <div className="mb-3 col-10">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">
                        <small>expected response body</small>
                    </label>
                    <textarea name="responseBody" className="form-control textArea" rows={10}></textarea>
                </div>
            </form>
        </div>
    )
}