import React from 'react';
import './Options.css';
import Icon1 from '../../img/icons/option-1.png';
import Icon2 from '../../img/icons/option-2.png';
import Icon3 from '../../img/icons/option-3.png';
import Icon4 from '../../img/icons/option-4.png';
import Icon5 from '../../img/icons/option-5.png';
import Icon6 from '../../img/icons/option-6.png';


function Options() {
  return (
    <div className="option container">
      <h1 className="option__title">Как мы работаем?</h1>
      <div className="option__cards">
        <div className="option__card">
          <img src={Icon1} alt="icon-1" className="option__card-icon"/>
          <h3 className="option__card-title">Создайте свое меню</h3>
          <p className="option__card-text">Создайте свое меню прямо на нашей платформе. Обновляйте в любое время. Легко и просто.</p>
        </div>

        <div className="option__card">
          <img src={Icon2} alt="icon-2" className="option__card-icon"/>
          <h3 className="option__card-title">Заказ через чат</h3>
          <p className="option__card-text">Вы получите заказ на свой WhatsApp. Продолжить чат и оформить заказ</p>
        </div>

        <div className="option__card">
          <img src={Icon3} alt="icon-3" className="option__card-icon"/>
          <h3 className="option__card-title">Способы оплаты</h3>
          <p className="option__card-text">Принимайте оплату наличными при доставке или получайте оплату напрямую через платежную ссылку. Доступно более 20 способов оплаты.</p>
        </div>

        <div className="option__card">
          <img src={Icon4} alt="icon-4" className="option__card-icon"/>
          <h3 className="option__card-title">Быстрый старт к заказу</h3>
          <p className="option__card-text">Просто создайте свое меню, и следующее, что вы узнаете, - это получать заказы на свой телефон через WhatsApp.</p>
        </div>

        <div className="option__card">
          <img src={Icon5} alt="icon-5" className="option__card-icon"/>
          <h3 className="option__card-title">Аналитика просмотров и заказов</h3>
          <p className="option__card-text">Получайте подробный отчет о ваших заказах и доходах. Следите за развитием своего бизнеса вместе с нами.</p>
        </div>

        <div className="option__card">
          <img src={Icon6} alt="icon-6" className="option__card-icon"/>
          <h3 className="option__card-title">Знай своих клиентов</h3>
          <p className="option__card-text">Вы создаете прямую связь со своими клиентами. Постоянный покупатель, будет знать, где вас найти в следующий раз.</p>
        </div>
      </div>
    </div>
  )
}

export default Options
