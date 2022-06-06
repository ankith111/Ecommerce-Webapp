import React from "react";
import "./Sidebar.css";

export default function Sidebar()
{
    return (
        <div id="sidebar">
          <header>
            <a href="#">GoGlocal</a>
          </header>
          <div class="nav">
            <div>
              <a href="#" class="pad-max">
                <i class="fa-solid fa-chart-pie"></i>Cataloging
              </a>
            </div>
            <div>
              <a href="#" class="pad-max">
                <i class="fa-solid fa-warehouse"></i>GoGlocal Store
              </a>
            </div>
            <div>
              <a href="#" class="pad-max">
                <i class="fa-solid fa-globe"></i>Global Expansion <span id="gES">Strategy</span>
              </a>
            </div>
            <div>
              <a href="#" class="pad-min"> 
                <i class="fa-solid fa-people-group"></i>Marketplace <span id="mI">Integration</span>
              </a>
            </div>
            
            <div>
              <a href="#" class="pad-min">
                <i class="fa-solid fa-chalkboard-user"></i>Digital Push
              </a>
            </div>

            <div>
                <a href="#" class="pad-min">
                  <i class="fa-solid fa-lightbulb"></i>  B2B
                </a>
            </div>
            
            <div>
              <a href="#" class="pad-min">
                <i class="fa-solid fa-address-book"></i> Order Management
              </a>
            </div>

            <div>
            <a href="#" class="pad-min">
                <i class="fa-solid fa-truck-fast"></i> Logistics
              </a>
            </div>
            <div>
                <a href="#" class="pad-min">
                    <i class="fa-solid fa-money-check-dollar"></i> Payments
                </a>
            </div>
            
          </div>

          <hr/>

          <div class="profile-sec nav">
            <div>
                <a href="#" class="pad-max">
                    <i class="fa-solid fa-user" ></i> Profile
                </a>
              </div>
              <div style={{marginTop: "1rem"}}>
                <a href="#" class="pad-min">
                    <i class="fa-solid fa-headset" ></i> Support
                </a>
              </div>
          </div>

        </div>
    );
}