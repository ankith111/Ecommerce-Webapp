

import React, { useEffect, useState } from "react";
import Image from "react";
import JSONDATA from "../data.json";
import i from "./i.svg";
import Button from "../../Utilities/Components/Button/Button";
import "../Logistics/LogisticsMainPage.scss";
import Sidebar from "../../Utilities/Components/Sidebar/Sidebar";
import "./Trade.scss";
import axios from "axios";

function Trade() {
  // const url = "http://65.0.204.216/trade_compliance/get_hs_code";

  // const [matdata, setmatdata] = useState({});
  // const [gendata, setgendata] = useState("");
  const [sterm, setsterm] = useState("");
  const [cot, setcot] = useState(false);
  // const [dis, setdis] = useState("none");
  const [suc, setsuc] = useState("");
  let m = 0;

  const [Data, setData] = useState({
    // hscode:"6106",
    req_type : 0,
    description: "",
    country : "USA",
    // answers: {
    //   gender: gendata,
    //   material: {},
    // },
  });

  async function addTodo() {
    try {
      const url = "http://65.0.204.216/trade_compliance/get_hs_code";
      const config = {
        headers: {
          "Content-Type": "application/json",
          
        },
      };
      const  dt = {"req_type" : 0,
        "description": "overcoats",
        "country" : "USA"}
      const body = JSON.stringify(dt);
      console.log(body);
      const res = await axios.post(url, body, config);

      console.log("sent", res);
      setsuc("Data submitted succefully");
      
    } catch (err) {
      console.log("Error in sending data!", err.response.data);
      alert("Error in sending data!");
      // if (err.response.data.detail === "Invalid token.") {
      //     history.push("/");
      //     localStorage.removeItem("token");
      // }
    }
  }
  useEffect(() => {
    setData((state) => {
      return {
        ...state,
        description: sterm,
       
      };
    });
  }, [sterm]);

  const onChangeHandler = (e) => {
    setData((state) => {
      return {
        ...state,
        [e.target.name]: e.target.value,
      };
    });
  };
  const [err, seterr] = useState("");
  const [erd,seterd] =useState(null);
  const [isSubmit, setisSubmit] = useState(false);
  const validity = (Data) => {
    
    if(JSONDATA.filter((val)=>{
      if(val === Data.description){
       return val;
      }
    }).length==0){
    seterd(0);
    setsterm("");
    }
    else{
    seterd(1);
    }

  };

  useEffect(() => {

    if(isSubmit && erd){
    addTodo();
    setisSubmit(false);
    // alert("working");
  }
   
    
    },[isSubmit]);
 
  const onSubmitHandler = (e) => {
    e.preventDefault();
    validity(Data);
    console.log(Data);
    setisSubmit(true);
    // addTodo();
  };

  let aks = () => {
    let arr = JSONDATA.filter((val) => {
      if (sterm == "") {
      } else if (val.toLowerCase().includes(sterm.toLowerCase())) {
        return val;
      }
    });
    if (arr.length === 0) {
      return <div style={{ color: "red" }}>Enter Valid Input</div>;
    } else {
      const main = arr.map((val) => {
        if (val === sterm) {
          m = 1;
        } else {
          return (
            <div
              onClick={() => {
                setsterm(val);
              }}
              className="vah"
            >
              {val}
            </div>
          );
        }
      });
      return <div className="sheet">{m ? "" : main}</div>;
    }
  };
  return (
    <div className="mainPage">
      <Sidebar className="sidebar" />
      <div className="m1">
        <div className="hed1">
          <button id="post" onClick={addTodo}>
            post
          </button>
          <div className="nav1 f-l fw-b">
            <div>Trade compliance</div>
            <img src={i}></img>
          </div>
          <div className="hm1">
            <div>
              <span>Home/</span>{" "}
              <span style={{ color: "#646464" }}>Trade Compliance</span>{" "}
            </div>
          </div>
        </div>
        <div className="f-m fw-b abt">About your Product</div>

        <div className="f3">
          <form id="myForm" className="form" onSubmit={onSubmitHandler}>
            <div className="input">
              <label for="country" className="f-sx fw-m lab">
                Origin country:
              </label>

              <select
                className="ph "
                name="country"
                id="cars"
                onChange={(e) => {
                  onChangeHandler(e);
                }}
                required
              >
                <option value="" disabled selected>
                  Country name
                </option>
                <option
                  placeholder="Country"
                  className="op ff-poppins f-sx fw-m ph."
                  value="USA"
                >
                  USA
                </option>
                <option
                  placeholder="Country"
                  className="op ff-poppins f-sx fw-m"
                  value="India"
                >
                  India
                </option>
              </select>
              <div className="usd"></div>
            </div>
            <div className="input">
              <label for="country" className="f-sx fw-m lab">
                Destination country:
              </label>

              <select
                className="ph"
                name="country"
                id="cars"
                required
                onChange={(e) => {
                  onChangeHandler(e);
                }}
              >
                <option className="uno" value="" disabled selected>
                  Country name
                </option>
                <option className="op ff-poppins f-sx fw-m" value="USA">
                  USA
                </option>
                <option className="op ff-poppins f-sx fw-m" value="India">
                  India
                </option>
              </select>
              <div className="usd"></div>
            </div>

            <div class="ins">
              <label for="country" className="f-sx fw-m lab">
                Describe your Product:
              </label>
              <div className="inputsp">
                <input
                  type="text"
                  name="description"
                  placeholder="search"
                  value={sterm}
                  className="insp"
                  onChange={(event) => {
                    setsterm(event.target.value);
                    setcot(true);
                  
                  }}
                ></input>
                {cot ? aks() : ""}
              </div>

              <div className="usd"></div>
            </div>
            <div className="input">
              <label for="country" className="f-sx fw-m lab">
                Value of shipment:
              </label>
              <input
                className="ph"
                type="number"
                name="value"
                // onChange={(e) => {
                //   onChangeHandler(e);
                // }}
              ></input>
              <div className="usd">USD</div>
            </div>

           

            <div className="btns">
              <Button
                //  style={{ justifySelf: "flex-end" }}
                className="btn-primary fw-m f-s sub"
              >
                Submit
              </Button>
            </div>
            <div style={{color:"#52c41a"}}>{suc}</div>
          </form>
          <div>
            <div className="ushb">USA Shedule B</div>
            <div className="us">
              <div className="chapu fw-m">
                U.S. Census Bureau - Foreign Trade Schedule B (2022) <br />
                <div className="chapa fw-m ">
                  Chapter61 <br />
                  CHAPTER 61-ARTICLES OF APPAREL AND CLOTHING ACCESSORIES,
                  KNITTED OR CROCHETED <br />
                </div>
              </div>

              <div className="sb">
                <div className=" u1 fw-b">
                  <div className="u2 ">Schedule B Number</div>

                  <div className="u2m   ">Description</div>

                  <div className="u2  ">UOM</div>

                  <hr />
                </div>
                <div className="u1">
                  <div className="u2">61.04</div>

                  <div className="u2m">
                    Women's or girls' suits, ensembles, suit-type jackets,
                    blazers. dresses, skirts, divided skirts, trousers, bib and
                    brace overalls, breeches and shorts (other than swimwear)
                    knitted or crocheted:
                  </div>

                  <div className="u2"></div>
                </div>

                <div className="u1">
                  <div className="u2"></div>

                  <div className="u2m">-Dresses</div>

                  <div className="u2"></div>
                </div>
                <div className="u1">
                  <div className="u2">61. 04</div>

                  <div className="u2m">- -of cotton</div>

                  <div className="u2">Doz.,kg</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Trade;