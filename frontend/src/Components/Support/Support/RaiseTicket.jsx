import {React, useState, useEffect} from 'react'
import PhoneInput,{ isValidPhoneNumber } from 'react-phone-number-input/input'
import { useHistory } from "react-router-dom";
import Button from '../../../Utilities/Components/Button/Button';
import "./Support.css"

const getDatafromLS=()=>{
    const data = localStorage.getItem('tickets');
    if(data){
        return JSON.parse(data);
    }
    else{
        return []
    }
}
window.localStorage.clear();

export default function RaiseTicket() {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [enquiry, setEnquiry] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState({ preview: "", raw: "" });
    const [tickets, setTickets] = useState(getDatafromLS);

   

    const handleChange = e => {
        if (e.target.files.length) {
          setImage({
            preview: URL.createObjectURL(e.target.files[0]),
            raw: e.target.files[0]
          });
        }
      };

    const history = useHistory();
   
    const  submitHandler = () => {
        const current = new Date();
        let longMonth = current.toLocaleString('en-us', { month: 'long' });
        const date = `${longMonth}${current.getDate()},${current.getFullYear()}`;
        const ticket = {
            date : date,
            name : name,
            type :enquiry,
            title  : title,
            description  : description,
            phone  : phone,
            email  : email,
            image : image.preview,
            status : "Solved",
        }

        setTickets([...tickets, ticket]);
        console.log("raise", tickets);
        localStorage.setItem('tickets', JSON.stringify(tickets));
        // let path = '/Status'; 
        // history.push(path);
    }

    useEffect(()=>{
        localStorage.setItem('tickets', JSON.stringify(tickets));
    }, [tickets])

  return (
    <div>
        <div className="ticket-menu">
                <form action=''>
                    <div className="formField">
                        <input className="formFieldInput" type="text" id="name" name="name" 
                            placeholder="Name"
                            value={name}
                            onChange= { (e) => setName(e.target.value) }
                        />
                    </div>
                    <PhoneInput
                        className="formFieldInput"
                        placeholder="Mobile"
                        value={phone}
                        onChange={setPhone}
                        error={phone ? (isValidPhoneNumber(phone) ? undefined : 'Invalid phone number') : 'Phone number required'}
                    />

                    <div className="formField">
                        <input className="formFieldInput" type="email" id="email" name="email" 
                            placeholder="Email ID"
                            value={email}
                            onChange= { (e) => setEmail(e.target.value) }
                        />
                    </div>

                    <div className="formField">
                        <input className="formFieldInput" type="text" id="enquiry" name="enquiry" 
                            placeholder="Enquiry Type"
                            value={enquiry}
                            onChange= { (e) => setEnquiry(e.target.value) }
                        />
                    </div>
                    <div className="formField">
                        <input className="formFieldInput" type="text" id="title" name="title" 
                            placeholder="Title"
                            value={title}
                            onChange= { (e) => setTitle(e.target.value) }
                        />
                    </div>

                    <div className="formField">
                        <textarea className="formFieldInput " type="text" id="description" name="description" 
                            placeholder="Description"
                            value={description}
                            onChange= { (e) => setDescription(e.target.value) }
                        />
                    </div>


                          <label className='img-hover' htmlFor="upload-button">
                                 <>
                                    <div className='attach-image'>Attachement</div>
                                </>
                           </label>
                           <input
                                type="file"
                                id="upload-button"
                                style={{ display: "none" }}
                                onChange={handleChange}
                            />

                </form>
                
                <div style={{ height: "40px", width: "250px", marginTop: "20px" }}>
                      <Button className="btn-primary fw-sb f-xs " onClick={submitHandler}> Submit </Button>
                </div>
            </div>
    </div>
  )
}
