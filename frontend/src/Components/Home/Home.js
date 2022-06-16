import React from 'react'
import "./component.css"
import Navbar from './Navbar'
import Button from "../../Utilities/Components/Button/Button";
import img1 from "./Images/Group34693.png"
import img2 from "./Images/path54.png"

export default function Home() {
  return (
    <>
    <div className="container-home">
        <div className='container-top'></div>
      <Navbar />
      
       
      <div className="display-home-flex">
         <div className="home-content">
               <p className=" fw-sb content1" >India’s only comprehensive platform for all e-commerce exporting needs </p>
               <p className="fw-sb  content2">Transforming the global e-commerce landscape for Indian brands and sellers</p>
               <p className="fw-r content3" > goGlocal’s power-packed solutions makes it easier for you to reach millions
                  of new customers and scale across the world. We start by proposing the best glocal strategy, setting up
                  your e-commerce business, fulfilling international deliveries while managing all trade compliances and
                  ensuring your payments and profits are maximised; in short making sure your business reaches it’s true global potential
               </p>

               <div style={{ height: "40px", width: "150px", marginTop: "30px" }}> 
                     <Button className="btn btn-primary fw-m f-xs " >Ger Started </Button> 
                </div>
          </div>

            <div className="home-div-img">
                 <img className="home-img"  src={img1} alt="" />
          </div>
    </div> 
     
            <div >
              <img  className="home-img-bottom" src={img2} alt="" />
            </div>

    </div>
    </>
    
  )
}
