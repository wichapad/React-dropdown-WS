import React from 'react'

const FoodMenu = ({ foodName, image_url }) => {
  return (
    <div className='food_container'>
      <h2>{foodName}</h2>
      <img src={image_url} alt={foodName} />
    </div>
  )
}

export default FoodMenu