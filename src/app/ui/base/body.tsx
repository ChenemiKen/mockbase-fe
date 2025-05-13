export default function Body(){
    return(
        <div className="container-fluid">
            <form data-bs-theme="dark">
                <div className="row">
                    <div className="col-2">
                        <select id="disabledSelect" className="form-select">
                            <option value="GET">GET</option>
                            <option value="GET">POST</option>
                            <option value="GET">PUT</option>
                            <option value="GET">PATCH</option>
                            <option value="GET">UPDATE</option>
                            <option value="GET">DELETE</option>
                        </select>
                    </div>
                    <input type="text" className="form-control col"/>
                    <div className="col-2">
                        <input type="submit" className="btn btn-primary" value="Save" />
                    </div>
                </div>
            </form>
        </div>
    )
}