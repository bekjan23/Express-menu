import React from 'react';
import { NavLink } from 'react-router-dom';
import Russia from '../../img/icons/russia.png';
import USA from '../../img/icons/usa.png';
import './Navigation.css';

function Navigation() {
  // let hamburger = document.querySelector(".hamburger");
  // // On click
  // hamburger.addEventListener("click", function() {
  //   // Toggle class "is-active"
  //   hamburger.classList.toggle("is-active");
  //   // Do something else, like open/close menu
  // });

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
      {/* <div className="burger">
        <button class="hamburger hamburger--elastic" type="button" aria-label="Menu" aria-controls="navigation">
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
        <nav id="navigation"></nav>
      </div> */}
    </div>
  )
};


export default Navigation
