import React from 'react'
import viteLogo from '/vite.svg'
import './App.css'

import Badges from "./components/Badges/Badges"
import Banners from "./components/Banners/Banners"
import Cards from "./components/Cards/Cards"
import Testimonials from "./components/Testimonials/Testimonials"

export default function App() {

  const colorScheme = ["white", "red", "yellow", "green", "blue", "indigo", "purple", "pink"];
  const statusArray = ["Success", "Warning", "Error", "Neutral"];

  return (
    <>
      <div className="group-pill-badge-container">
        {colorScheme.map(color => (
          <Badges shape="pill" colorScheme={color}>
            Badge
          </Badges>
        ))}
      </div>
      <div className="group-square-badge-container">
        {colorScheme.map(color => (
          <Badges shape="square" colorScheme={color}>
            Badge
          </Badges>
        ))}
      </div>
      <br/>
      <hr/>
      <br/>
      <div className="group-fulldetail-banner-container">
        {statusArray.map(status => (
          <Banners status={status}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Aliquid pariatur, ipsum similique veniam.
          </Banners>
        ))}
      </div>
      <br/>
      <hr/>
      <br/>
      <Cards>
      </Cards>
      <br/>
      <hr/>
      <br/>
      <Testimonials>
      </Testimonials>
    </>
  )
}

/*
  <div className="group-fulldetail-banner-container">
    {statusArray.map(status => (
      <Banners status={status}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Aliquid pariatur, ipsum similique veniam.
      </Banners>
    ))}
  </div>
*/