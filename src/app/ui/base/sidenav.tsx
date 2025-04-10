import Link from 'next/link';
import NavLinks from "@/app/ui/base/navLinks";
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { fetchEndpoints } from '@/app/lib/base/base';

export default function SideNav() {
  const [endpoints, setEndpoints] = useState<Endpoint[]>([])

  useEffect(() => {
      fetchEndpoints().then(data => setEndpoints(data))
  }, [])

  return (
    <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-body-tertiary" style={{width: 300}}>
    
      <div className="p-3 d-flex w-100 align-items-center justify-content-between link-body-emphasis border-bottom">
        <span className="">Endpoints</span>
        <span className="ml-auto"><button className='btn btn-primary btn-sm'>+ Add</button></span>
      </div>

      <div className="list-group list-group-flush border-bottom scrollarea">
        {endpoints.map(endpoint => 
          <a key={endpoint.id} href="#" className="list-group-item list-group-item-action py-3 lh-sm" aria-current="true">
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">{endpoint.path}</strong>
              <small>{endpoint.method}</small>
            </div>
            <div className="col-10 mb-1 small">{endpoint.method} : {endpoint.path}</div>
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