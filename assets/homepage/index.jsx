import React from 'react'
import DirectionsSlider from '../slider-directions-main/slider-directions.js'
import {directions, teachers, team, price, halls, groups} from '../../data'
import TeachersSlider from '../slider-teachers-main/slider-teachers.js'
import {TeacherCard} from '../teacher/index.jsx'
import RegistrationWindow from '../dance/registration.js'
import {getTeacherFullName, getTeacherDirections} from '../schedule/table/table/data-builder.js'
import HallsSlider from '../slider-halls-main/slider-halls.js'
import {H1, H2} from '../typography/titles/index.jsx'
import {CardCostDarkFon} from '../price/index.jsx'
import days from "../schedule/table/table/const.js"
import moment from 'moment'
import 'moment/locale/ru'




function x(group, weekday){
    for (const time of group.times){
        if (time.day == weekday){
            const lesson = Object.assign({}, group,  time)
            delete lesson.times
            return lesson
        }
    }
    return null
}
const weekday = moment().format('dd')
console.log(groups.map(group=>x(group, weekday)).filter(x => x != null).sort((a,b)=>a.start<b.start))


const DirectionSlide=(props)=><div className="direction-slide">
    <a href={`/dance/${props.id}`} className="slide">
        <img src={`/static/img/${props.img}`}  alt={props.img} className={`carusel-direction-img`}/>
        <h3 className="typo-title carusel-direction-title">{props.title}</h3>
        <div className="typo-subtitle carusel-direction-description">{props.description}</div>
    </a>
</div>

const MainDirections=(props)=><section className="main-section-white-background">
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
    <div className="small-margin main-buttons-directions">
        <RegistrationWindow />        
        <div>
            <button className='button-short-main typo-button'><a href='/dance'>все направления</a></button>
        </div>
    </div>
    <div className="big-margin">
        <H2 color="grey" OpenSansRegular>Сольные ТАНЦЫ</H2>
    </div>
    <DirectionsSlider>
        {Object.values(directions).filter(direction=> direction.species == 'solo').map(direction=> <DirectionSlide id={direction.id} title={direction.title} img={direction.dancesPageImg} description={direction.caruselDescription}/>)}
    </DirectionsSlider>
    <div className="main-buttons-directions special-margin-buttons">
        <RegistrationWindow />        
        <div>
            <button className='button-short-main typo-button'><a href='/dance'>все направления</a></button>
        </div>
    </div>
    <div className="standart-margin typo-title title_width2">В среднем базовый курс по любому из выше представленных направлений
        длится в течение 3-х месяцев, все зависит от общей скорости группы. 
        По окончании начального курса, появляется уверенность в своих силах 
        и желание совершенствоваться усиливается.
    </div>
</section>

const ScheduleToday=(props)=><div className="schedule-today">
    <span className="typo-lesson-time white">{props.time}</span>
    <span className="footer-title"> {props.title}</span>
    <span className="typo-lesson-level white"> {props.level}</span>
</div>



const MainPrice=(props)=><section className="main-section-photo-background price-img main-section-photo-background_h">
    <H2 color="white" OpenSansRegular>СТОИМОСТЬ ЗАНЯТИЙ</H2>
    <h2 className="typo-title white small-margin">Впервые у нас? Пробное занятие в группе — бесплатно!</h2>
    <h3 className="typo-cost-title white-opacity">{`разовое посещение группового занятия — ${props.adult}`} <span className="ruble">₽</span>{`, льготное* —  ${props.preferential}`} <span className="ruble">₽</span></h3>
    <div className="price-4subscription-container small-margin">
        {Object.values(price).filter(item => item.type== 'subscription' ).map(item=><CardCostDarkFon id={item.id} title={item.title} practice={item.practice} adult={item.cost.adult} preferential={item.cost.preferential}/>)}
    </div>
    {/* <div className="big-margin">
        <H2 color="white" OpenSansRegular >Безлимитные абонементы</H2>
    </div>
    <div className="price-2subscription-container small-margin">
        {Object.values(price).filter(item => item.type== 'unlimited' ).map(item=><CardCostMiniGroups id={item.id} title={item.title} practice={item.practice} adult={item.cost.adult} preferential={item.cost.preferential}/>)}
    </div> */}
    <a href='/price' className='button typo-button standart-margin'>ПОДРОБНЕЕ ОБ АБОНЕМЕНТАХ И СКИДКАХ</a>
    {/* <div className="typo-title standart-margin title_width2 white">Обычно, занятия проходят два раза в неделю.
        Для улучшения танцевальных навыков могут
        проводится специальные занятия по технике,
        спецкурсы.
        Кроме того, проводятся самостоятельные практические занятия
    </div> */}
    <div className="big-margin">
        <H2 color="white" OpenSansRegular >Расписание занятий | {`${moment().format('dddd')} ${moment().format('LL')}`}</H2>
    </div>
    <div className="main-shedule-today big-margin">
        {groups.map(group=>x(group, weekday)).filter(x => x != null).sort((a,b)=>a.start<b.start).map(group=><ScheduleToday title={group.title} time={group.start} level={group.levels} type={group.type} />)}
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
    <div className="typo-title small-margin title_width2">
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
    <div className="typo-title small-margin title_width2">
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

const MainContact=(props)=><section className="main-section-end">
    <H2 color="grey" OpenSansRegular>Как нас найти:</H2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2228.5541666142444!2d92.92005020000002!3d56.04370790000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5cd7af0c4ae695c1%3A0xb225dc0e078e8e0!2z0KfQldCg0JTQkNCaLCDRgtCw0L3RhtC10LLQsNC70YzQvdGL0Lkg0LrQu9GD0LE!5e0!3m2!1sru!2sru!4v1542703704235" frameBorder="0" className="map standart-margin"></iframe>
</section>

class HomePage extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        const props = this.props
        return <div>
            <MainDirections />
            <MainPrice adult={price.oneTime.cost.adult} preferential={price.oneTime.cost.preferential}/>
            <MainTeam />
            <MainEvents/>
            <MainHalls />
            <MainContact/>
        </div>
    }
}

export default ()=><HomePage />