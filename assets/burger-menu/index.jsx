import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import './burger.css'

const x = function(state) {
    console.log(state)
    const b = document.body
    if (state.isOpen) {
        b.className += " noscroll"
    } else {
        b.className = b.className.replace(" noscroll", "")

    }
    return state.isOpen;
};

class BurgerMenu extends React.Component {
    showSettings (event) {
        event.preventDefault();
    }

    render () {
        return (
        <Menu left onStateChange={ x }>
            <div className="icons-in-burger"><a href="/" className="logo header__logo"></a></div>
            <a id="events" className="nav__item typo-nav" href="/events">События</a>
            <a id="dance" className="nav__item typo-nav" href="/dance">Направления</a>
            <a id="schedule" className="nav__item typo-nav" href="/schedule">Расписание</a>
            <a id="price" className="nav__item typo-nav" href="/price">Цены</a>
            <a id="teacher" className="nav__item typo-nav" href="/teacher">Преподаватели</a>
            <a id="arenda" className="nav__item typo-nav" href="/about/arenda">Аренда залов</a>
            <a id="about" className="nav__item typo-nav" href="/about">О клубе</a>
            <div className="icons-in-burger">
                <div className="social-nets"> 
                    <a className="social-nets__icon vk" href="https://vk.com/tk_cherdak" title="#Хастл#Танго#Сальса - Клуб «ЧЕРДАК» Красноярск"></a>
                    <a className="social-nets__icon fb" href="https://www.facebook.com/clubcherdak/" title="Cherdak Dance Club / Танцевальный клуб 'Чердак'"></a>
                    <a className="social-nets__icon insta" href="https://www.instagram.com/clubcherdak/" title="@clubcherdak"></a>  
                    <a className="social-nets__icon youtube" href="https://www.youtube.com/user/clubcherdak" title="Клуб Чердак"></a>
                </div>
            </div>
            <div>
                <div className="contact">
                    <p className="department typo-nav__contact">Красноярск | Авиаторов</p>
                    <a className="contact-container">
                        <div className="adress-icon" href="about/#map" title="Схема проезда"></div>
                        <span className="typo-nav__contact"> ул. Авиаторов, 23а</span>
                    </a> 
                    <a className="contact-container">
                        <div className="phone-icon" href="tel: +79631912277" title="Позвоните нам!"></div>
                        <span className="typo-nav__contact"> 271-22-77</span>
                    </a> 
                </div>
            </div>
        </Menu>
        );
    }
}

export default ()=><BurgerMenu />