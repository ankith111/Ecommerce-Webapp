import React, { useEffect, useState } from "react";
import Image from "react";
import JSONDATA from "../data.json";
import Axios from "axios";
import i from "./i.svg";
import Button from "../../Utilities/Components/Button/Button";
import "../Logistics/LogisticsMainPage.scss";
import Sidebar from "../../Utilities/Components/Sidebar/Sidebar";
import "./Trade.scss";
import axios from "axios";
import { Metadata } from "libphonenumber-js/core";
function Trade() {
  const url = "http://65.0.204.216/trade_compliance/get_hs_code";


  const [matdata, setmatdata] = useState({});
  const [gendata, setgendata] = useState("");
  const [Data, setData] = useState({
    chapter: "62",
    format: "questions",
    description: "",
   
    answers: {
      gender: gendata,
      material : {
         cotton : matdata.cotton,
      }
  }
  });

  async function addTodo() {
  
    try {
      const url = "http://65.0.204.216/trade_compliance/get_hs_code";
      const config = {
          headers: {
              "Content-Type": "application/json",
              
          },
      };

    //   const body = {
    //     "chapter": "62",
    //     "country": "United States",
    //     "format": "questions",
    //     "description": "shirt",
    //     "answers": {
    //         "gender": "Women's or girls",
    //         "material" : {
    //             "cotton": 70
    //         }
    //     }
    // };
    const body = JSON.stringify(Data);
      const res = await axios.post(url, body, config);
  
      console.log("sent", res);
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
    setData((state)=>{
      return{
        ...state,
      answers: {
        gender: gendata,
        material : {
           cotton : Number(matdata.cotton),
           wool: Number(matdata.wool),
        }
    }
  }
      });

}, [gendata,matdata]);


  const onChangeHandler = (e) => {
    
    setData((state) => {
      return {
        ...state,
        [e.target.name]: e.target.value,
         description: sterm,
      };
    });
  };
  const onChangeHandler1 = (e) => {
    setmatdata((state) => {
      return {
        ...state,
        [e.target.name]: e.target.value,
      };
    });

  };
  const onChangeHandler2 = (e) => {
    setgendata(() => {
      
      return (e.target.value);
    });
    
    
  };
  
  const onSubmitHandler = (e) => {
    e.preventDefault();
    
    console.log(Data);
    addTodo();
    
  };

  const [sterm, setsterm] = useState("");
  const [cot, setcot] = useState(false);
  const [dis, setdis] = useState("none");
  let m = 0;

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
          <form className="form" onSubmit={onSubmitHandler}>
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
                required
                onChange={(e) => {
                  onChangeHandler(e);
                }}
              ></input>
              <div className="usd">USD</div>
            </div>

            <div className="input">
              <label for="country" className="f-sx fw-m lab">
                Construction:
              </label>
              <select className="ph" name="country" id="cars" required>
                {/* <option className="uno" value="" disabled selected>
                  Please select an option
                </option> */}
                <option className="op ff-poppins f-sx fw-m" value="volvo">
                  Knitted or croching
                </option>
                <option className="op ff-poppins f-sx fw-m" value="saab">
                  other
                </option>
              </select>
              <div className="usd"></div>
            </div>
            <div className="input">
              <label for="country" className="f-sx fw-m lab">
                Gender:
              </label>

              <select
                className="ph"
                name="gender"
                id="cars"
                required
                onChange={(e) => {
                  onChangeHandler2(e);
                }}
              >
                <option className="uno" value="" disabled selected>
                  Please select an option
                </option>
                <option
                  className="op ff-poppins f-sx fw-m"
                  name="gender"
                  value="Men's or Boys"
                >
                  Men's or Boys
                </option>
                <option
                  className="op ff-poppins f-sx fw-m"
                  name="gender"
                  value="Women's or girls"
                >
                  Women's or girls
                </option>
                <option
                  className="op ff-poppins f-sx fw-m"
                  name="gender"
                  value="Babies"
                >
                  Babies
                </option>
              </select>
              <div className="usd"></div>
            </div>
            <div className="input">
              <label for="country" className="f-sx fw-m lab">
                Composition:
              </label>
              <div className="composition">
                <div
                  className="compdis"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    // e.preventDefault();
                    if (dis == "none") {
                      setdis("contents");
                    } else {
                      setdis("none");
                    }
                  }}
                >
                  Composition
                </div>

                <div className="composition1" style={{ display: `${dis}` }}>
                  <div className="co">
                    <input
                      className="compin"
                      name="cotton"
                      type="tel"
                      onChange={(e) => {
                        onChangeHandler1(e);
                      }}
                    ></input>
                    <div className="cmo">%Cotton</div>
                  </div>
                  <div className="co">
                    <input
                      className="compin"
                      name="wool"
                      type="tel"
                      onChange={(e) => {
                        onChangeHandler1(e);
                      }}
                      
                    ></input>
                    <div className="cmo">%wool or fine animal hair</div>
                  </div>
                  <div className="co">
                    <input className="compin" type="number"></input>
                    <div className="cmo">%synthetic fibres</div>
                  </div>
                  <div className="co">
                    <input className="compin" type="number"></input>
                    <div className="cmo">%other textile material</div>
                  </div>
                  <div className="co">
                    <input className="compin" type="number"></input>
                    <div className="cmo">%manmade fibre</div>
                  </div>
                  <div className="co">
                    <input className="compin" type="number"></input>
                    <div className="cmo">%artificial fibers</div>
                  </div>
                  <div className="co">
                    <input className="compin" type="number"></input>
                    <div className="cmo">%Kashmir (cashmere) goats</div>
                  </div>
                </div>
              </div>
              <div className="usd"></div>
            </div>

            <div className="btns">
              <Button
                //  style={{ justifySelf: "flex-end" }}
                className="btn-primary fw-m f-s sub"
              >
                Submit
              </Button>
            </div>
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
