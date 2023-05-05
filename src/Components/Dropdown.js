import React from 'react'

const Dropdown = ({changeFoodData}) => {

    return (
        <nav>
            <h2>Menu</h2>
            <select className='menu_select' onChange={changeFoodData}>
                <option value="All">All Menu</option>
                <option value="ผัด-ทอด">Fried | ผัด-ทอด</option>
                <option value="แกง-ต้มยำ">Curry| แกง-ต้มยำ</option>
                <option value="เครื่องดื่ม">Drink | เครื่องดื่ม</option>
                <option value="สเต็ก">Steak | สเต็ก</option>
            </select>
        </nav>
    )
}

export default Dropdown