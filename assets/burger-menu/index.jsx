import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import './burger.css'

class BurgerMenu extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <Menu left>
        <a href="/"><img className="header__logo" src="/static/img/logo-w-t.svg" alt="logo"/></a>
        <a id="events" className="nav__item typo-nav" href="/events">События</a>
        <a id="dance" className="nav__item typo-nav" href="/dance">Направления</a>
        <a id="schedule" className="nav__item typo-nav" href="/schedule">Расписание</a>
        <a id="price" className="nav__item typo-nav" href="/price">Цены</a>
        <a id="teacher" className="nav__item typo-nav" href="/teacher">Преподаватели</a>
        <a id="arenda" className="nav__item typo-nav" href="/about/arenda">Аренда залов</a>
        <a id="about" className="nav__item typo-nav" href="/about">О клубе</a>
        <div className="social-nets"> 
          <a className="social-nets__icon" href="https://vk.com/tk_cherdak" title="#Хастл#Танго#Сальса - Клуб «ЧЕРДАК» Красноярск">
            <i className="fab fa-vk"></i>
          </a>
          <a className="social-nets__icon" href="https://www.facebook.com/clubcherdak/" title="Cherdak Dance Club / Танцевальный клуб 'Чердак'">
          <i className="fab fa-facebook-square"></i>
          </a>
          <a className="social-nets__icon" href="https://www.instagram.com/clubcherdak/" title="@clubcherdak">
            <i className="fab fa-instagram"></i>
          </a>  
          <a className="social-nets__icon" href="https://www.youtube.com/user/clubcherdak" title="Клуб Чердак">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
        <div className="contact">
          <p className="department typo-nav__contact">
            <span>Красноярск | Авиаторов</span> 
            <i className="fas fa-angle-down department-choose"></i>
          </p>
          <p className="adress">
            <a className="typo-nav__contact" href="about/#map" title="Схема проезда">
              <i className="fas fa-map-marker-alt special-sign_padding-right"></i>
              <span> ул. Авиаторов, 23а</span>
            </a>
          </p> 
          <p className="phone">
            <a className="typo-nav__contact" href="tel: +79631912277" title="Позвоните нам!"> 
              <i className="fas fa-phone special-sign_padding-right"></i>
              <span> 271-22-77</span>
            </a>
          </p> 
        </div>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
    );
  }
}

export default ()=><BurgerMenu />