import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';
import { Link } from 'react-router-dom';
import "./ProductInfo.css"
import Info from '../JSON/Menu.json'
import LargeInformationContainer from '../Components/LargeInformationContainer';
import NavigationBar from '../Components/NavigationBar';
import FooterComponent from "../Components/FooterComponent"

let cld = new Cloudinary({
  cloud: {
    cloudName: "dzifbqu3y"
  }
});

export default function FoodInfoPage() {

  const [ChangeTraker, TrakerUpdate] = useState(1);
  function ChangeOfTrakerState(){
    if (ChangeTraker===1){ TrakerUpdate(0)}
    else{ TrakerUpdate(1) }
  }

  function SearcherItemByIndex(index){
    return Info.menu.find(item => item.id === MyElement.relatedProducts[index].id)
  }

  const {productId} = useParams();
  let MyElement = Info.menu.find(item => item.id === Number(productId));
  return (
    <div className='FoodPage'>
      <NavigationBar/>
      <LargeInformationContainer image={cld.image("leaf/"+MyElement.ImageName)} title={MyElement.name} mainText={MyElement.Information} btn="none"/>
      <button onClick={ChangeOfTrakerState} className='MoreInfo'> 
        <p>Додаткова інформація про продукт</p>
        <div className={ChangeTraker === 0 ? 'arrow' : 'arrow_reverse'}></div>
      </button>
      <div className={ChangeTraker === 0 ? 'none' : "MoreProductInformation"}>
        <span>Lorem ipsum dolor o kurva bobre de zabor.Lorem ipsum dolor o kurva bobre de zabor.Lorem ipsum dolor o kurva bobre de zabor.Lorem ipsum dolor o kurva bobre de zabor.Lorem ipsum dolor o kurva bobre de zabor.Lorem ipsum dolor o kurva bobre de zabor.Lorem ipsum dolor o kurva bobre de zabor.Lorem ipsum dolor o kurva bobre de zabor.Lorem ipsum dolor o kurva bobre de zabor.Lorem ipsum dolor o kurva bobre de zabor.Lorem ipsum dolor o kurva bobre de zabor.Lorem ipsum dolor o kurva bobre de zabor.Lorem ipsum dolor o kurva bobre de zabor.Lorem ipsum dolor o kurva bobre de zabor.Lorem ipsum dolor o kurva bobre de zabor.Lorem ipsum dolor o kurva bobre de zabor.Lorem ipsum dolor o kurva bobre de zabor.Lorem ipsum dolor o kurva bobre de zabor.Lorem ipsum dolor o kurva bobre de zabor.Lorem ipsum dolor o kurva bobre de zabor.Lorem ipsum dolor o kurva bobre de zabor.Lorem ipsum dolor o kurva bobre de zabor.Lorem ipsum dolor o kurva bobre de zabor.Lorem ipsum dolor o kurva bobre de zabor.Lorem ipsum dolor o kurva bobre de zabor.</span>
      </div>
      <p>Страви які часто замовляють разом з цією</p>
      <div className='LittleContainer'>
        <LittleInfo item={SearcherItemByIndex(0)}/>
        <LittleInfo item={SearcherItemByIndex(1)}/>
        <LittleInfo item={SearcherItemByIndex(2)}/>
      </div>
      <FooterComponent/>
    </div>
  )
}
function LittleInfo(props){
  return(
    <Link to={`../Leaf/menu/product/${props.item.id}`} className='LittleBox'>
      <AdvancedImage name="image" cldImg={cld.image("leaf/"+props.item.ImageName)}/>
      <p className='LittleTitle'>{props.item.name}</p>
    </Link>
  )
}