import React from "react"
import './Badges.css'

export default function Badges( {shape, colorScheme, children} ) {

    return (
        <div>
            <p className={`badge-container-${shape} ${colorScheme}`}>{children}</p>
        </div>
    )
}