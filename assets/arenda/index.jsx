import React from 'react'
import {halls} from '../../data'
import HallsSlider from '../slider-halls-arenda/slider-halls.js'

const FotoHall=(imgName, props)=><div>
    <img src={`/static/img/${imgName}`} alt={imgName} style={{height: '75vh', objectFit: 'cover'}}/>
    <div>{props.description}</div>
</div>

const Hall=(props)=> <div className="even-section-dance-page">
    <h2 className="title-arenda-page_text_dark title_center" id={props.id}>{props.title}</h2>
    <div>
        <HallsSlider>
            {props.imgs.map(img=>FotoHall(img, props.description ))}            
        </HallsSlider>        
    </div>
    <div className="hall-additionally">
        <div className="additionally">{props.equipments}</div>
        <div className="additionally">{props.addServices}</div>
    </div>
</div>



class ArendaPage extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        const props = this.props
        return <div>
            <section className= {`title-section-arenda-page arenda-title-img`}>
            <div className="_align-row">
                <h1 className="title-arenda-page_text">Аренда залов</h1>
                <div className="odd-section__text _align-column">
                    <p>Танцевальный клуб «Чердак» предлагает в аренду залы  для проведения различных мероприятий — психологических и бизнес тренингов, семинаров, презентаций, организационных собраний, art-мастерских, творческих показов, детских праздников и других форматов. Также приглашаем к сотрудничеству йога-студии, центры саморазвития и дошкольные учреждения. Клуб «Чердак» предлагает в аренду три зала различной площади со всем необходимым оборудованием. Также мы предлагаем дополнительные услуги.</p>
                    <h2 className="title-arenda-page_text_dark">Стоимость и условия аренды</h2>
                    <p>В случае единовременной аренды (один раз на один час, 08:00 — 17:00) составляет:</p>
                    <ul>
                        <li>Большой зал — 700 ₽</li>
                        <li>Мансарда — 500 ₽</li>
                        <li>Пилонный зал — 350 ₽</li>
                    </ul>
                    <p>В стоимость аренды также входит использование общих зон:</p>
                    <ul>
                        <li>Ресепшн</li>
                        <li>Гардеробные</li>
                        <li>Туалетные комнаты</li>
                        <li>Душ</li>
                    </ul>
                    <div className={`button-menu button-menu_location-${props.id}-page`}>
                        <a href={`/about/arenda/#price`} className= {`button-${props.id}-page  _typography-button`}>Стоимость и условия</a>
                        <a href={`/about/arenda/#bighall`} className= {`button-${props.id}-page _typography-button`}>Большой зал</a>
                        <a href={`/about/arenda/#loft`} className= {`button-${props.id}-page _typography-button`}>Мансарда</a>
                        <a href={`/about/arenda/#poledancehall`} className= {`button-${props.id}-page _typography-button`}>Пилонный зал</a>
                        <a href={`/about/arenda/#map`} className= {`button-${props.id}-page _typography-button`}>Расположение</a>
                    </div>
                </div>
            </div>
        </section>
        {Object.values(halls).map(hall=> <Hall id={hall.id} title={hall.title} imgs={hall.imgs} description={hall.description} equipments={hall.equipments} addServices={hall.addServices} />)}
        </div>
    }
}

export default ()=><ArendaPage />