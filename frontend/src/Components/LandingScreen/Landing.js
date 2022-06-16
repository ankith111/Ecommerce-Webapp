import React from "react";
import "./Landing.scss";
import Navbar from "../../Utilities/Components/Navbar/Navbar";
// import Booking from "./Booking/Booking";
import LandingPage from "./LandingScreen/LandingPage.js"

const Landing = ({}) => {
    return (
        <div className="main-container">
            <Navbar title="Logistics" />

            {/* REPLACE BOOKING */}
            <LandingPage />
        </div>
    );
};

export default Landing;
