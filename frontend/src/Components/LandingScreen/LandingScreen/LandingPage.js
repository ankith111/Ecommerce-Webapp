import React from 'react'
import "./LandingPage.css"
import y1 from "../Images/Group4153.png"
import y2 from "../Images/Group4182.png"
import b2b from "../Images/b2b.svg"
import catalog from "../Images/carbon_catalog.svg"
import store from "../Images/dashicons_store.svg"
import digital from  "../Images/digital push_.svg"
import strategy from  "../Images/global expansion strategy_.svg"
import payment from  "../Images/international payment_.svg"
import marketplace from  "../Images/marketplace_.svg"
import shiping from  "../Images/shiping_.svg"
import order from "../Images/order management_.svg"




export default function Home() {
  return (
      <>
      <div className="container-landing">
      <div className="landing-row-1">

                 <button className="btn-btn-home catalogigng">
                    <div className='Landing-page-img'>
                      {/* <img src={y2} alt="" className="img1" />
                      <img src={y1} alt="" className="img2" /> */}
                      <img className='img-i' src={catalog} alt="" />
                    </div>
                      <div className="btn-txt f-xs fw-m">
                         Catloging
                      </div>
                 </button>

                 <button   className="btn-btn-home ">
                    <div className='Landing-page-img'>
                      {/* <img src={y1} alt="" className="img1" />
                      <img src={y2} alt="" className="img2" /> */}
                         <img className='img-i' src={store} alt="" />
                    </div>
                       <div className="btn-txt f-xs fw-m">
                         GoGlocal Store
                       </div>
                 </button>

                 <button   className="btn-btn-home">
                    <div className='Landing-page-img'>
                      {/* <img src="" alt="" className="img1" />
                      <img src="" alt="" className="img2" /> */}
                      <img className='img-i' src={strategy} alt="" />
                    </div>
                   <div className="btn-txt f-xs fw-m">
                     Glocal Expansion Strategy
                   </div>
                 </button>

                 <button   className="btn-btn-home">
                    <div className="Landing-page-img">
                      {/* <img src="" alt="" className="img1" />
                      <img src="" alt="" className="img2" /> */}
                      <img className='img-i' src={marketplace} alt="" />

                    </div>
                   <div className="btn-txt f-xs fw-m">
                     Marketplace Integration
                   </div>
                 </button>
      </div>

      <div className="landing-row-2">
                 <button   className="btn-btn-home">
                 <div className="Landing-page-img">
                      <img className='img-i' src={digital} alt="" />

                    </div>
                   <div className="btn-txt f-xs fw-m">
                   Digital Push
                   </div>
                 </button>

                 <button   className="btn-btn-home">
                 <div className="Landing-page-img">
                      <img className='img-i' src={order} alt="" />

                    </div>
                   <div className="btn-txt f-xs fw-m">
                      Order Management
                   </div>
                 </button>

                 <button   className="btn-btn-home">
                 <div className="Landing-page-img">
                      <img className='img-i' src={shiping} alt="" />

                    </div>
                   <div className="btn-txt f-xs fw-m">
                      Shipping
                   </div>
                 </button>

                 <button   className="btn-btn-home">
                 <div className="Landing-page-img">
                      <img className='img-i' src={payment} alt="" />

                    </div>
                   <div className="btn-txt f-xs fw-m">
                   International Payments
                   </div>
                 </button>
      </div>
      <div className="landing-row-3">
                 <button   className="btn-btn-home">
                 <div className="Landing-page-img">
                      <img className='img-i' src={b2b} alt="" />

                    </div>
                   <div className="btn-txt f-xs fw-m">
                   B2B
                   </div>
                 </button>
      </div>
      </div>
</>
  )
}
