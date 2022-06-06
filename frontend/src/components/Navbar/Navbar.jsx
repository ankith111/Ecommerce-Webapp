import React from "react";
import {ExtendedButton,SmallButton} from "./Buttons";
import "./Navbar.css";

// shadow p-3 mb-5 bg-white rounded
// style={{visibility:"hidden"}}

function Navbar(prop)
{
    if(prop.screen !== 0)
        return (
            <div class="navbox">
                <div class="navbar-title">
                    {prop.title}
                    
                    <span class="navBar-btn-grp">
                        <div class = "nav-button-1" style={{visibility:"hidden"}}>
                                <ExtendedButton content="Monitor Upload Status" />
                            </div>

                        <div class = "nav-button-2">
                            <SmallButton content="Set Up"/>
                        </div>
                    </span>
                </div>
            </div>
        );
    
    else
        return (
            <div class="shadow p-3 mb-5 bg-white rounded">
                <div class="navbar-title">
                    {prop.title}
                    
                        <span class = "nav-button-1">
                            <ExtendedButton content="Monitor Upload Status"/>
                        </span>

                        <span class = "nav-button-2">
                            <SmallButton content="SetUp"/>
                        </span>
                    
                </div>
            </div>
        );
}

export default Navbar;