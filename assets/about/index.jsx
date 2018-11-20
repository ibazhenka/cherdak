import React from 'react'
import {team} from '../../data'
import getLesson, {getTeacherFullName} from '../schedule/table/table/data-builder.js' 
import {H1, H2} from '../typography/titles/index.jsx'
console.log(team)

const MemberCard=(props)=><div className="member-card">
    <a href={`/${props.parentsPage}/${props.id}`} className="slide">
        <img src={`/static/img/${props.img}`}  alt={props.img} className={`carusel-direction-img`}/>
        <h3 className="typo-title">{`${props.forename} ${props.surname}`}</h3>
        <div className="typo-subtitle">{props.position}</div>
    </a>
</div>


class AboutPage extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        const props = this.props
        return <div>
            <H1 color="grey" OpenSansRegular>ЛЮДИ, КОТОРЫЕ КАЖДЫЙ ДЕНЬ  ДЕЛАЮТ КЛУБ ЕЩЁ ЛУЧШЕ</H1>
            <div className="team-container">
                {Object.values(team).sort((a,b)=> a.surname>b.surname? 1: a.surname<b.surname? -1:0).map(member=><MemberCard forename={member.forename} surname={member.surname} parentsPage={member.parentsPage} img={member.img} id={member.id} position={member.position}/>)}
            </div>
            <H2 color="grey" OpenSansRegular>о клубе</H2>
            <div>
                В сегодняшнем быстром водовороте жизни все большей ценностью становится человеческое общение и время, которое мы уделяем себе любимым. Ведь и то и другое становится настоящей редкостью в быстром ритме нашей жизни: дом, работа, утренние и вечерние пробки, проблемы и каждодневная рутина. В Красноярске есть одно замечательное место, где можно посвятить себе время, общаясь с интересными людьми и занимаясь интересным делом. Танцевальный клуб «Чердак» — это естественная, позитивная и комфортная среда знакомства, общения и активного отдыха для многих интересных людей. Это яркое и открытое сообщество и одновременно проект развития культуры танцевального общения в Красноярске. Основными направлениями клуба являются такие парные танцы как сальса, хастл, аргентинское танго. Это очень разные по энергетике танцы, но главная идея у них одна. Каждый из них танцуют в паре, и каждый из них – импровизация. А значит главное в этих танцах – общение. Танцевальный клуб «Чердак» — это уникальный проект. Это танцевальные залы на двух этажах под самой крышей, с романтическим видом на город. Это креативный и комфортный интерьер, прекрасные преподаватели разных танцевальных направлений. Это дружественная атмосфера и насыщенная событиями творческая жизнь. Занятия, мастер-классы, танцевальные практики, музыкальные концерты, танцевальные, творческие и научно — познавательные вечеринки, просмотры кинофильмов и уютные чаепития — все это Танцевальный клуб «Чердак». И еще люди, много интересных людей.
            </div>
            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1lYxRwitvV5aNJkPYtKZwXDxB7tKFG1LJ"  frameBorder="0" className="map standart-margin"></iframe>
        </div>
    }
}

export default ()=><AboutPage />