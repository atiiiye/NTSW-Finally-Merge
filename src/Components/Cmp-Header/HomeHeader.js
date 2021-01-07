import React from 'react';
import '../../css/Home.css'
import m1 from '../../images/m1.png';
import logo11 from '../../images/logo11.png';
import headertitle from '../../images/headertitle.png';


// import logo from './header-title.png'
// window.onscroll = function () { myFunction() };

// var d = document.getElementById("div1");
// var topPos = d.offsetTop;


// function myFunction() {
//     if (window.pageYOffset >= topPos) {
//         topPos.classList.add("sticky")
//     } else {
//         topPos.classList.remove("sticky");
//     }
// }


const HomeHeader = () => {
    return (
        <div  className="maincontainer d-flex flex-row justify-content-center  ">
            <div className='HomeHeader    d-flex flex-row-reverse justify-content-between align-items-center'>

                <a href='http://www.ecommerce.gov.ir/'> <img className='left  pl-5' src={m1} alt='logo'></img></a>
                <img className='middle pr-5' src={headertitle} alt='logo'></img>
                <a href='https://mimt.gov.ir/'> <img className='right pr-5 mr-5' src={logo11} alt='logo'></img></a>

                {/* <img src={Logo}></img> */}
            </div>
        </div>
    );

};
export default HomeHeader;