import React from "react";
import "./SmallInformationContainer.css"
import { AdvancedImage } from '@cloudinary/react'

export default function SmallInformationContainer(props){
    return(
        <div className="LittleInfo">
            <div className="ImgContainer"><AdvancedImage cldImg={props.image} alt="Downloading error"/></div>
            <p className="LittleBoxTitle">{props.title}</p>
            <p className="LittleBoxMainText">{props.mainText}</p>
            <button className="MoreInfoBtn_LittleInfo"><a href="/#">Детальніше</a></button>
        </div>
    )
}