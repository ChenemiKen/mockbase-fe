import { createEndpoint } from "@/app/lib/base/base";

export default function Body(){

    return(
        <div className="container-fluid">
            <form action={createEndpoint} data-bs-theme="dark">
                <div className="input-group">
                    <div className="col-2">
                        <select name="method" className="form-select">
                            <option value="GET">GET</option>
                            <option value="GET">POST</option>
                            <option value="GET">PUT</option>
                            <option value="GET">PATCH</option>
                            <option value="GET">UPDATE</option>
                            <option value="GET">DELETE</option>
                        </select>
                    </div>
                    <span className="input-group-text ms-1" id="basic-addon3">{process.env.NEXT_PUBLIC_BASE_URL}</span>
                    <input name="path" type="text" className="form-control col" defaultValue={'/'} aria-describedby="basic-addon3 basic-addon4"/>
                    <div className="col-2 ms-2">
                        <input type="submit" className="btn btn-primary" value="Save" />
                    </div>
                </div>
            </form>
        </div>
    )
}