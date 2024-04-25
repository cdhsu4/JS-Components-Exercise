import React from "react"
import './Banners.css'

/*Icon Source => https://react-icons.github.io/react-icons/search/#q=exclamation
https://react-icons.github.io/react-icons/search/#q=check%20circle
https://react-icons.github.io/react-icons/search/#q=x%20mark
https://react-icons.github.io/react-icons/search/#q=information*/

import { BsExclamationTriangleFill } from "react-icons/bs";
import { GoCheckCircleFill } from "react-icons/go";
import { FaCircleXmark } from "react-icons/fa6";
import { HiInformationCircle } from "react-icons/hi";

/*              
<BsExclamationTriangleFill className='BsExclamationTriangleFill' />
<GoCheckCircleFill className='GoCheckCircleFill' />
<FaCircleXmark className='FaCircleXmark' />
<HiInformationCircle className='HiInformationCircle' />
*/

export default function Banners( {status, children} ) {

    let color = "";
    if (status === "Warning") {
        color = "yellow";
    } else if (status === "Neutral") {
        color = "blue"
    } else if (status === "Error") {
        color = "red"
    } else if (status === "Success") {
        color = "green"
    }

    /*let icon;
    if (status === "Warning") {
        icon = `${<BsExclamationTriangleFill className='BsExclamationTriangleFill' />}`
    } else if (status === "Neutral") {
        icon = "<ControllerHiInformationCircle className='HiInformationCircle' />"
    } else if (status === "Error") {
        icon = "<GoCheckCircleFill className='GoCheckCircleFill' />"
    } else if (status === "Success") {
        icon = "<FaCircleXmark className='FaCircleXmark' />"
    }*/

    return (
        <div className={`banner-container ${color}`}>
            <div className="icon-info">
            {status === "Warning" ? <BsExclamationTriangleFill className='BsExclamationTriangleFill' /> :
                    (status === "Neutral" ? <HiInformationCircle className='HiInformationCircle' /> :
                        (status === "Error" ? <FaCircleXmark className='FaCircleXmark' /> : <GoCheckCircleFill className='GoCheckCircleFill' />
                        )
                    )
                }
            </div>
            <div className="text-info">
                <h1>{status}</h1>
                <p>{children}</p>
            </div>
        </div>
    )
}

/*
{status === "Neutral" && <HiInformationCircle className='HiInformationCircle' />}
{status === "Success" && <GoCheckCircleFill className='GoCheckCircleFill' />}
{status === "Error" && <FaCircleXmark className='FaCircleXmark' />}
{status === "Warning" && <BsExclamationTriangleFill className='BsExclamationTriangleFill' />}


               {status === "Warning" ? <BsExclamationTriangleFill className='BsExclamationTriangleFill' /> :
                    (status === "Neutral" ? <HiInformationCircle className='HiInformationCircle' /> :
                        (status === "Error" ? <FaCircleXmark className='FaCircleXmark' /> : <BsExclamationTriangleFill className='BsExclamationTriangleFill' />
                        )
                    )
                }
                */