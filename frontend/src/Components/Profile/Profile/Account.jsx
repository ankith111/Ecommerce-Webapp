import {React, useState} from 'react'
import { useHistory } from "react-router-dom";
import PhoneInput,{ isValidPhoneNumber } from 'react-phone-number-input/input'
import "./Profile.css";
import Button from '../../../Utilities/Components/Button/Button';
import AccountSaved from './AccountSaved';
import Switch from "./Switch.jsx";

export default function Account() {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [company, setCompany] = useState("");
    const [brand, setBrand] = useState("");
    const [sellerType, setSellerType] = useState("");
    const [ecomAddress, setEcomAddress] = useState("");
  
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [image, setImage] = useState({ preview: "", raw: "" });
    const [showSavedAccount, setShowSavedAccount]=useState(false);
    const [isLoading, setIsLoading] = useState(false);
    
    const [isToggled, setToggled] = useState(false);

    const [accountData, setAccountData] = useState({
        firstname : "",
        lastname : "",
        company  : "",
        brand  : "",
        sellerType  : "",
        ecomAddress  : "",
        phone  : "",
        email  : "",
        image : "",
        isToggled : false,
    })

    const handleChange = e => {
        if (e.target.files.length) {
          setImage({
            preview: URL.createObjectURL(e.target.files[0]),
            raw: e.target.files[0]
          });
        }
      };

    const showSavedAccountHandler = () => {
        setAccountData({
            firstname : firstname,
            lastname : lastname,
            company : company,
            brand : brand,
            sellerType : sellerType,
            ecomAddress : ecomAddress,
            phone : phone,
            email : email,
            image : image.raw,
            isToggled : isToggled,
        })

        // console.log(accountData);
        setIsLoading(true);
        setShowSavedAccount(true);
    }

    const hideSavedAccountHandler = () => {
        setShowSavedAccount(false);
        setIsLoading(false);
    }

    const mode = (
        <>
            <div className="container">
              <div className="row-primary-acct">
                <div className="my-4 ">
                    <div className="img-box">
                          <label className='img-hover' htmlFor="upload-button">
                                {image.preview ? (
                                    <>
                                    <div className='div-img-hover'>Change Profile Photo</div>
                                    <img src={image.preview} className="img-profile"  alt="dummy"  />
                                    
                                 </>
                                ) : (
                                <>
                                    <div className='div-img-hover'>Change Profile Photo</div>
                                    <img src="./images/blank-profile.png" style={{ height: "130px", width: "130px"}} className="img-profile"  alt="dummy"  />
                                </>
                                )}
                           </label>
                           
                           <input
                                type="file"
                                id="upload-button"
                                style={{ display: "none" }}
                                onChange={handleChange}
                            />
                            {/* <button className='btn-upload' >Upload</button> */}
                    </div>
                </div>
            </div>

               
                <form action=''>
                        <div className="row-scnd-acct">
                            <div className="col-primary-acct ">
                                <div className="formField">
                                   <label className="label-txt" for="inputText">First Name</label>
                                    <input className="formFieldInput" type="text" id="name" name="name" 
                                        value={firstname}
                                        onChange= { (e) => setFirstname(e.target.value) }
                                    />
                                </div>
                                <div className="formField">
                                   <label className="label-txt" for="inputText">Last Name</label>
                                    <input className="formFieldInput" type="text" id="name" name="name" 
                                        value={lastname}
                                        onChange= { (e) => setLastname(e.target.value) }
                                    />
                                </div>

                                <div className="formField">
                                   <label className="label-txt" for="inputText">Company</label>
                                    <input className="formFieldInput" type="text" id="company" name="company" 
                                        value={company}
                                        onChange= { (e) => setCompany(e.target.value) }
                                    />
                                </div>

                                <div className="formField">
                                   <label className="label-txt" for="inputText">Brand</label>
                                    <input className="formFieldInput" type="text" id="brand" name="brand" 
                                        value={brand}
                                        onChange= { (e) => setBrand(e.target.value) }
                                    />
                                </div>
                                 
                                <div className="formField">
                                   <label className="label-txt" for="inputText">Seller Type</label>
                                    <input className="formFieldInput" type="text" id="type" name="type" 
                                        value={sellerType}
                                        onChange= { (e) => setSellerType(e.target.value) }
                                    />
                                </div>

                                <div className="formField">
                                   <label className="label-txt" for="inputText">Ecommerce Store Address</label>
                                    <input className="formFieldInput" type="url" id="url" name="url" 
                                        value={ecomAddress}
                                        onChange= { (e) => setEcomAddress(e.target.value) }
                                    />
                                </div>
                             </div>

                              <div className="col-secondary-acct">
                                   <div className="formField">
                                        <label className="label-txt" for="inputText">Email</label>
                                        <input className="formFieldInput" type="email" id="email" name="email" 
                                            value={email}
                                            onChange= { (e) => setEmail(e.target.value) }
                                        />
                                    </div>
                                    <div className="formField">
                                          <label className="label-txt" for="inputText">Mobile Number</label>
                                            <PhoneInput
                                                className="formFieldInput"
                                                value={phone}
                                                onChange={setPhone}
                                                error={phone ? (isValidPhoneNumber(phone) ? undefined : 'Invalid phone number') : 'Phone number required'}
                                            />
                                    </div>
                                   
                                    <span className="saved-title">Two step authentication: </span>
                                    <Switch isToggled={isToggled} onToggle={() => setToggled(!isToggled) } />
                               </div>
 
                        </div>
                </form>
                                  <div style={{ height: "45px", width: "250px", marginTop: "10px" }}> 
                                         <Button className="btn-primary fw-sb f-xs " onClick={showSavedAccountHandler}>Save</Button> 
                                  </div>
            </div>
        </>
    )

  return (

<>
        {showSavedAccount && (
            <AccountSaved
               onClose = {hideSavedAccountHandler}
               data = {accountData}

            />
        )}
        
         <>
            {!isLoading && (
                     <>{mode}</>
            )     
           }
        </>
</>

);

};
