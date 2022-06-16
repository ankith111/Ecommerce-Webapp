import {React, useState} from 'react'
import { useHistory } from "react-router-dom";
import "./Support.css";

export default function Support() {

  const history = useHistory();
  const [click1, setClick1]=useState(true);
  const [click2, setClick2]=useState(false);

  const Ticket = () =>{ 
    setClick1(true);
    setClick2(false);

    let path = '/'; 
    history.push(path);
  } 

  const history1 = useHistory();
  const Status = () =>{ 
    setClick1(false);
    setClick2(true);

    let path = '/status'; 
    history1.push(path);
  } 

  return (
    <>
       <div className="container">
                 <div className="col-nav ">
                        <div className="nav-tabs" role="tablist">
                              <div className="nav-item f-s">
                                  <a className= {"nav-link " + (click1 ? "active" : "")}  onClick={Ticket} >Raise Ticket</a>
                              </div>
                             
                              <div className="nav-item f-s">
                                  <a className={"nav-link mrg-l " + (click2 ? "active" : "") }  onClick={Status} > Status</a>
                              </div>
                        </div>
                        <div className="horz-line">

                        </div>
                </div>
       </div>
    </>
  )
}
