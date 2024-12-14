import { fetchEndpoints } from "../lib/base/base"
import SideNav from "../ui/base/sidenav"

export default function  Base(){
    fetchEndpoints()
    return (
        <>
            <SideNav/>
        </>
    )
}