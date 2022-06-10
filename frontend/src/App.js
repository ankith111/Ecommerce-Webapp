import "./App.css";
import Otp from "./Components/Login/Otp";
import SignUpForm from "./Components/Login/SignUpForm";
import SignInForm from "./Components/Login/SignInForm";
import Trade from "./Components/Trade/Trade";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LogisticsMainPage from "./Components/Logistics/LogisticsMainPage";
import Home from "./Components/Home/Home";

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
                    <Route path="/otp">
                        <Otp />
                    </Route>
                    <Route path="/landing">
                        <LogisticsMainPage />
                    </Route>
                    <Route path="/logistics">
                        <LogisticsMainPage />
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
