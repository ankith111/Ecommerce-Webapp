import React, { useRef, useState } from "react";
import "./Sidebar.scss";
import logo from "../../Assets/goGlocal.svg";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const hamburgerIcon = (
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAANElEQVRoge3WwQ0AIAzEsCv77wxLIFoke4I8kwAAqSS7O+KG1R0AAADP2HgAAPiOjQcABjrSpwMHOlg7MAAAAABJRU5ErkJggg==" />
);

const backIcon = (
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAAl0lEQVRoge3ZsQ3CMBgF4RM7YMH+k1ChIGhIwTihcBNRxsX/sO6b4J3kxjZI+gcNeAG36iEjGrACG7AUbznsDLzpER/gUjvnGCNSGJHCiBRGpDAihREpjEhhRIopIgCe9IiVfl0tdaoekOD3aF1r54wxJpUxqYxJZUwqY1IZk8qYVMakmipm/z39KN4yrNEfM+7VQ6RZfQGMQnFtuPZjaQAAAABJRU5ErkJggg=="></img>
);

const whiteBackIcon = (
    <img src="https://img.icons8.com/ios/50/ffffff/back--v1.png" />
);

const whiteMenuIcon = (
    <img src="https://img.icons8.com/ios/50/ffffff/menu--v1.png" />
);

export default function Sidebar() {
    const history = useHistory();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const sidebarRef = useRef();

    const sidebarStateHandle = () => {
        setSidebarOpen((oldState) => {
            return !oldState;
        });

        if (!sidebarOpen) sidebarRef.current.classList.add("sidebar_visible");
        if (sidebarOpen) sidebarRef.current.classList.remove("sidebar_visible");
    };

    return (
        <>
            <div className="sidebar_small">
                <div
                    className="sidebar_small_hamburger"
                    onClick={sidebarStateHandle}
                >
                    {sidebarOpen ? whiteBackIcon : whiteMenuIcon}
                </div>

                <a href="/">
                    <div>
                        <img src={logo} alt="" />
                    </div>
                </a>
            </div>
            <div className="sidebar" ref={sidebarRef}>
                <header>
                    <a href="/">
                        <img src={logo} alt="" />
                    </a>
                </header>
                <div className="nav">
                    <div className="pad-max">
                        <a href="#" className="f-xs">
                            <i className="fa-solid fa-chart-pie"></i>Cataloging
                        </a>
                    </div>
                    <div className="pad-max">
                        <a href="#" className="f-xs">
                            <i className="fa-solid fa-warehouse"></i>GoGlocal
                            Store
                        </a>
                    </div>
                    <div className="pad-max">
                        <a href="#" className="f-xs">
                            <i className="fa-solid fa-globe"></i>Global
                            Expansion <span id="gES">Strategy</span>
                        </a>
                    </div>
                    <div className="pad-min">
                        <a href="#" className="f-xs">
                            <i className="fa-solid fa-people-group"></i>
                            Marketplace <span id="mI">Integration</span>
                        </a>
                    </div>

                    <div className="pad-min">
                        <a href="#" className="f-xs">
                            <i className="fa-solid fa-chalkboard-user"></i>
                            Digital Push
                        </a>
                    </div>

                    <div className="pad-min">
                        <a href="#" className="f-xs">
                            <i className="fa-solid fa-lightbulb"></i> B2B
                        </a>
                    </div>

                    <div className="pad-min">
                        <a href="#" className="f-xs">
                            <i className="fa-solid fa-address-book"></i> Order
                            Management
                        </a>
                    </div>

                    <div className="pad-min">
                        <a href="/logistics" className="f-xs">
                            <i className="fa-solid fa-truck-fast"></i> Logistics
                        </a>
                    </div>
                    <div className="pad-min">
                        <a href="#" className="f-xs">
                            <i className="fa-solid fa-money-check-dollar"></i>
                            Payments
                        </a>
                    </div>
                    <div className="pad-min">
                        <a href="#" className="f-xs">
                            <i className="fa-solid fa-handshake"></i>
                            Trade Compliance
                        </a>
                    </div>
                </div>

                <hr />

                <div className="profile-sec nav">
                    <div className="pad-max">
                        <a href="#" className="f-xs">
                            <i className="fa-solid fa-user"></i> Profile
                        </a>
                    </div>
                    <div className="pad-min" style={{ marginTop: "1rem" }}>
                        <a href="#" className="f-xs">
                            <i className="fa-solid fa-headset"></i> Support
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
