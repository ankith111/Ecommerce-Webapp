import React, { useState, useEffect } from "react";
import Button from "../../../Utilities/Components/Button/Button";
import Modal from "../../../Utilities/Components/UI/Modal";
import "./AddressForm.scss"

const GstForm = ({ onClose, setState, gst }) => {
    const initialState = gst;

    const [gstState, setGstState] = useState(initialState);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);



    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {

            setGstState({
                ...gstState,
                address_line1: parseFloat(gstState.address_line1),
                state: parseFloat(gstState.state),
                pin: parseFloat(gstState.pin),
            });
            setState(gstState);
            // onNext();
            onClose()
        }
    }, [formErrors]);


    const validate = (values) => {
        const errors = {};

        if (!values.pan) {
            errors.pan = "PAN is Required!";
        }
        if (!values.gstin) {
            errors.gstin = "GSTIN is required!";
        }
        if (!values.iec) {
            errors.iec = "IEC is required!";
        }
        return errors;
    };

    const onChangeHandler = (e) => {
        setGstState((state) => {
            return {
                ...state,
                [e.target.name]: e.target.value,
            };
        });
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setFormErrors(validate(gstState));
        setIsSubmit(true);
    };

    return (
        <Modal onClose={onClose}>
            <form onSubmit={onSubmitHandler}>
                <div className="bf-container">
                    <div className="bf-heading">
                        <div className="bf-title ff-poppins f-m fw-sb">
                            Level 1 KYC
                        </div>
                        <div className="cross-icon" onClick={() => onClose()}>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAAx0lEQVRIie2U0QqCQBBFj31gW6H4UN9eUGSF/YGBPbSCyK7MjEpEe8AnZ+7ZXWeFROKfKIAncAU2ir4tcANqINdKM9/Y+qcBSkFf6Wu7vlorBnj0AiTyobQF7hbxLhAUk4ekjc8wkQcCX8ChV1NEavZWqUS+mLQjdpTSTzGJ0M4X26lUrpaulOLM+G4SoUEam/ZZ+MpwjV0ZyT2fXdoxu9wFArW/TGcRX4TSMfnZIq4U0pi8sogdnxUf0R2ZA06+d20RJxK/yRsz0J/5iLMyRAAAAABJRU5ErkJggg==" />
                        </div>
                    </div>
                    <div className="bf-input">
                        <label htmlFor="">PAN</label>
                        <input
                            type="string"
                            className="fw-r f-xs "
                            // required
                            name="pan"
                            value={gstState.pan}
                            onChange={(e) => {
                                onChangeHandler(e);
                            }}
                        />
                        <p className="err_msg">{formErrors.pan}</p>
                    </div>
                    <div className="bf-input">
                        <label htmlFor="">GSTIN</label>
                        <input
                            type="string"
                            className="fw-r f-xs "
                            // required
                            name="gstin"
                            value={gstState.gstin}
                            onChange={(e) => {
                                onChangeHandler(e);
                            }}
                        />
                        <p className="err_msg">{formErrors.gstin}</p>
                    </div>
                   
                    <div className="bf-input">
                       <label htmlFor="">IEC</label>
                        <input
                            type="string"
                            className="fw-r f-xs "
                            // required
                            name="iec"
                            value={gstState.iec}
                            onChange={(e) => {
                                onChangeHandler(e);
                            }}
                        />
                        <p className="err_msg">{formErrors.iec}</p>
                    </div>
                   
                    <div className="pf-button-area">
                        <div className="next-button">
                            <Button
                                type="submit"
                                name="Next"
                                className="btn-primary f-xs"
                                // onClick={() => onClose()}
                            >
                                submit
                            </Button>
                        </div>
                    </div>
                </div>
            </form>
        </Modal>
    );
};

export default GstForm;
