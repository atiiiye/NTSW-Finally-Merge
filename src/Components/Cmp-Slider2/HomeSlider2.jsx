import React from "react";
import AliceCarousel from 'react-alice-carousel';
import  Screenshot  from "./../../images/Screenshot.png";
import 'react-alice-carousel/lib/alice-carousel.css';
import '../../css/Home.css';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};
const items = [
    <img src={Screenshot} className="yours-custom-class" />,
    <img src={Screenshot} className="yours-custom-class" />,
    <img src={Screenshot} className="yours-custom-class" />,
    <img src={Screenshot} className="yours-custom-class" />,
    <img src={Screenshot} className="yours-custom-class" />,
    <img src={Screenshot} className="yours-custom-class" />,
    <img src={Screenshot} className="yours-custom-class" />,
    <img src={Screenshot} className="yours-custom-class" />,
];




const HomeSlider2 = () => {



    return (

        <div className="maincontainer ">
            <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
            />



        </div>
    )
}
    export default HomeSlider2;
