import React, { useState, useEffect } from "react";
import Button from "../../Utilities/Components/Button/Button";
import Modal from "../../Utilities/Components/UI/Modal";
import { useHistory, useLocation } from "react-router-dom";
import "./OtpForm.scss";
import check from "./images/ShieldCheck.png";
import axios from "axios";


const AddressForm = ({ onClose,  phone }) => {
    const [otp, setOtp] = useState(new Array(6).fill(""));

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
        
         //Focus next input
         if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    const getMaskedNumber = (number) => {
        number = number.substring(2, number.length - 1);
        const endDigits = number.slice(-4);
        return endDigits.padStart(number.length, '*');
    }

    const maskedPhone = getMaskedNumber(phone);
    // console.log(maskedPhone);


     const compleOtp = otp.join("");
    const history = useHistory();
    const varifyHandler = async (e) => {
        e.preventDefault();
        let data = { compleOtp, phone };
        console.log(data);
        try {
            const url = `${URL.backend}/user/verify_otp/`;
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const body = JSON.stringify(data);
            const res = await axios.post(url, body, config);
            console.log(res);
            localStorage.setItem("token", res.data.token);

            let path = "/landing";
            history.push(path);
            
        } catch (err) {
            console.log(err);
            alert("Wrong OTP! Try again");
        }
    };



    return (
        <Modal onClose={onClose}>
            <div className="bf-container">
                   <div className="bf-heading">
                        <div className="bf-image ">
                                <img src={check} alt="" />
                        </div>
                        <div className="cross-icon" onClick={() => onClose()}>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAAx0lEQVRIie2U0QqCQBBFj31gW6H4UN9eUGSF/YGBPbSCyK7MjEpEe8AnZ+7ZXWeFROKfKIAncAU2ir4tcANqINdKM9/Y+qcBSkFf6Wu7vlorBnj0AiTyobQF7hbxLhAUk4ekjc8wkQcCX8ChV1NEavZWqUS+mLQjdpTSTzGJ0M4X26lUrpaulOLM+G4SoUEam/ZZ+MpwjV0ZyT2fXdoxu9wFArW/TGcRX4TSMfnZIq4U0pi8sogdnxUf0R2ZA06+d20RJxK/yRsz0J/5iLMyRAAAAABJRU5ErkJggg==" />
                        </div>
                    </div>

                    <div className="bf-content">
                        <div className="f-s fw-sb bf-header">
                           Authenticate Your Account
                        </div>
                        <div className="bf-menu">
                            Please enter the OTP sent on 
                            <span style={{"margin-left": "10px"}} className="fw-sb f-xs ">{maskedPhone} </span>
                        </div>

                   <div className="otp-flex" >
                        {otp.map((data, index) => {
                            return (
                                <input
                                    className="otp-field"
                                    type="text"
                                    name="otp"
                                    maxLength="1"
                                    key={index}
                                    value={data}
                                    onChange={e => handleChange(e.target, index)}
                                    onFocus={e => e.target.select()}
                                />
                            );
                        })}
                    </div>



                        <div style={{ height: "45px", width: "300px", marginTop: "20px", "margin-left" : "20px" }}> 
                                         <Button className="btn-primary ff-poppins fw-sb f-xs " onClick={varifyHandler}>Verify</Button> 
                        </div>
                        <div style={{ height: "45px", width: "300px", marginTop: "20px", "margin-left" : "20px" }}> 
                                         <Button className="btn-secondary3 ff-poppins fw-sb f-xs " >Resend Code</Button> 
                        </div>
                    </div>




            </div>
        </Modal>
    );
};

export default AddressForm;
