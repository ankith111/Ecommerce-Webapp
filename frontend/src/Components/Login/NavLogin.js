import React from 'react'
import Button from '../../Utilities/Components/Button/Button'
import { useHistory, useLocation } from "react-router-dom";

import "./login.css"

export default function NavLogin() {
    
    const history = useHistory();
    function handleSignin() {
        let path = "/signin";
        history.push(path);
    }
    const history1 = useHistory();
    function handleSignup() {
        let path = "/signup";
        history1.push(path);
    }

    const history2 = useHistory();
    function handleHome() {
        let path = "/";
        history2.push(path);
    }

  return (
    <>
       <div className="nav-login">
           <div className="navbar-button" >
             <div >
                <button className="left-button"  onClick={handleHome}> goGlocal</button>
             </div>
              <div className="mid-button">
                    <button className="btn-mid " to="/">Home</button>
                    <button className="btn-mid " to="/">Careers</button>
                    <button className="btn-mid  " to="/">About Us</button>
                    <button className="btn-mid" to="/">FAQ</button>
              </div>
              <div className="right-btn">

                    <div >
                        <button
                            className="sign-in-button"
                            name="Sign in"
                            onClick={handleSignin}
                        >
                            Sign in
                        </button>
                    </div>

                    <div className="sign-up-button">
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

    
    </>
  )
}
