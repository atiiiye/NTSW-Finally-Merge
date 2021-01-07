import React, { Component } from 'react'
//import { React } from "react";
import '../../css/Home.css'
import Screenshot1 from '../../images/Screenshot1.png';

import ntsw1 from '../../images/ntsw1.png';

//import m1 from '../../images/m1.png';
//import headertitle from "../../images/headertitle.png";
//import { useState } from 'react';
//import RangeSlider from 'react-bootstrap-range-slider';
import Carousel from 'react-bootstrap/Carousel'






export class BootstrapCarousel extends Component {
    render() {

        return (
            <div >
                
                <div className='container-fluid'  style={{ height: "500px" }}  >
                   <div className="d-flex photo justify-content-center" ><img  style={{ 'height': "501px" , width:'100%' }} src={Screenshot1}/></div> 
                    <Carousel >




                        <Carousel.Item style={{ 'height': "500px" }} >
                            <div className="px-auto slideSpace">
                                <img style={{ 'height': "300px"  }}
                                    className=" w-45"
                                    src={ntsw1} />
                            </div>
                            <Carousel.Caption>
                                <h3> </h3>
                            </Carousel.Caption>
                        </Carousel.Item  >
                        <Carousel.Item style={{ 'height': "500px" }}>
                            <div className="px-auto slideSpace">
                                <img style={{ 'height': "300px" }}
                                    className="w-45"
                                    src={ntsw1} />
                            </div>
                            <Carousel.Caption>
                                <h3></h3>
                            </Carousel.Caption>
                        </Carousel.Item> 
                        <Carousel.Item style={{ 'height': "500px" }}>
                            <div className="px-auto slideSpace">
                                <img style={{ 'height': "300px" }}
                                    className="w-45"
                                    src={ntsw1} />
                            </div>
                            <Carousel.Caption>
                                <h3></h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                
            </div>
        )
    }
}

export default BootstrapCarousel

// const HomeSlider = () => {

//     return (

//         <div>
//             <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
//                 <div class="carousel-inner bg-dark">
//                     <div class="carousel-item ">
//                         <img style={{ 'height': "300px" }} class=" w-50" src={'assets/img/logo192.png'} alt="First slide" />
//                     </div>
//                     <div class="carousel-item active">
//                         <img style={{ 'height': "300px" }} class=" w-100" src={'assets/img/logo192.png'} alt="Second slide" />
//                     </div>
//                     <div class="carousel-item ">
//                         <img style={{ 'height': "300px" }} class=" w-50" src={'assets/img/logo192.png'} alt="Third slide" />
//                     </div>
//                 </div>
//                 <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
//                     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//                     <span class="sr-only">Previous</span>
//                 </a>
//                 <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
//                     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//                     <span class="sr-only">Next</span>
//                 </a>
//             </div>
//         </div>
        /* <Carousel className="HomeSlider" >
            <Carousel.Item className="HomeSlider2">
                <img
                    className="w-50 "
                    src={headertitle}
                    alt="hhhhhhhhh"
                />
        
            </Carousel.Item>
            <Carousel.Item className="HomeSlider2">
                <img
                    className="w-50 "
                    src={headertitle}
                    alt="Third slide"
                />
        
        
            </Carousel.Item>
        
            <Carousel.Item className="HomeSlider2">
        
                <img
                    className="w-50"
                    src={headertitle}
                    // src="../../images/m1.png"
                    alt="Third slide"
                />
        
        
            </Carousel.Item>
        
        
        
        
        </Carousel>  */
//     );
// };
// export default HomeSlider;