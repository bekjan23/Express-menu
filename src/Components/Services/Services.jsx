import React from 'react';
import './Services.css';
import ImgPhone from '../../img/Service-img.jpg';


function Services() {
  return (
    <div className="service container">
      <div className="service-block">
        <div className="service__info">
          <h2 className="service__title">Для клиентов, заказывающих</h2>
          <p className="service__text">Клиент может найти ссылку на меню ресторана в социальных сетях, из уст в уста друзей или при сканировании QR-кода. Сделав заказ в онлайн-меню, они могут отправить заказ прямо в WhatsApp ресторана.</p>
        </div>
        <div className="service__info">
          <h2 className="service__title">Владельцам ресторанов</h2>
          <p className="service__text">Процесс начинается, когда они слышат звук нового сообщения в своем WhatsApp. Они или обученный бот могут задать вопросы для уточнения деталей для заказа и адреса доставки. Ресторан также может сообщить, сколько времени займет доставка заказа.</p>
        </div>
      </div>
      <div className="service-block">
        <img src={ImgPhone} alt="ImgPhone" className="service__img"/>
      </div>
    </div>
  )
}

export default Services
