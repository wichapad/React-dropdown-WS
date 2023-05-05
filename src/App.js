import { useState } from 'react';
import './App.css';
import Dropdown from './Components/Dropdown';
import FoodMenu from './Components/FoodMenu';
import MenuData from './MenuData';

function App() {
  const [foods, setFoods] = useState(MenuData)// state เก็บข้อมูลใน Menudata

  const changeFoodData = (e) => { //เปลี่ยนแปลงเมนู
    const categories = e.target.value
    if (categories === "All") { // ถ้า categories เท่ากับ All
      setFoods(MenuData) //กำหนดค่า state Foods ตาม MenuData
    } else{
      const result = MenuData.filter((element) => { // เข้าไปใน array Menudata และไปดึงสมาชิกแต่ละตัวออกมาทำการกรองว่าเข้าเงื่อนไขที่กำหนดกับ categories ไหม
        return element.menu === categories // เปรียบเทียบ ชื่อเมนู จาก filter menu ใน MenuData มีค่าเท่ากับ categories ไหม
      })
  
      setFoods(result) //นำค่า ใน state foods มาอ้างอิงตาม result เพื่อโชว์ ข้อมูล ตาม filter menu
    }
  }

  return (
    <div className="container">
      <Dropdown changeFoodData={changeFoodData} />
      <div className='menu_container'>
        {foods.map((data, index) => {
          return <FoodMenu key={index} {...data} />
        })}
      </div>
    </div>
  );
}

export default App;
