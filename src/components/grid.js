import React from "react";
import image2 from "../assets/images/image2.webp";
import image3 from "../assets/images/image3.webp";
import image4 from "../assets/images/image4.webp";
import image1 from "../assets/images/image1.webp";
import image5 from "../assets/images/image5.webp";
import image6 from "../assets/images/image6.webp";
import image7 from "../assets/images/image7.webp";

const Grid = (props) =>{
    return <div className="grid grid-cols-5 gap-5 items-center">
        <div>
            <img src={image2} alt="" />
        </div>
        <div className="flex flex-col gap-5">
            <img src={image3} alt="" />
            <img src={image4} alt="" />
        </div>
        <div className="flex flex-col gap-5">
            <img src={image1} alt="" />
        </div>
        <div className="flex flex-col gap-5">
            <img src={image5} alt="" />
            <img src={image6} alt="" />
        </div>
        <div className="flex flex-col gap-5">
            <img src={image7} alt="" />
        </div>
    </div>
}

export default Grid;