import React from 'react'
import { Link } from 'react-router-dom'
import { Cloudinary } from '@cloudinary/url-gen'
import { AdvancedImage } from '@cloudinary/react'
import "./FooterComponent.css"

export default function Footer(){
  
  let cld = new Cloudinary({
    cloud: {
      cloudName: "dzifbqu3y"
    }
  });

  return (
    <footer>
      <div className = "AddictionalInformationLinks">
          <div>
              <p>Leaf в Україні</p>
              <a href='/#'>Leaf в Україні</a>
              <a href='/#'>Зворотний зв'язок</a>
              <a href='/#'>Знайти нас</a>
          </div>
          <div>
              <p>Кар'єра</p>
              <a href='/#'>Кар'єра</a>
              <a href='/#'>Запитання та відповіді</a>
              <a href='/#'>Зарплатний калькулятор</a>
          </div>
          <div>
              <p>Стратегія впливу</p>
              <a href='/#'>Стратегія впливу</a>
              <a href='/#'>Бережемо планету</a>
              <a href='/#'>Робочі місця</a>
          </div>
          <div>
              <p>Якість та гігієна</p>
              <a href='/#'>Якість та гігієна</a>
              <a href='/#'>Гігієна в ресторанах</a>
              <a href='/#'>Якість продукції</a>
          </div>
      </div>
      <div className = "MediaLinks">
        <Link to='/#'><AdvancedImage cldImg={cld.image('leaf/YouTubeLogo')} alt = "YouTube"/></Link>
        <Link to='/#'><AdvancedImage cldImg={cld.image('leaf/facebook')} alt = "Facebook"/></Link>
        <Link to='/#'><AdvancedImage cldImg={cld.image('leaf/instagram')} alt = "Instagram"/></Link>
        <Link to='/#'><AdvancedImage cldImg={cld.image('leaf/tiktok')} alt = "TikTok"/></Link>
        <Link to='/#'><AdvancedImage cldImg={cld.image('leaf/x')} alt = "X"/></Link>
      </div>
      <div className = "BlackLine"/>
      <div className="Rules">
        <div>
          <a href='/#'>Політика конфіденційності</a>
          <a href='/#'>Положення та умови</a>
        </div>
        <div>
          <AdvancedImage className="ImageInsideRules" cldImg={cld.image('leaf/LeafLogo')} alt="out Logo"/>
          <span>Усі права захищені ©2023 Leaf®</span>
        </div>
      </div>
    </footer>
  )
}
