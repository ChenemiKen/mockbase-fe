import Link from 'next/link';
import NavLinks from "@/app/ui/base/navLinks";
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  return (
    <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-body-tertiary" 
      style={{width: 380}}>
    
      <a href="#" className="d-flex align-items-center flex-shrink-0 p-3 link-body-emphasis text-decoration-none border-bottom">
        <span className="fs-5 fw-semibold">Endpoints</span>
      </a>

      <div className="list-group list-group-flush border-bottom scrollarea">
        <a href="#" className="list-group-item list-group-item-action active py-3 lh-sm" aria-current="true">
          <div className="d-flex w-100 align-items-center justify-content-between">
            <strong className="mb-1">List group item heading</strong>
            <small>Wed</small>
          </div>
          <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
        </a>
        <a href="#" className="list-group-item list-group-item-action py-3 lh-sm">
          <div className="d-flex w-100 align-items-center justify-content-between">
            <strong className="mb-1">List group item heading</strong>
            <small className="text-body-secondary">Tues</small>
          </div>
          <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
        </a>
      </div>
    </div>
  );
}