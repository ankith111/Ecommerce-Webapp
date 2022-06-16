import React from "react";
import Button from "../../Utilities/Components/Button/Button";
import "./component.css";
import { useHistory, useLocation } from "react-router-dom";
import logo from "./Images/Group3109.png"
export default function Navbar() {
    const history = useHistory();

    function handleSignin() {
        let path = "/signin";
        history.push(path);
    }

    function handleSignup() {
        let path = "/signup";
        history.push(path);
    }

    return (
<div >
    <div className="navbar">
        <div className="nav-buttons">
                <img  className="logo"  src={logo} alt="" />
               <div className="btn-btn-mid">
                    <button className="btn-btn btn-home" to="/">Home</button>
                    <button className="btn-btn btn-career" to="/">Careers</button>
                    <button className="btn-btn  btn-about" to="/">About Us</button>
                    <button className="btn-btn btn-faq " to="/">FAQ</button>
                </div>
               
                 <div className="signin-signup-btn">
                    <button
                        className="btn-sign-in"
                        name="Sign in"
                        onClick={handleSignin}
                    >
                        Sign in
                    </button>
               

                <div className="btn-sign-up">
                    <Button
                        className="btn btn-primary "
                        name="Sign up"
                        onClick={handleSignup}
                    >
                        Sign Up
                    </Button>
                </div>
                </div>
          </div>
        </div>
</div>
    );
}


