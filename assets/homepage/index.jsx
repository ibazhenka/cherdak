import React from 'react'
import DirectionsSlider from '../slider-directions-main/slider-directions.js'
import {directions, teachers, price, halls} from '../../data'
import TeachersSlider from '../slider-teachers-main/slider-teachers.js'
import {TeacherCard} from '../teacher/index.jsx'
import RegistrationWindow from '../dance/registration.js'
import {getTeacherFullName, getTeacherDirections} from '../schedule/table/table/data-builder.js'
import HallsSlider from '../slider-halls-main/slider-halls.js'
import {H1, H2} from '../typography/titles/index.jsx'

const DirectionSlide=(props)=><div>
    <div className="direction-slide">
        <a href={`/dance/${props.id}`}>
            <img src={`/static/img/${props.img}`}  alt={props.img} className={`carusel-direction-img`}/>
            <h3 className="typo-title carusel-direction-title">{props.title}</h3>
            <div className="typo-subtitle carusel-direction-description">{props.description}</div>
        </a>
    </div>
</div>

const MainDirection=(props)=><section className="main-section-white-background">
    <div className="typo-title title_margin title_width">
        Мы - танцевальный клуб Чердак, 
        и уже семь лет мы учим танцевать взрослых и детей
        и танцуем вместе с вами!
    </div>
    <H1 color="grey" sans-serif>ПАРНЫЕ ТАНЦЫ</H1>
    <DirectionsSlider>
        {Object.values(directions).filter(direction=> direction.species == 'couple').map(direction=> <DirectionSlide id={direction.id} title={direction.title} img={direction.dancesPageImg} description={direction.caruselDescription}/>)}
    </DirectionsSlider>
    <div className="title_margin row-button">
        <div>
            <RegistrationWindow />
        </div>
        <div>
            <a href='/dance' className='button typo-button'>Подробнее о всех направлениях</a>
        </div>
    </div>
    <H2 color="grey" OpenSansRegular>Сольные ТАНЦЫ</H2>
    <DirectionsSlider>
        {Object.values(directions).filter(direction=> direction.species == 'solo').map(direction=> <DirectionSlide id={direction.id} title={direction.title} img={direction.dancesPageImg} description={direction.caruselDescription}/>)}
    </DirectionsSlider>
    <div className="typo-title title_margin title_width2">В среднем базовый курс по любому из выше представленных направлений
        длится в течение 3-х месяцев, но все зависит от общей скорости группы. 
        По окончании начального курса, появляется уверенность в своих силах 
        и желание танцевать усиливается, нужна еще строчка фигни о танцах, 
        а в голову ничего не лезет, шрифт корявый.
    </div>
</section>

const MainPriceCard=(props)=><div className="col-md-4">
    <div className="typo-cost">{props.cost}<span className="ruble">₽</span></div>
    <div className="typo-cost-title" >{props.title} в месяц</div>
</div>

const MainPrice=(props)=><section className="main-section-white-background _grey-background">
    <H2 color="grey" OpenSansRegular>СТОИМОСТЬ ЗАНЯТИЙ</H2>
    <div className="price-container row">
        {Object.values(price).map(item=><MainPriceCard cost={item.cost.adult} title={item.title} />)}
    </div>
    <div className="title_margin"><a href='/price' className='button typo-button'>ПОДРОБНЕЕ ОБ АБОНЕМЕНТАХ И СКИДКАХ</a></div>
    <div className="typo-title title_margin title_width2">Обычно, основные занятия проходят два раза в неделю.
        Для улучшения танцевальных навыков на каждом направлении
        проводятся специальные занятия по технике,
        спецкурсы для углубленного изучения определенных вопросов.
        Кроме того, проводятся самостоятельные практические занятия
    </div>
    <div className="title_margin"><a href='/schedule' className='button typo-button'>Расписание</a></div>
</section>

const MemberCard=(props)=><div>
    <div className="member-slide">
        <img src={`/static/img/${props.img}`}  alt={props.img} />
        <h3 className="typo-title">{getTeacherFullName(props.id)}</h3>
        <div className="typo-subtitle">{props.position}</div>
        <div className="typo-subtitle">{getTeacherDirections(props.direction)}</div>

    </div>
</div>

const MainTeam=(props)=><section className="main-section-white-background">
    <H2 color="grey" OpenSansRegular>наша команда</H2>
    <TeachersSlider>
        {Object.values(teachers).map(teacher=><MemberCard img={teacher.img} id={teacher.id} position={teacher.position} direction={teacher.directionsID}/>)}
    </TeachersSlider>
    <div className="typo-title title_margin title_width2">
        Кадры решают все. А у нас они лучшие.
    </div>
</section>

const HallSlide=(props)=><div className="slide-hall">
    <img src={`/static/img/${props.img}`} alt={props.img} className="carusel-halls-img"/>
    <div className="hall-title">{props.title} | <span>{props.department}</span></div>
</div>

const MainHalls=(props)=><section className="main-section-white-background">
    <H2 color="grey" OpenSansRegular>Уютные залы</H2>
    <HallsSlider>
        {Object.values(halls).map(hall=><HallSlide img={hall.imgs[0]} title={hall.title} department={hall.department}/>)}
    </HallsSlider>
    <div className="typo-title title_margin title_width2">
        По нашему мнению пространство, где учатся, творят и отдыхают,
        должно быть удобным и уютным
    </div>
    <div className="title_margin"><a href='/about/arenda' className='button typo-button'>РАССМОТРЕТЬ ПРОСТРАНСТВО И  УЗНАТЬ ОБ АРЕНДЕ МОЖНО ЗДЕСЬ</a></div>
</section>

class HomePage extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        const props = this.props
        return <div>
            <MainDirection />
            <MainPrice />
            <MainTeam />
            <MainHalls />


        </div>
    }
}

export default ()=><HomePage />