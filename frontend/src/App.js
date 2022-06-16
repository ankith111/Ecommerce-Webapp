import "./App.css";
import SignUpForm from "./Components/Login/SignUpForm";
import SignInForm from "./Components/Login/SignInForm";
import Trade from "./Components/Trade/Trade";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LogisticsMainPage from "./Components/Logistics/LogisticsMainPage";
import Home from "./Components/Home/Home";
import ProfileMainPage from "./Components/Profile/LogisticsMainPage";
import SupportMainPage from "./Components/Support/LogisticsMainPage";
import LandingScreen from "./Components/LandingScreen/LogisticsMainPage"

function App() {
    return (
        <div className="app">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/signin">
                        <SignInForm />
                    </Route>
                    <Route path="/signup">
                        <SignUpForm />
                    </Route>
                
                    {/* <Route path="/landing">
                        <LogisticsMainPage />
                    </Route> */}
                    <Route path="/landing">
                        <LandingScreen />
                    </Route>
                    <Route path="/logistics">
                        <LogisticsMainPage />
                    </Route>
                    <Route path="/profile">
                        <ProfileMainPage />
                    </Route>
                    <Route path="/support">
                        <SupportMainPage />
                    </Route>
                    <Route path="/trade">
                        <Trade />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
