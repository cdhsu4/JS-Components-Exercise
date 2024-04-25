import React from "react"
import './Testimonials.css'

/*Icon Source => https://react-icons.github.io/react-icons/search/#q=quote
https://react-icons.github.io/react-icons/search/#q=house*/

import { RiDoubleQuotesL } from "react-icons/ri";
import { FaHouseFlag } from "react-icons/fa6";


export default function Testimonials( {colorScheme, children} ) {

    return (
        <div className={`testimonial-container ${colorScheme}`}>
            <div className="image-container">
                <img src="./src/images/image.jpg" className="image"/>
            </div>
            <div className="testimonial-content">
                <RiDoubleQuotesL className="RiDoubleQuotesL"/>
                <FaHouseFlag className="FaHouseFlag"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. </p>
                <p>Mary Anderson</p>
                <p>Workcation, CTO</p>
            </div>
        </div>
    )
}