import React from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';
import Russia from '../../img/icons/russia.png';
import USA from '../../img/icons/usa.png';



function Navigation() {
  return (
    <div className="navigation container">
      <div className="logo">Express<span className="logo-green">Menu</span></div>
      <nav className="nav">
        <NavLink exact to="/" className="nav__link">Главная</NavLink>
        <NavLink to="/" className="nav__link">Услуги</NavLink>
        <NavLink to="/" className="nav__link">Продукты</NavLink>
        <NavLink to="/" className="nav__link">Цены</NavLink>
        <NavLink to="/" className="nav__link">Демо</NavLink>
      </nav>
      {/* <input type="ru-En" className="ru-en"/> */}
      <div className="btn-flex">
        <select name="ru-en" id="ru-en">
          <option value="Ru" selected><img src={Russia} alt="Russia"/></option>
          <option value="En"><img src={USA} alt="USA"/></option>
        </select>
        <button className="navigation__btn btn">Панель управления</button>
      </div>
    </div>
  )
};


export default Navigation
