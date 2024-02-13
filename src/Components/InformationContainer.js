import React from 'react'
import "./InformationContainer.css"
import { AdvancedImage } from '@cloudinary/react'

export default function InformationContainer(props){
  return (
    <div className='InformationContainer'>
      <div className='ImageContainer'><AdvancedImage cldImg={props.image} alt='Downloading error'/></div>
      <p className='Title'>{props.title}</p>
      <p className='MainText'>{props.mainText}</p>
      <button className='AddictionalInformation'>
        <a href='/#'>Детальніше</a>
      </button>
    </div>
  )
}