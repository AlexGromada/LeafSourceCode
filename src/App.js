import React from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import './App.css';
import NavigationBar from "./Components/NavigationBar"
import ScrollBar from "./Components/ScrollBar"
import InformationContainer from './Components/InformationContainer';
import LargeInformationContainer from './Components/LargeInformationContainer';
import FooterComponent from './Components/FooterComponent';
import SmallInformationContainer from './Components/SmallInformationContainer';

function App() {

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dzifbqu3y'
    }
  });
  
  return (
    <div>
      <NavigationBar/>
      <main>
        <ScrollBar/>
        <div>
          <InformationContainer image = {cld.image("leaf/warning")} title = "Правила безпеки" mainText = "Шановні гості, під час повітряної тривоги або за відсутності електроенергії заклад не працюватиме. Після завершення тривоги чи відновлення постачання електроенергії нам потрібний час, аби відкрити заклади."/>
          <InformationContainer image = {cld.image("leaf/whiteBackgroundSalad")} title = "Завітати чи замовити?" mainText = "Велика кількість наших клієнтів надає перевагу відвідуванню , але через війну не всі ресторани Leaf працюють у даний момент. Ви можете дізнатись які заклади відчинені у вашому місті та де вони знаходяться , а також перевірити наявність функції доставки у них натиснувши на клавішу 'Детільніше'."/>
        </div>
        <LargeInformationContainer image = {cld.image("leaf/NewJuice")} title = "Соки тепер у Leaf" mainText = "Нещодавно у нашому меню відбулось важливе оновлення. Тепер ви можете замовити сік на будь який смак. Усі продукти з яких виготовляється продукція свіжа і зберігається у відповідних умовах. Між іншим просто зараз у наших ресторанах проходить голосування соки переможці якого будуть додані у меню першими. Неодмінно завітайте та голосуйте за свого фаворита!" />
        <div>
          <SmallInformationContainer image = {cld.image("leaf/workWithUs")} title = "Робота у Leaf" mainText = "Приєднуйтесь до команди Leaf. З нами ти зможеш поєднати навчання , роботу та відпочинок. " />
          <SmallInformationContainer image = {cld.image("leaf/newSalad")} title = "Нова продукція" mainText = "У цьому розділі можна переглянути список усії наших новинок." />
          <SmallInformationContainer image = {cld.image("leaf/GreenEarth")} title = "Зелена Земля" mainText = "Наш благодійний проект 'Зелена Земля' працює задля покращення екології в Україні. Зробімо світ краще разом!" />
        </div>
      </main>
      <FooterComponent/>
    </div>
  );
}

export default App;