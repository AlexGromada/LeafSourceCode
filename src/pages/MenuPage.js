import React, { useState } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { Link} from "react-router-dom";
import menuItems from "../JSON/Menu.json"
import "./MenuPage.css"
import NavigationBar from "../Components/NavigationBar";
import FooterComponent from "../Components/FooterComponent"

export default function FoodMenu() {

  
  const [category, setCategory] = useState('');
  let currentMenuItems = menuItems.menu;
  if (category) {
    currentMenuItems = menuItems.menu.filter(item =>
      item?.categories?.includes(category)
      )
    }
    
    return (
    <div className="MenuPage">
      <NavigationBar/>
      <div className="FoodMenu">
        <CategoryMenu category={category} setCategory={setCategory} />
        <div className="CurentMenu">
          {currentMenuItems.map(item =>
            <MenuItem key={item.id} item={item} />
            )}
        </div>
      </div>
      <FooterComponent/>
    </div>
  )
}

const cld = new Cloudinary({
  cloud: {
    cloudName: 'dzifbqu3y'
  }
});

function CategoryMenu({ category , setCategory }) {
    return (
      <div  className="CategoryMenu">
        <button className={category==='' ? "ChosenBtnBorder" : "NotChosenBtnBorder"} onClick={() => setCategory('')}>
          Full Menu
        </button>
        <button className={category==='Lunch' ? "ChosenBtnBorder" : "NotChosenBtnBorder"} onClick={() => setCategory('Lunch')}>
          Lunch
        </button>
        <button className={category==='juice' ? "ChosenBtnBorder" : "NotChosenBtnBorder"} onClick={() => setCategory('juice')}>  
          Juice
        </button>
        <button className={category==='onigiri' ? "ChosenBtnBorder" : "NotChosenBtnBorder"} onClick={() => setCategory('onigiri')}>
          Onigiri
        </button>
        <button className={category==='salad' ? "ChosenBtnBorder" : "NotChosenBtnBorder"} onClick={() => setCategory('salad')}>
          Salad
        </button>
        <button className={category==='vegeterian' ? "ChosenBtnBorder" : "NotChosenBtnBorder"} onClick={() => setCategory('vegetarian')}>
          Vegeterian
        </button>
      </div>
    )
  }

  function MenuItem({ item }) {
    return(
      <Link id={item.id} to={`product/${item.id}`} className="MenuItem">
        <AdvancedImage cldImg={cld.image("leaf/"+item.ImageName)} alt="Downloading error"/>
        <h3>{item.name}</h3>
      </Link>
    ) 
  }