import { React, useEffect, useState } from "react";
import { BrowserRouter as Router, Link, useHistory } from "react-router-dom";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input/input";
import axios from "axios";
import "./login.css";
import URL from "../../URL/URL";
import img from "./images/g10.png"
import Navbar from "./NavLogin.js";
import OtpForm from "./OtpForm.js";


export default function SignUpForm() {
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [showOtpModal, setShowOtpModal] = useState(false);

    const history = useHistory();

    const handleClick = async (e) => {
        e.preventDefault();
        let data = { name, phone, password, password2 };
        console.log(data);
        try {
            const url = `${URL.backend}/user/register/`;
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const body = JSON.stringify(data);
            const res = await axios.post(url, body, config);
            console.log(res);
            setShowOtpModal(true);
        
        } catch (err) {
            // setShowOtpModal(true);
            console.log(err);
        }
    };

    const history1 = useHistory();

    function SwitchSignin() {
        history1.push("/signin");
    }

    const hideOtpModalHandler = () => {
        setShowOtpModal(false)
    }
    
const mode = (
<>
    <div className="back-img">
        <div className="app-top" />

            <Navbar />
        <div className="App">
           
            <div className="appForm">
                <div className="formCenter">
                    <form action="">
                        <div className="formField">
                            <h3 className="header">Sign Up</h3>
                            {/* <label className="formFieldLabel" htmlFor="phone">
                                {" "}
                                Create Account{" "}
                            </label> */}

                            <input
                                className="formFieldInput"
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />

                            <PhoneInput
                                className="formFieldInput"
                                placeholder="Mobile Number"
                                value={phone}
                                onChange={setPhone}
                                error={
                                    phone
                                        ? isValidPhoneNumber(phone)
                                            ? undefined
                                            : "Invalid phone number"
                                        : "Phone number required"
                                }
                            />
                            {/* <p> {value && isValidPhoneNumber(value) ? '' : 'Enter valid Number'} </p> */}

                            <input
                                className="formFieldInput"
                                type="text"
                                id="password"
                                name="password"
                                autoComplete="off"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <input
                                className="formFieldInput"
                                type="text"
                                id="confirmpassword"
                                name="confirmpassword"
                                autoComplete="off"
                                placeholder="Confirm Password"
                                value={password2}
                                onChange={(e) => setPassword2(e.target.value)}
                            />
                        </div>

                        <div>
                            <button
                                className="formFieldButton"
                                type="submit"
                                onClick={handleClick}
                            >
                                {" "}
                                Sign up
                            </button>
                        </div>
                    </form>
                    <div className="login-footer">
                        <span>Already have an account?</span>
                        <button className="pageSwitcher" onClick={SwitchSignin}>
                            Sign in
                        </button>
                    </div>
                    
                </div>
                
            </div>
            <div  className="appAside">
                <img  className="appAside-img" src={img} alt="" />
            </div>
        </div>
    </div>
 </>
)
    return (
        <>   
        {showOtpModal && (
             <OtpForm
                onClose={hideOtpModalHandler}
                // setState={setAddressState}
                phone={phone}
             />
        )}

         <>
            
                 <>{mode}</>
            
           
        </> 

</> 
    );
}
