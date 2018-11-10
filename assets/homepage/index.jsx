import React from 'react'
import DirectionsSlider from '../slider-directions-main/slider-directions.js'
import {directions, teachers, team, price, halls} from '../../data'
import TeachersSlider from '../slider-teachers-main/slider-teachers.js'
import {TeacherCard} from '../teacher/index.jsx'
import RegistrationWindow from '../dance/registration.js'
import {getTeacherFullName, getTeacherDirections} from '../schedule/table/table/data-builder.js'
import HallsSlider from '../slider-halls-main/slider-halls.js'
import {H1, H2} from '../typography/titles/index.jsx'
import {CardCostMiniGroups} from '../price/index.jsx'

const DirectionSlide=(props)=><div className="direction-slide">
    <a href={`/dance/${props.id}`} className="slide">
        <img src={`/static/img/${props.img}`}  alt={props.img} className={`carusel-direction-img`}/>
        <h3 className="typo-title carusel-direction-title">{props.title}</h3>
        <div className="typo-subtitle carusel-direction-description">{props.description}</div>
    </a>
</div>

const MainDirection=(props)=><section className="main-section-white-background">
    {/* <div className="typo-title title_width">
        Мы - танцевальный клуб Чердак, 
        и уже семь лет мы учим танцевать взрослых и детей
        и танцуем вместе с вами!
    </div> */}
    {/* <div className="standart-margin"> */}
        <H1 color="grey" sans-serif>ПАРНЫЕ ТАНЦЫ</H1>
    {/* </div> */}
    <DirectionsSlider>
        {Object.values(directions).filter(direction=> direction.species == 'couple').map(direction=> <DirectionSlide id={direction.id} title={direction.title} img={direction.dancesPageImg} description={direction.caruselDescription}/>)}
    </DirectionsSlider>
    <div className="standart-margin row-button">
        <RegistrationWindow />        
        <div>
            <button className='button typo-button'><a href='/dance'>все направления</a></button>
        </div>
    </div>
    <div className="standart-margin">
        <H2 color="grey" OpenSansRegular>Сольные ТАНЦЫ</H2>
    </div>
    <DirectionsSlider>
        {Object.values(directions).filter(direction=> direction.species == 'solo').map(direction=> <DirectionSlide id={direction.id} title={direction.title} img={direction.dancesPageImg} description={direction.caruselDescription}/>)}
    </DirectionsSlider>
    <div className="row-button">
        <RegistrationWindow />        
        <div>
            <button className='button typo-button'><a href='/dance'>все направления</a></button>
        </div>
    </div>
    <div className="standart-margin typo-title title_width2">В среднем базовый курс по любому из выше представленных направлений
        длится в течение 3-х месяцев, все зависит от общей скорости группы. 
        По окончании начального курса, появляется уверенность в своих силах 
        и желание совершенствоваться усиливается.
    </div>
</section>


const MainPrice=(props)=><section className="main-section-photo-background price-img main-section-photo-background_h">
    <H2 color="white" OpenSansRegular>СТОИМОСТЬ ЗАНЯТИЙ</H2>
    <h2 className="typo-title white">Впервые у нас? Пробное занятие в группе — бесплатно!</h2>
    <h3 className="typo-cost-title white-opacity">{`разовое посещение группового занятия — ${props.adult}`} <span className="ruble">₽</span>{`, льготное* —  ${props.preferential}`} <span className="ruble">₽</span></h3>
    <div className="price-subscription-container">
        {Object.values(price).filter(item => item.type== 'subscription' ).map(item=><CardCostMiniGroups id={item.id} title={item.title} practice={item.practice} adult={item.cost.adult} preferential={item.cost.preferential}/>)}
    </div>
    <div className="standart-margin">
        <H2 color="white" OpenSansRegular >Безлимитные абонементы</H2>
    </div>
    <div className="price-unlimited-container">
        {Object.values(price).filter(item => item.type== 'unlimited' ).map(item=><CardCostMiniGroups id={item.id} title={item.title} practice={item.practice} adult={item.cost.adult} preferential={item.cost.preferential}/>)}
    </div>
    <a href='/price' className='button typo-button standart-margin'>ПОДРОБНЕЕ ОБ АБОНЕМЕНТАХ И СКИДКАХ</a>
    <div className="typo-title standart-margin title_width2 white">Обычно, занятия проходят два раза в неделю.
        Для улучшения танцевальных навыков могут
        проводится специальные занятия по технике,
        спецкурсы.
        Кроме того, проводятся самостоятельные практические занятия
    </div>
    <a href='/schedule' className="button typo-button standart-margin">Расписание</a>
</section>

const MemberCard=(props)=><div>
    <div className="member-slide">
        <a href={`/${props.parentsPage}/${props.id}`} className="slide">
            <img src={`/static/img/${props.img}`}  alt={props.img} className={`carusel-direction-img`}/>
            <h3 className="typo-title">{getTeacherFullName(props.id)}</h3>
            <div className="typo-subtitle">{props.position}</div>
            <div className="typo-subtitle upper">{getTeacherDirections(props.direction)}</div>
        </a>
    </div>
</div>


const MainTeam=(props)=><section className="main-section-white-background">
    <H2 color="grey" OpenSansRegular>наша команда</H2>
    <TeachersSlider>
        {Object.values(Object.assign(teachers, team)).sort((a,b)=> a.surname>b.surname? 1: a.surname<b.surname? -1:0).map(member=><MemberCard parentsPage={member.parentsPage} img={member.img} id={member.id} position={member.position} direction={member.directionsID}/>)}
    </TeachersSlider>
    <div className="typo-title standart-margin title_width2">
        Кадры решают все. У нас они лучшие.
    </div>
</section>

const HallSlide=(props)=><div className="slide-hall">
    <img src={`/static/img/${props.img}`} alt={props.img} className="carusel-halls-img"/>
    <div className="hall-title typo-hall-title">{props.title} | <span className="upper">{props.department}</span></div>
</div>

const MainHalls=(props)=><section className="main-section-white-background">
    <H2 color="grey" OpenSansRegular>Уютные залы</H2>
    <HallsSlider>
        {Object.values(halls).map(hall=><HallSlide img={hall.imgs[0]} title={hall.title} department={hall.department}/>)}
    </HallsSlider>
    <div className="typo-title standart-margin title_width2">
        По нашему мнению пространство, где учатся, творят и отдыхают,
        должно быть удобным и уютным
    </div>
    <div className="standart-margin"><a href='/about/arenda' className='button typo-button'>подробнее о залах и аренде</a></div>
</section>

const MainEvents=(props)=><section className="main-section-photo-background event-img">
    <div className="typo-slogan title_width2">На Чердаке не только учатся, но еще и танцуют.
        Вечеринки для друзей каждую неделю!
        Ждем Вас в ближайшую субботу.
    </div>
    <div className="standart-margin">
        <a href='/events' className=' button typo-button'>СМОТРЕТЬ БЛИЖАЙШИЕ СОБЫТИЯ</a>
    </div>
</section>

const MainContact=(props)=><section className="main-section-white-background">
    <H2 color="grey" OpenSansRegular>Как к нам добраться</H2>
</section>

class HomePage extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        const props = this.props
        return <div>
            <MainDirection />
            <MainPrice adult={price.oneTime.cost.adult} preferential={price.oneTime.cost.preferential}/>
            <MainTeam />
            <MainEvents/>
            <MainHalls />
            <MainContact/>
        </div>
    }
}

export default ()=><HomePage />