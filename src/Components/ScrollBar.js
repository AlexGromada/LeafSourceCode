import React , {useEffect, useState}from 'react'
import "./ScrollBar.css"
import { Cloudinary } from '@cloudinary/url-gen'
import { AdvancedImage } from '@cloudinary/react'
import JSON from "../JSON/ScrollInfo.json"

export default function ScrollBar() {

  let cld = new Cloudinary({
    cloud: {
      cloudName: "dzifbqu3y"
    }
  });

  let [Index, ChangeIndex] = useState(0);  
  useEffect(() => {
    const timer = setInterval(() => {
      ChangeIndex(Index => (Index===JSON.titles.length-1 ? 0 : Index+1))
    }, 15*1000);
    
    return () => clearInterval(timer);
  });
  
  const ScrollBack = () => {
    ChangeIndex(Index => (Index === 0 ? Index = 2 : Index-=1))
  }

  const ScrollForward = () => {
    ChangeIndex(Index => (Index===JSON.titles.length-1 ? 0 : Index+1))
  }

  let ScrollImage = cld.image(JSON.Image[Index].Content)
  let ScrollText = JSON.mainText[Index].Content
  let ScrollTitle = JSON.titles[Index].Content

  return (
      <div className='ScrollInfo'>
        <AdvancedImage className="ScrollBackground" cldImg={ScrollImage}/>
        <div className='TextInsideScroll'>
          <div>
            <p className='ScrollTitle'>{ScrollTitle}</p>
            <p className='ScrollMainText'>{ScrollText}</p>
          </div>
          <div className='Scroll_and_MoreInfoBtn'>
            <button onClick={ScrollBack} className='ScrollBack' />
            <button className='MoreInfoBtn_ScrollInfo'>
              <a href='/#'>Детальніше</a>
            </button>
            <button onClick={ScrollForward} className='ScrollForward'/>
          </div>
        </div>
      </div>
  )
}