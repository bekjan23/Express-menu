import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="header__content container">
        <h1 className="header__title">Используйте WhatsApp как платформу для приема заказов</h1>
        <p className="header__text">Создайте цифровое меню для своего ресторана или бара. Поделитесь со своими клиентами и позвольте им делать заказы через мобильный телефон</p>
        <form action="" className="form header__form">
          <input type="text" name="name" className="input header__input" placeholder="Название ресторана"/>
          <input type="email" name="email" className="input header__input" placeholder="Почта"/>
          <input type="password" name="password" className="input header__input" placeholder="Пароль"/>
        </form>
        <button className="btn header__btn">Заказать</button>
      </div>
    </div>
  )
}

export default Header

