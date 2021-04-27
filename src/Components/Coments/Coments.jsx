import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import './Coments.css';
import Appraisal from '../../img/icons/star.svg';
import User1 from '../../img/icons/user-1.png';
import User2 from '../../img/icons/user-2.png';


SwiperCore.use([Navigation, Pagination]);

function Coments() {

  const slides = [];
  for (let i = 0; i < 5; i += 1) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <div className="coment">
          <div className="coment__card">
            <div className="user">
              <div className="user__info">
                <img src={User1} alt="" className="user__avatar"/>
                <div className="user__title">
                  <h4 className="user__name">Эсенов Муса</h4>
                  <p className="user__subtitle">Какой-то чувак</p>
                </div>
              </div>
              <div className="user__appraisal">
                <img src={Appraisal} alt=""/>
              </div>
            </div>
            <p className="coment__card-text">Мы знали, что нам нужен такой инструмент. И мы наконец его нашли. Управляйте заказами быстрее, чем когда-либо.
Отсутствие более 30% комиссии на платформах доставки еды. Это супер дешевая платформа, которая сэкономила нам кучу денег.</p>
          </div>

          <div className="coment__card">
            <div className="user">
              <div className="user__info">
                <img src={User2} alt="" className="user__avatar"/>
                <div className="user__title">
                  <h4 className="user__name">Эсенова Муся</h4>
                  <p className="user__subtitle">Какая-то чувиха</p>
                </div>
              </div>
              <div className="user__appraisal">
                <img src={Appraisal} alt=""/>
              </div>
            </div>
            <p className="coment__card-text">Мы раньше общались с клиентами в WhatsApp, чтобы они могли сделать заказ. Это следующий уровень.Возможность платить напрямую в WhatsApp - это здорово. И, что самое главное, деньги идут прямо к нам.</p>
          </div>
        </div>
      </SwiperSlide>
    );
  }

  return (
    <React.Fragment>
      <Swiper 
        id="main"
        tag="section"
        wrapperTag="div"
        navigation
        pagination
        spaceBetween={0}
        slidesPerView={1}
        onInit={(swiper) => console.log('Swiper initialized!', swiper)}
        onSlideChange={(swiper) => {
          console.log('Slide index changed to: ', swiper.activeIndex);
        }}
        onReachEnd={() => console.log('Swiper end reached')}
      >
        {slides}
      </Swiper>
    </React.Fragment>
  );
}

export default Coments;