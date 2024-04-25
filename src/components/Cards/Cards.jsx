import React from "react"
import './Cards.css'
import { SlCloudUpload } from "react-icons/sl";
//Icon Source => https://react-icons.github.io/react-icons/search/#q=upload
//import { SlCloudUpload } from "react-icons/sl";


export default function Cards( {colorScheme, children} ) {

    return (
        <div className={`card-container ${colorScheme}`}>
            <SlCloudUpload className="SlCloudUpload"/>
            <h1>Easy Deployment</h1>
            <p>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
        </div>
    )
}