import React from 'react'
import {team} from '../../data'
import getLesson, {getTeacherFullName} from '../schedule/table/table/data-builder.js' 
import {H1, H2} from '../typography/titles/index.jsx'
console.log(team)

const MemberCard=(props)=><div className="member-card">
    <a href={`/${props.parentsPage}/${props.id}`} className="slide">
        <img src={`/static/img/${props.img}`}  alt={props.img} className={`member-img`}/>
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
        return <div className="about-container">
            <H1 color="grey" OpenSansRegular>ЛЮДИ, КОТОРЫЕ КАЖДЫЙ ДЕНЬ  ДЕЛАЮТ КЛУБ ЕЩЁ ЛУЧШЕ</H1>
            <div className=" team-container">
                {Object.values(team).sort((a,b)=> a.surname>b.surname? 1: a.surname<b.surname? -1:0).map(member=><MemberCard forename={member.forename} surname={member.surname} parentsPage={member.parentsPage} img={member.img} id={member.id} position={member.position}/>)}
            </div>
            <div className="standart-margin">
                <H2 color="grey" OpenSansRegular>о клубе</H2>
            </div>
            <div className="typo-about-text text-about">
                В сегодняшнем быстром водовороте жизни все большей ценностью становится человеческое общение и время, которое мы уделяем себе любимым. Ведь и то и другое становится настоящей редкостью в быстром ритме нашей жизни: дом, работа, утренние и вечерние пробки, проблемы и каждодневная рутина. В Красноярске есть одно замечательное место, где можно посвятить себе время, общаясь с интересными людьми и занимаясь интересным делом. Танцевальный клуб «Чердак» — это естественная, позитивная и комфортная среда знакомства, общения и активного отдыха для многих интересных людей. Это яркое и открытое сообщество и одновременно проект развития культуры танцевального общения в Красноярске. Основными направлениями клуба являются такие парные танцы как сальса, хастл, аргентинское танго. Это очень разные по энергетике танцы, но главная идея у них одна. Каждый из них танцуют в паре, и каждый из них – импровизация. А значит главное в этих танцах – общение. Танцевальный клуб «Чердак» — это уникальный проект. Это танцевальные залы на двух этажах под самой крышей, с романтическим видом на город. Это креативный и комфортный интерьер, прекрасные преподаватели разных танцевальных направлений. Это дружественная атмосфера и насыщенная событиями творческая жизнь. Занятия, мастер-классы, танцевальные практики, музыкальные концерты, танцевальные, творческие и научно — познавательные вечеринки, просмотры кинофильмов и уютные чаепития — все это Танцевальный клуб «Чердак». И еще люди, много интересных людей.
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2228.5541666142444!2d92.92005020000002!3d56.04370790000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5cd7af0c4ae695c1%3A0xb225dc0e078e8e0!2z0KfQldCg0JTQkNCaLCDRgtCw0L3RhtC10LLQsNC70YzQvdGL0Lkg0LrQu9GD0LE!5e0!3m2!1sru!2sru!4v1542703704235" frameBorder="0" className="map standart-margin"></iframe>
        </div>
    }
}

export default ()=><AboutPage />