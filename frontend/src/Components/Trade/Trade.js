import React from "react";
import Image from "react";
import i from "./i.svg";
import Button from "../../Utilities/Components/Button/Button";
import "../Logistics/LogisticsMainPage.scss";
import Sidebar from "../../Utilities/Components/Sidebar/Sidebar";
import "./Trade.scss";
function Trade() {
  return (
    <div className="mainPage">
      <Sidebar />
      <div className="m1">
        <div className="hed1">
        <div className="nav1 f-l fw-b">
        <div>Trade compliance</div> 
        <img src={i}></img>
        </div>
        <div className="hm1"><div><span>Home/</span> <span style={{color: "#646464"}}>Trade Compliance</span> </div></div>
        </div>
       
        <div className="f3">
          <form className="form">
            <div className="input">
              <label for="country" className="f-sx fw-m lab">
                Origin country:
              </label>
              <select className="ph" name="country" id="cars">
                <option  placeholder="Country" className="op ff-poppins f-sx fw-m" value="volvo">
                  Volvo
                </option>
                <option placeholder="Country" className="op ff-poppins f-sx fw-m" value="saab">
                  Saab
                </option>
                <option placeholder="Country" className="op ff-poppins f-sx fw-m" value="opel">
                  Opel
                </option>
                <option className="op ff-poppins f-sx fw-m" value="audi">
                  Audi
                </option>
              </select>
              <div className="usd"></div>
            </div>
            <div className="input">
              <label for="country" className="f-sx fw-m lab">
                Destination country:
              </label>
              <select className="ph" name="country" id="cars">
                <option className="op ff-poppins f-sx fw-m" value="volvo">
                  Volvo
                </option>
                <option className="op ff-poppins f-sx fw-m" value="saab">
                  Saab
                </option>
                <option className="op ff-poppins f-sx fw-m" value="opel">
                  Opel
                </option>
                <option className="op ff-poppins f-sx fw-m" value="audi">
                  Audi
                </option>
              </select>
              <div className="usd"></div>
            </div>
            <div className="input">
              <label for="country" className="f-sx fw-m lab">
                Describe your Product:
              </label>
              <select className="ph" name="country" id="cars">
                <option className="op ff-poppins f-sx fw-m" value="volvo">
                  Volvo
                </option>
                <option className="op ff-poppins f-sx fw-m" value="saab">
                  Saab
                </option>
                <option className="op ff-poppins f-sx fw-m" value="opel">
                  Opel
                </option>
                <option className="op ff-poppins f-sx fw-m" value="audi">
                  Audi
                </option>
              </select>
              <div className="usd"></div>
            </div>
            <div className="input">
              <label for="country" className="f-sx fw-m lab">
                Value of shipment:
              </label>
              <input className="ph"></input>
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
          </form>

          <form className="form">
          <div className="input">
              <label for="country" className="f-sx fw-m lab">
                Construction:
              </label>
              <select className="ph" name="country" id="cars">
                <option  placeholder="Country" className="op ff-poppins f-sx fw-m" value="volvo">
                  Volvo
                </option>
                <option placeholder="Country" className="op ff-poppins f-sx fw-m" value="saab">
                  Saab
                </option>
                <option placeholder="Country" className="op ff-poppins f-sx fw-m" value="opel">
                  Opel
                </option>
                <option className="op ff-poppins f-sx fw-m" value="audi">
                  Audi
                </option>
              </select>
              <div className="usd"></div>
            </div>
            <div className="input">
              <label for="country" className="f-sx fw-m lab">
                Gender:
              </label>
              <select className="ph" name="country" id="cars">
                <option className="op ff-poppins f-sx fw-m" value="volvo">
                  Volvo
                </option>
                <option className="op ff-poppins f-sx fw-m" value="saab">
                  Saab
                </option>
                <option className="op ff-poppins f-sx fw-m" value="opel">
                  Opel
                </option>
                <option className="op ff-poppins f-sx fw-m" value="audi">
                  Audi
                </option>
              </select>
              <div className="usd"></div>
            </div>
            <div className="input">
              <label for="country" className="f-sx fw-m lab">
                Composition:
              </label>
              <select className="ph" name="country" id="cars">
                <option className="op ff-poppins f-sx fw-m" value="volvo">
                  Volvo
                </option>
                <option className="op ff-poppins f-sx fw-m" value="saab">
                  Saab
                </option>
                <option className="op ff-poppins f-sx fw-m" value="opel">
                  Opel
                </option>
                <option className="op ff-poppins f-sx fw-m" value="audi">
                  Audi
                </option>
              </select>
              <div className="usd"></div>
            </div>
            <div className="input">
              <label for="country" className="f-sx fw-m lab">
                Value of shipment:
              </label>
              <input className="ph"></input>
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
            {/* <div className="input">
              <label for="country" className="f-sx fw-m lab">
                Value of shipment:
              </label>
              <select className="ph" name="country" id="cars">
                <option className="op ff-poppins fw-m" value="volvo">
                  Volvo
                </option>
                <option className="op ff-poppins f-sx fw-m" value="saab">
                  Saab
                </option>
                <option className="op ff-poppins f-sx fw-m" value="opel">
                  Opel
                </option>
                <option className="op ff-poppins f-sx fw-m" value="audi">
                  Audi
                </option>
              </select>
            </div> */}
            <div className="btns" style={{ width: "150px" }}>
              <Button
                //  style={{ justifySelf: "flex-end" }}
                className="btn-primary fw-m f-s sub"
              >
                Submit
              </Button>
            </div>
          </form>

          <form className="form">
            <div className="input">
              <label for="country" className="f-sx fw-m">
                Origin country:
              </label>
              <select className="ph" name="country" id="cars">
                <option className="op ff-poppins f-sx fw-m" value="volvo">
                  Volvo
                </option>
                <option className="op ff-poppins f-sx fw-m" value="saab">
                  Saab
                </option>
                <option className="op ff-poppins f-sx fw-m" value="opel">
                  Opel
                </option>
                <option className="op ff-poppins f-sx fw-m" value="audi">
                  Audi
                </option>
              </select>
            </div>
            <div className="input">
              <label for="country" className="f-sx fw-m">
                Destination country:
              </label>
              <select className="ph" name="country" id="cars">
                <option className="op ff-poppins f-sx fw-m" value="volvo">
                  Volvo
                </option>
                <option className="op ff-poppins f-sx fw-m" value="saab">
                  Saab
                </option>
                <option className="op ff-poppins f-sx fw-m" value="opel">
                  Opel
                </option>
                <option className="op ff-poppins f-sx fw-m" value="audi">
                  Audi
                </option>
              </select>
            </div>
            <div className="input">
              <label for="country" className="f-sx fw-m">
                Describe your Product:
              </label>
              <select className="ph" name="country" id="cars">
                <option className="op ff-poppins f-sx fw-m" value="volvo">
                  Volvo
                </option>
                <option className="op ff-poppins f-sx fw-m" value="saab">
                  Saab
                </option>
                <option className="op ff-poppins f-sx fw-m" value="opel">
                  Opel
                </option>
                <option className="op ff-poppins f-sx fw-m" value="audi">
                  Audi
                </option>
              </select>
            </div>
            <div className="input">
              <label for="country" className="f-sx fw-m">
                Value of shipment:
              </label>
              <select className="ph" name="country" id="cars">
                <option className="op ff-poppins fw-m" value="volvo">
                  Volvo
                </option>
                <option className="op ff-poppins f-sx fw-m" value="saab">
                  Saab
                </option>
                <option className="op ff-poppins f-sx fw-m" value="opel">
                  Opel
                </option>
                <option className="op ff-poppins f-sx fw-m" value="audi">
                  Audi
                </option>
              </select>
            </div>
            <div className="btns" style={{ width: "150px" }}>
              <Button
                //  style={{ justifySelf: "flex-end" }}
                className="btn-primary fw-m f-s sub"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Trade;
