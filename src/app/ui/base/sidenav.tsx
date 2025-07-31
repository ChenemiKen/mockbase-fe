export default function SideNav({endpoints}:{endpoints: Endpoint[]}) {  
  return (
    <div data-bs-theme="dark">
      <div className="p-3 d-flex w-100 align-items-center justify-content-between link-body-emphasis border-bottom">
        <span className="text-light">Endpoints</span>
        <small className="ml-auto"><button className='btn btn-primary btn-sm'>+ </button></small>
      </div>

      <div className="list-group list-group-flush border-bottom scrollarea">
        {endpoints.map(endpoint => 
          <a key={endpoint.id} href="#" className="list-group-item list-group-item-action pt-2 lh-sm" aria-current="true">
            <div className="d-flex align-items-center justify-content-between">
              <p className="mb-1">{endpoint.path}</p>
              <small>{endpoint.method}</small>
            </div>
            <div className="col-10 small">{endpoint.method} : {endpoint.path}</div>
          </a>
        )}
        {/* <a href="#" className="list-group-item list-group-item-action py-3 lh-sm">
          <div className="d-flex w-100 align-items-center justify-content-between">
            <strong className="mb-1">List group item heading</strong>
            <small className="text-body-secondary">Tues</small>
          </div>
          <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
        </a> */}
      </div>
    </div>
  );
}