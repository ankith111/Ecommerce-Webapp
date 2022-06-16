import React from "react";
import Support from "./SupportNav"
import RaiseTicket  from "./RaiseTicket";
import Status   from "./Status.jsx"

import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function App() {
  
  return (
      <div>
        
          <Router>
               <Support />
                 <Switch>
                   <Route exact path="/" >
                          <RaiseTicket />
                   </Route>
                    <Route path='/status'  >
                        <Status />
                   </Route>
                  </Switch>
                </Router>
            
          
      </div>
  );
}
