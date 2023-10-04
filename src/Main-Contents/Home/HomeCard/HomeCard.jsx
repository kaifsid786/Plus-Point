import React from 'react'
import './HomeCard.css'
import trust from '../../../images/home-1.png'
import progression from '../../../images/progression.png'
import quality from '../../../images/quality.png'

export default function HomeCard(props) {
  return (
    <>
      <div className="main-homeCard">
         <img src={props.img} alt="" className="homeCard-img" />
         <h1 className="homeCard-title">{props.title}</h1>
         <p className="homeCard-info">{props.info}</p>
      </div>
    </>
  )
}
