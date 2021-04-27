import React from 'react';
import './Order.css';
import Price1 from '../../img/price-1.png';
import Price2 from '../../img/price-2.png';

function Order() {
  return (
    <div className="order container">
      <h2 className="order__title">Стоимость заказа </h2>
      <p className="order__text">14-дневная гарантия возврата денег. Без риска, вы можете отменить в любое время</p>
      <div className="order__cards">
        <div className="order__card card-1">
          <h2 className="order__card-name">Lite</h2>
          <h3 className="order__card-title">Используйте его бесплатно и обновляйте по мере роста</h3>
          <img src={Price1} alt="Price1"/>
          <ul>
            <li className="order__card-func">Полный доступ к инструменту создания меню</li>
            <li className="order__card-func">Неограниченное количество просмотров</li>
            <li className="order__card-func">30 позиций в меню</li>
            <li className="order__card-func">Поддержка сообщества</li>
          </ul>
          <button className="order__card-1-btn btn">Начать с Lite</button>
        </div>
        <div className="order__card card-2">
          <h2 className="order__card-name order__card-name-pro">Pro</h2>
          <h3 className="order__card-title">Для растущего бизнеса, которому нужно больше</h3>
          <img src={Price2} alt="Price2"/>
          <ul>
            <li className="order__card-func">Полный доступ к инструменту создания меню</li>
            <li className="order__card-func">Неограниченное количество просмотров</li>
            <li className="order__card-func">Неограниченные заказы</li>
            <li className="order__card-func">Поддержка по электронной почте</li>
          </ul>
          <button className="order__card-2-btn btn">Начать с Pro</button>
        </div>
      </div>
    </div>
  )
}

export default Order
