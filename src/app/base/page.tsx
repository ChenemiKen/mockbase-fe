"use client";

import { useEffect, useRef, useState } from "react";
import Body from "../ui/base/body";
import SideNav from "../ui/base/sidenav"
import styles from "./page.module.css";

export default function Base(){
    const [sideBarWidth, setSideBarWidth] = useState("250px");
    const isResizing = useRef(false);

    function onMouseDown(){
        isResizing.current = true;
        document.body.style.cursor = "ew-resize";
    }

    function onMouseMove(e:any){
        if (!isResizing.current) return;
        const newWidth = e.clientX;
        if (newWidth > 150 && newWidth < 400) {
            setSideBarWidth(`${newWidth}px`);
        }
    }

    function onMouseUp(){
        isResizing.current = false;
        document.body.style.cursor = "default";
    }

    useEffect(() => {
        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseUp);
        return () => {
          window.removeEventListener("mousemove", onMouseMove);
          window.removeEventListener("mouseup", onMouseUp);
        };
      }, []);

    return (
        <>
            <div className={styles.dashboardContainer}>
                {/* <!-- Sidebar --> */}
                <div className={styles.sidebar} style={{width: sideBarWidth}}>
                    <SideNav/>
                </div>

                {/* <!-- Resizer --> */}
                <div className={styles.resizer} onMouseDown={onMouseDown}></div>

                {/* <!-- Main Content --> */}
                <div className={styles.mainContent} id="main-content">
                    <Body/>
                </div>
            </div>
        </>
    )
}