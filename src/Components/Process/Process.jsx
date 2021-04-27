import React from 'react';
import './Process.css';
import QrCode from '../../img/qr-code.png';


function Process() {
  return (
    <div className="process container">
      <h2 className="process__title">Пройдите процесс заказа</h2>
      <p className="process__text">Отсканируйте QR-код, чтобы открыть меню на вашем телефоне. Вам не нужно приложение. Сделайте заказ и отправьте его на наш WhatsApp. Не переживайте, мы не будем доставлять вам заказ ':)'</p>
      <img src={QrCode} alt="QrCode" className="process__img"/>
      <button className="btn process__btn">Протестировать</button>
    </div>
  )
}

export default Process
