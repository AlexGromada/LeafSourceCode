import React from 'react'
import "./LargeInformationContainer.css"
import { AdvancedImage } from '@cloudinary/react'
import { Link } from 'react-router-dom'

export default function LargeInformationContainer(props){
  return (
    <div className='LargeInformationContainer'>
      <div className='LargeImagContainer'><AdvancedImage cldImg={props.image} alt='Downloading error'/></div>
      <div className='LargeTextContainer'>
        <p>{props.title}</p>
        <p>{props.mainText}</p>
        <button className={props.btn === "none" ? "none" : 'LargeContainerAddictionalInformation'}>
          <Link to={`../Leaf/menu/product/1`}>Детальніше</Link>
        </button>
      </div>
    </div>
  )
}