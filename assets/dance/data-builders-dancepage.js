import React from 'react'
import {directions, teachers} from '../../data'
import Schedule from '../schedule/table/table/index.jsx'
import {getTeacherFullName, getTeacherDirections} from '../schedule/table/table/data-builder.js' 
import {TeacherCard} from '../teacher/index.jsx'
import Modal from 'react-modal'
import RegistrationWindow from './registration.js'

const getTeachersForDancePage = (dirID) => Object.values(teachers).filter((teacher) => teacher.directionsID.indexOf(dirID)>-1)


const SectionTitle= (props) => <section className= {`title-section-dance-page ${props.id}-title-img`}>
    <h1 className="title-dance-page_text">{props.titleSubdirections.join(" | ")}</h1>
    <div className={`button-menu button-menu_location-${props.id}-page`}>
        <a href={`/dance/${props.id}/#about`} className= {`button-${props.id}-page  _typography-button`}>Общие сведения</a>
        <a href={`/dance/${props.id}/#shedule`} className= {`button-${props.id}-page _typography-button`}>Расписание</a>
        <a href={`/dance/${props.id}/#openlessons`} className= {`button-${props.id}-page _typography-button`}>Открытые уроки</a>
        <a href={`/dance/${props.id}/#teachers`} className= {`button-${props.id}-page _typography-button`}>Преподаватели</a>
        <a href={`/dance/${props.id}/#gallery`} className= {`button-${props.id}-page _typography-button`}>Галерея</a>
    </div>
</section>

const SectionHistory= (props) => <section className= {`even-section-dance-page`}>
    <h2 className="title-dance-page_text_dark">{props.subtitle}</h2>
    <div className="img-text">
        <img src={`/static/img/${props.id}2.jpg`}  alt={`${props.id}-history-img`} className="size-img"/>
        <p className="even-section__text">{props.history}</p>
    </div>
</section>

const SectionAbout= (props) => <section className= {`odd-section-dance-page ${props.id}-about-img`}>
    <div className="_alin-right">
        <p className ="odd-section__text">{props.history}</p> 
    </div>

</section>

const SectionSchedule=(props)=> <section className= {`even-section-dance-page`}>
    <h2 id="shedule" className="title-dance-page_text_dark">Расписание занятий</h2>
    <Schedule filters={props.filters} />
</section>

const SectionOpenLessons=(props)=> <section className= {`odd-section-dance-page ${props.id}-openLesson-img`}>
<div className="_row_nowrap">
    <RegistrationWindow />
    <p id="openlessons" className="text">Здесь будет форма записи на ОУ, расписание ближайших ОУ, при отсутствии назначенных ОУ предложение присоединиться к группе или предложение подписаться на рассылку </p> 
</div>
</section>

const SectionTeachers= (props) => <section className= {`even-section-dance-page`}>
    <h2 id ="teachers" className="title-dance-page_text_dark">Преподаватели</h2>
    <div className="teacher-container">{props.children}</div>
</section>

const SectionGallery= (props) => <section className= {`odd-section-dance-page ${props.id}-about-img`}>
    <div className="_row_nowrap">
        <p>Здесь будет Галерея</p> 
    </div>
</section>

const SectionVideo= (props) => <section className= {`even-section-dance-page`}>
    <h2 >Видео: </h2>
    <div>
    </div>
</section>

const DancePage = ({dance}) => {
    const teachersForDancePage = getTeachersForDancePage(dance.id)
    return <div>
        <SectionTitle id= {dance.id} titleSubdirections={dance.titleSubdirections} subtitle={dance.subtitle} />
        <SectionHistory id= {dance.id} subtitle={dance.subtitle} history={dance.history} /> 
        <SectionAbout id= {dance.id} history={dance.history}/>
        <SectionSchedule filters={{title:dance.filtersForDancePage}} /> 
        <SectionOpenLessons id= {dance.id}/>
        <SectionTeachers>
            {teachersForDancePage.map(teacher=><TeacherCard key={teacher.id} img={teacher.img} id={teacher.id} direction={teacher.directionsID}/>)}
        </SectionTeachers>
        <SectionAbout id= {dance.id} history={dance.history}/>
        <SectionVideo />
    </div>
}
export default DancePage
