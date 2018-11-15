import React from 'react'
import {halls} from '../../data'
import HallsSlider from '../slider-halls-arenda/slider-halls.js'
import {H1, H2} from '../typography/titles/index.jsx'

const SlideHall=(imgName, props)=><div>
    <img src={`/static/img/${imgName}`} alt={imgName} style={{height: '65vh', objectFit: 'cover'}}/>
</div>

const DanceHall=(props)=><div>
    <section className="main-section-white-background"  id={props.id}>
        <H2 color="grey" OpenSansRegular>{props.title}</H2>
        <div>
            <HallsSlider>
                {props.imgs.map(img=>SlideHall(img))}
            </HallsSlider>
        </div>
        <div className="arenda-title-txt-row">
            <div className="typo-arenda-text arenda-text-column">{props.description}</div>
            <div className="typo-arenda-text arenda-text-column">{props.equipments}</div>
        </div>
    </section>
    <div className="section-photo-background arenda-title-img"></div>
</div>

const OtherHallsSlide=(props)=><div className="slide-hall">
    <img src={`/static/img/${props.img}`} alt={props.img} className="carusel-halls-img"/>
</div>

const OtherHalls=(props)=><section className="main-section-white-background"  id="otherhalls">
    <H2 color="grey" OpenSansRegular>Ресепшн | Гардеробные | Туалетные комнаты | Душ</H2>
        <div>
            <HallsSlider>
                {Object.values(halls).filter(hall=> hall.type=="otherhall").map(hall=><OtherHallsSlide img={hall.imgs[0]} title={hall.title} department={hall.department}/>)}
            </HallsSlider>
        </div>
</section>
const ArendaCost=(props)=><div>
    <div className="typo-subtitle-price white-opacity">площадь</div>
    <div className="typo-cost white-opacity">{props.area}</div>

    <div className="title-subscription-container">
        <div className="typo-title-price white">{props.title}</div>
    </div>
    <div className="typo-cost white-opacity">{props.cost}<span className="ruble">₽</span></div>
</div>

const ArendaTitle=(props)=><section className="first-section-container arenda-title-img">
    <h1 className="typo-slogan">Аренда залов в клубе Чердак</h1>
    <div className="small-margin">
        <p className="typo-arenda-text white title_width2">Танцевальный клуб «Чердак» предлагает в аренду три зала для проведения мероприятий — психологических и бизнес тренингов, семинаров, презентаций, организационных собраний, art-мастерских, творческих показов, детских праздников и других форматов.</p>
        {/* <p className= "typo-arenda-text white title_width2 small-margin">Приглашаем к сотрудничеству йога-студии, центры саморазвития и дошкольные учреждения</p> */}
    </div>
    <div className="small-margin">
        <H2 color="white" OpenSansRegular>Стоимость и условия аренды:</H2>
    </div>
    <p className="typo-arenda-subtitle white">В случае единовременной аренды (один раз на один час, 08:00 — 17:00) составляет:</p>
    <div className="arenda-cost-container">
        {Object.values(halls).filter(hall=> hall.type=="dancehall").map(hall=> <ArendaCost area ={hall.area} cost={hall.cost} title={hall.title}/>)}
    </div>
    <div className="arenda-title-txt-row">
        <div className="arenda-text-column">
            <p className="typo-arenda-title white">В стоимость аренды входит: </p>
            <ul className="typo-arenda-text white">
                <li>использование общих зон: ресепшн, мужская и женская гардеробные, туалетные комнаты, душевая</li>
                <li>использование музыкального и светового оборудования в танцевальных залах</li>
                <li>кулер — чистая вода, одноразовые стаканчики</li>
                <li>мебель (по необходимости): 5 круглых столов, 30 стульев, 20 подушек (можно использовать на полу)</li>
            </ul>
        </div>
        <div className="arenda-text-column">
            <p className="typo-arenda-title white">Дополнительно:</p>
            <ul className="typo-arenda-text white">
                <li>Проектор высокой мощности + экран</li>
                <li>Магнитная доска + маркеры</li>
                <li>Пенополиуретановые коврики</li>
                <li>Стеклянные стаканы и глубокие тарелки, одноразовая посуда, микроволновка, чайник, френчпрессы, подносы, лед для коктейлей, холодильник.</li>
            </ul>
        </div>
    </div>
    <div className="arenda-title-buttons-row">
        <a href="/about/arenda/#bighall" className='arenda-button typo-button'>Большой зал</a>
        <a href="/about/arenda/#loft" className='arenda-button typo-button'>Мансарда</a>
        <a href="/about/arenda/#poledancehall" className='arenda-button typo-button'>Пилонный зал</a>
        <a href="/about/arenda/#otherhalls" className='arenda-button typo-button'>Остальные помещения</a>
    </div>
</section>



class ArendaPage extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        const props = this.props
        return <div>
        <ArendaTitle/>
        {Object.values(halls).filter(hall=> hall.type=="dancehall").map(hall=> <DanceHall id={hall.id} title={hall.title} imgs={hall.imgs} description={hall.description} equipments={hall.equipments} addServices={hall.addServices} />)}
        <OtherHalls/>
        </div>
    }
}

export default ()=><ArendaPage />