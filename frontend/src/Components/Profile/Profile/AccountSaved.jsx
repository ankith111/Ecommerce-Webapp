import {React, useState} from 'react'
import { useHistory,  useLocation } from "react-router-dom";
import "./Profile.css";
import Button from '../../../Utilities/Components/Button/Button';
import Switch from "./Switch.jsx";

const AccountSaved = ({onClose, data}) => {
    let  initialImage="";
    if(data.image.length!==0){
         initialImage = URL.createObjectURL(data.image);
    }
    
    const [image, setImage] = useState({ preview: initialImage, raw: data.image });

    const handleSwitchPage = () => {
        onClose();
    }

    const handleChange = e => {
        if (e.target.files.length) {
          setImage({
            preview: URL.createObjectURL(e.target.files[0]),
            raw: e.target.files[0]
          });
        }
      };

    //   console.log("saved",data);
    // console.log(data.image);
     

  return (
    <>
       <div className="container">
            <div className="row-primary-acct">
                <div className="my-4 ">
                    <div className="img-box">
                        {/* <button className="img-change" title=''>
                            <span >Change Profile Photo</span>
                         </button> */}
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

                    </div>
                    {/* <Button className='btn-upload'  >Upload</Button> */}
                    <div className='btn-upload' style={{ height: "30px", width: "60px", marginTop: "-10px" }}> <Button className="btn-primary fw-sb f-xxs ">Upload</Button> </div>
                     
                </div>
            </div>

            <div className="shadow-box">
                  <div className="saved-header fw-sb f-s">{data.firstname}  {data.lastname}</div>
                  <div className="row-display">
                      <div className="col-saved-1">
                               <div className="saved-content">
                                   <span className="saved-title">Company:</span>
                                   <span className="saved-data fw-sb">{data.company}</span>
                               </div>
                               <div className="saved-content">
                                   <span className="saved-title">Brand:</span>
                                   <span className="saved-data fw-sb">{data.brand}</span>
                               </div>
                               <div className="saved-content">
                                   <span className="saved-title">Seller Type:</span>
                                   <span className="saved-data fw-sb">{data.sellerType}</span>
                               </div>
                               <div className="saved-content">
                                   <span className="saved-title">Ecommerce Store Address:</span>
                                   <span className="saved-data fw-sb">{data.ecomAddress}</span>
                               </div>
                               <div className="saved-content">
                                   <span className="saved-title">Email:</span>
                                   <span className="saved-data fw-sb">{data.email}</span>
                               </div>
                      </div>
                      <div className="col-saved-2">
                               <div className="saved-content">
                                   <span className="saved-title">Phone:</span>
                                   <span className="saved-data fw-sb">{data.phone}</span>
                               </div>
                               <div className="saved-content">
                               <span className="saved-title">Two step authentication: </span>
                                    <Switch isToggled={data.isToggled} />
                                </div>

                      </div>
                  </div>
            </div>

            <div style={{ height: "45px", width: "150px", marginTop: "20px" }}> <Button className="btn-primary fw-sb f-xs " onClick={handleSwitchPage}>Edit</Button> </div>

            
            

    </div>
    

    </>
  );
};

export default AccountSaved;
