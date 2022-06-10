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
          <div className="hm1">
            <div>
              <span>Home/</span>{" "}
              <span style={{ color: "#646464" }}>Trade Compliance</span>{" "}
            </div>
          </div>
        </div>

        <div className="f3">
          <form className="form">
            <div className="input">
              <label for="country" className="f-sx fw-m lab">
                Origin country:
              </label>
              <select className="ph" name="country" id="cars">
                <option
                  placeholder="Country"
                  className="op ff-poppins f-sx fw-m"
                  value="volvo"
                >
                  USA
                </option>
                <option
                  placeholder="Country"
                  className="op ff-poppins f-sx fw-m"
                  value="saab"
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
              <select className="ph" name="country" id="cars">
                <option className="op ff-poppins f-sx fw-m" value="volvo">
                  USA
                </option>
                <option className="op ff-poppins f-sx fw-m" value="saab">
                  India
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
                <option
                  placeholder="Country"
                  className="op ff-poppins f-sx fw-m"
                  value="volvo"
                >
                  Volvo
                </option>
                <option
                  placeholder="Country"
                  className="op ff-poppins f-sx fw-m"
                  value="saab"
                >
                  Saab
                </option>
                <option
                  placeholder="Country"
                  className="op ff-poppins f-sx fw-m"
                  value="opel"
                >
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

            <div className="btns">
              <Button
                //  style={{ justifySelf: "flex-end" }}
                className="btn-primary fw-m f-s sub"
              >
                Submit
              </Button>
            </div>
          </form>

          <div className="us">
            <div className="chapu fw-m">
              U.S. Census Bureau - Foreign Trade Schedule B (2022) <br />
              <div className="chapa fw-m ">
                Chapter61 <br />
                CHAPTER 61-ARTICLES OF APPAREL AND CLOTHING ACCESSORIES, KNITTED
                OR CROCHETED <br />
              </div>
            </div>

            {/* <table className="padding-table-columns">
  <tr >
   <div><th align="left">Schedule B Number</th></div> 
    <th align="left">Description</th>
    <th align="left">UOM</th>
  </tr>
  <tr  >
    <td>61.04</td>
    <td>Women's or girls' suits, ensembles, suit-type jackets, blazers. dresses, skirts, divided skirts, trousers, bib and brace overalls, breeches and shorts (other than swimwear) knitted or crocheted:</td>
    <td></td>
  </tr>
  <tr >
    <td></td>
    <td>-Dresses</td>
    <td></td>
  </tr>
  <tr >
    <td>61.04</td>
    <td>--of cotton</td>
    <td>Doz.,kg</td>
  </tr>
  
</table>
           </div> */}
     <div className="sb">
            <div className=" u1 fw-b">
           
            <div className="u2 ">
            Schedule B Number
            </div>
            
            <div className="u2m   ">
            Description
            </div>
           
            <div className="u2  ">
            UOM
            </div>
            
        < hr/>

            
            </div>
            <div className="u1">

            <div className="u2">
            61.04
            </div>
            
            <div className="u2m">
            Women's or girls' suits, ensembles, suit-type jackets, blazers. dresses, skirts, divided skirts, trousers, bib and brace overalls, breeches and shorts (other than swimwear) knitted or crocheted:
            </div>
           
            <div className="u2">
            
            </div>
            
</div>
            
            
            <div className="u1">




            <div className="u2">
           
            </div>
            
            <div className="u2m">
               -Dresses
            </div>
           
            <div className="u2">
            
            </div>
            










            </div>
            <div className="u1">

            <div className="u2">
            61. 04
            </div>
            
            <div className="u2m">
            - -of cotton
            </div>
           
            <div className="u2">
            Doz.,kg
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
