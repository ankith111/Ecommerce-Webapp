import {React, useState} from 'react'
import { useHistory } from "react-router-dom";

import Button from '../../../Utilities/Components/Button/Button';
import "./Profile.css";

export default function BankDetail() {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [ifsc, setIfsc] = useState("");
  const [accountnumber, setAccountnumber] = useState("");
  const [bank, setBank] = useState("");
  const [branch, setBranch] = useState("");
  const [accountType, setAccountType] = useState("");
  const [items, setItems] = useState([]);
  const [image, setImage] = useState({ preview: "", raw: "" });
   

  const handleUpload = () => {
        const answer = {
          bank : `${bank}`,
          name : `${name}`,
          account : `${accountnumber}`,
          branch : `${branch}`
        }

        setItems([...items, answer]);

  }

  const handleChange = e => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0]
      });
    }
  };

  const handleDelete = (id) => {
      const updateditems = items.filter((elem, idx) => {
            return idx !== id;
      })
      setItems(updateditems);
  }

  return (
<>
            
    <div className="container">
                <p className="bank-header fw-sb">Bank Accounts</p>
                 <div className="box-profile-bank">
                    {
                     items.map((item, id) => {
                       return (
                        <div className="card " key={id}>
                            <div className="profile-menu">
                                <div>{item.bank}</div>
                                <div>{item.name}</div>
                                <div>{item.account} </div>
                                <div>{item.branch}</div>
                            </div>
                            <div className="profile-card-footer">
                               <i className='far fa-trash-alt add-btn' title='Delete Item' onClick={() => handleDelete(id)}></i>
                            </div>
                        </div>
                       )
                      })
                    }
                 
                 </div>

             <div style={{ height: "45px", width: "150px", marginTop: "20px" }}> 
                <Button className="btn-primary fw-sb f-xs " onClick={handleUpload} >Add Account</Button> 
            </div>
                   
                        <form action=''>
                            <div className="row-bank">
                               <div className="col-bank-f">
                                  <div className="formField">
                                      <input className="formFieldInput" type="text" id="title" name="title" 
                                          placeholder="Title"
                                          value={title}
                                          onChange= { (e) => setTitle(e.target.value) }
                                      />
                                  </div>
                                  
                                  <div className="formField">
                                      <input className="formFieldInput" type="text" id="name" name="name" 
                                          placeholder="Name"
                                          value={name}
                                          onChange= { (e) => setName(e.target.value) }
                                      />
                                  </div>

                                  <div className="formField">
                                      <input className="formFieldInput" type="text" id="ifsc" name="ifsc"
                                          placeholder="IFSC Code"
                                          value={ifsc}
                                          onChange= { (e) => setIfsc(e.target.value) }
                                      />
                                  </div>

                                  <div className="formField">
                                      <input className="formFieldInput" type="text" id="accountNumber" name="name" 
                                          placeholder="Account Number"
                                          value={accountnumber}
                                          onChange= { (e) => setAccountnumber(e.target.value) }
                                      />
                                  </div>
                                </div>

                               <div className="col-bank-s">
                                        <div className="formField">
                                            <input className="formFieldInput" type="text" id="bank" name="bank"
                                            placeholder="Bank"
                                                value={bank}
                                                onChange= { (e) => setBank(e.target.value) }
                                            />
                                        </div>

                                        <div className="formField">
                                            <input className="formFieldInput" type="text" id="branch" name="branch" 
                                            placeholder="Banck Branch"
                                                value={branch}
                                                onChange= { (e) => setBranch(e.target.value) }
                                            />
                                        </div>

                                        <div className="formField">
                                            <input className="formFieldInput" type="text" id="account" name="account"
                                            placeholder="Account Type"
                                                value={accountType}
                                                onChange= { (e) => setAccountType(e.target.value) }
                                            />
                                        </div>
                                </div>

                            </div>
                        </form>

                        <label htmlFor="upload-button">
                                 <>
                                    <div className='fw-sb'>Cancelled Cheque</div>
                                </>
                           </label>
                           <input
                                type="file"
                                id="upload-button"
                                style={{ display: "none" }}
                                onChange={handleChange}
                            />

                    <div style={{ height: "40px", width: "140px", marginTop: "10px" }}>
                         <Button className="btn-primary fw-sb f-xs " >Upload</Button> 
                    </div>            
    </div>
</>

  )
}
