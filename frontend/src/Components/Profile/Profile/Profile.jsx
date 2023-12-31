import React from "react";
// import Navbar from "../Navbar";
import ProfileNav from "./ProfileNav.jsx";
// import AddOn from "../AddOns";

import Account from "./Account.jsx";
import KYC from "./KYC.jsx";
import BankDetail from "./BankDetail.jsx";
import AccountSaved from "./AccountSaved.jsx";
import "./Profile.css";

import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function App() {
  
  return (
      <div>
          {/* <div className="above-navbar" >
            
            <span className="section-heading"> Profile   </span> 
            <AddOn />
          </div>

          <Navbar title="Home"/>   */}
          
         
          <Router>
               <ProfileNav />
                 <Switch>
                    <Route exact path="/" >
                            <Account />
                    </Route>
                    <Route path="/accountsaved" >
                            <AccountSaved />
                    </Route>
                    <Route path='/kyc'  >
                          <KYC />
                    </Route>
                    <Route path='/bankdetail'  >
                          <BankDetail />
                    </Route>
                  </Switch>
          </Router>
            
          
      </div>
  );
}
