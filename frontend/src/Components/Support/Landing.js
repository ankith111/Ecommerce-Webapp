import React from "react";
import "./Landing.scss";
import Navbar from "../../Utilities/Components/Navbar/Navbar";
// import Booking from "./Booking/Booking";
// import Profile from "./Profile/Profile.jsx";
import Support from "./Support/Support.jsx"
const Landing = ({}) => {
    return (
        <div className="main-container">
            <Navbar title="Support" />

            <Support />
        </div>
    );
};

export default Landing;
