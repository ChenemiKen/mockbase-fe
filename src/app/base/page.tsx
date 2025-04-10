"use client";

import { useState } from "react";
import Body from "../ui/base/body";
import SideNav from "../ui/base/sidenav"
import styles from "./page.module.css";

export default function Base(){
    const [isResizing, setIsResizing] = useState(false);
    const [sideBarWidth, setSideBarWidth] = useState("250px");

    function onMouseDown(){
        setIsResizing(true);
        document.body.style.cursor = "ew-resize";
    }

    function onMouseMove(e:any){
        if (!isResizing) return;
        const newWidth = e.clientX;
        if (newWidth > 150 && newWidth < 400) {
            setSideBarWidth(`${newWidth}px`);
        }
    }

    function onMouseUp(){
        setIsResizing(false);
        document.body.style.cursor = "default";
    }

    return (
        <>
            <div className={styles.dashboardContainer}>
                {/* <!-- Sidebar --> */}
                <div className={styles.sidebar} style={{width: sideBarWidth}}>
                    <h4>Sidebar</h4>
                    <ul className="nav flex-column">
                        <li className="nav-item"><a href="#" className="nav-link">Dashboard</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Reports</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Settings</a></li>
                    </ul>
                </div>

                {/* <!-- Resizer --> */}
                <div className={styles.resizer} onMouseDown={onMouseDown}
                    onMouseMove={onMouseMove} onMouseUp={onMouseUp}></div>

                {/* <!-- Main Content --> */}
                <div id="main-content">
                <h1>Main Dashboard Content</h1>
                <p>Welcome to your resizable dashboard layout!</p>
                <div className="card mt-3">
                    <div className="card-body">
                    You can place graphs, tables, and widgets here.
                    </div>
                </div>
                </div>
            </div>

            {/* <script>
                const resizer = document.getElementById("resizer");
                const sidebar = document.getElementById("sidebar");
                const main = document.getElementById("main-content");

                let isResizing = false;

                resizer.addEventListener("mousedown", (e) => {
                isResizing = true;
                document.body.style.cursor = "ew-resize";
                });

                document.addEventListener("mousemove", (e) => {
                if (!isResizing) return;
                const newWidth = e.clientX;
                if (newWidth > 150 && newWidth < 400) {
                    sidebar.style.width = `${newWidth}px`;
                }
                });

                document.addEventListener("mouseup", () => {
                isResizing = false;
                document.body.style.cursor = "default";
                });
            </script> */}
        </>
    )
}