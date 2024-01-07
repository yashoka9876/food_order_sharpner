import React from 'react'
import classes from './Header.module.css'
import mealsImage from '../../assets/meals.jpg'

const Header = () => {
  return (
    <>
    <header className={classes.header}>
      <h1>ReactMeals</h1>
      <button>Cart</button>
    </header>
    <div className={classes['main-image']}>
      <img src={mealsImage} alt='A table of delicious food!' />
    </div>
    <div className={classes.description}>
      <h1>Delicious Food, Delivered To you</h1>
      <p> Choose your favourite from our broad selection of available meals and enjoy a delicious lunch of dinner at home. </p>
      <p>All our meals are cooked with high-quality ingredients,just-in-time and of couse by experienced chefs!</p>
    </div>
    </>
  )
}

export default Header;