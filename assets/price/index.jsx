import React from 'react'
import {price} from '../../data'

// function getPractice(){
//     if (props.practice=='Есть'){
//         return 'и все практики'
//     }
//     return ' '
// }
const PriceOneTime=(props)=> <section className="price-one-time-container price-one-time-img">
    <h2 className="typo-slogan">Впервые у нас? Пробное занятие в группе — бесплатно!</h2>
    <h3 className="typo-cost-title">{`разовое посещение группового занятия — ${props.adult} ${<span className="ruble">₽</span>}, льготное* —  ${props.preferential} ${<span className="ruble">₽</span>}`}</h3>
    <div className="button-row">
        <a href='/price' className='button typo-button'>РАЗОВОЕ ПОСЕЩЕНИЕ</a>
        <a href='/price' className='button typo-button'>АБОНЕМЕНТЫ И БЕЗЛИМИТЫ</a>
        <a href='/price' className='button typo-button'>СТОИМОСТЬ ЗАНЯТИЙ В МИНИГРУППАХ</a>
        <a href='/price' className='button typo-button'>ИНДИВИДУАЛЬНЫЕ ЗАНЯТИЯ</a>
        <a href='/price' className='button typo-button'>ПРАВИЛА</a>
    </div>
    <div className="typo-cost-title">
        *льготное посещение для детей до 18 лет, студентов, аспирантов и пенсионеров 
    </div>
</section>

const CardCost=(props)=> <div className="cost-container">
    <div className="typo-subtitle-price">полный</div>
    <div className="typo-cost">{props.adult}<span className="ruble">₽</span></div>
    <div className="title-price-container">
        <h3 className="typo-title-price">{props.title}</h3>
        <div className="typo-subtitle-price">и все практики</div>
    </div>
    <div className="typo-subtitle-price">льготный</div>
    <div className="typo-cost">{props.preferential}<span className="ruble">₽</span></div>
</div>

const CardCostMiniGroups=(props)=> <div className="cost-container">
    <div className="typo-subtitle-price white-opacity">полный</div>
    <div className="typo-cost white-opacity">{props.adult}<span className="ruble">₽</span></div>
    <div className="title-price-container">
        <h3 className="typo-title-price white">{props.title}</h3>
    </div>
    <div className="typo-subtitle-price white-opacity">льготный</div>
    <div className="typo-cost white-opacity">{props.preferential}<span className="ruble">₽</span></div>
</div>

const PriceMiniGroups=(props)=> <section className="price-one-time-container price-mini-groups-img">
    <h2 className="typo-slogan">Занятия в мини-группах </h2>
    <h3 className="typo-cost-title">занятия полдэнс и стрейтчинг</h3>
    <div className="minigroup-container">
        {Object.values(price).filter(subscription=> subscription.type == 'minigroup').map(subscription=> <CardCostMiniGroups id={subscription.id} title={subscription.title} practice={subscription.practice} adult={subscription.cost.adult} preferential={subscription.cost.preferential}/>)}
    </div>
</section>
const PriceList=props=> <section className="price-list-container">
    <h2 className="typo-section-title">Абонементы</h2>
            <div className="subscription-container">
                {Object.values(price).filter(subscription=> subscription.type == 'subscription').map(subscription=> <CardCost id={subscription.id} title={subscription.title} practice={subscription.practice} adult={subscription.cost.adult} preferential={subscription.cost.preferential}/>)}
            </div>
            <div className="rules typo-subscription-rules">Система абонементов клуба распространяется на все групповые парные и сольные уроки танцев в клубе «Чердак»
                за исключением направления Pole dance. Абонемент действует 30  дней со дня активации.
            </div>
            <h2 className="typo-section-title">Безлимитные абонементы</h2>
            <div className="subscription-container">
                {Object.values(price).filter(subscription=> subscription.type == 'unlimited').map(subscription=> <CardCost id={subscription.id} title={subscription.title} practice={subscription.practice} adult={subscription.cost.adult} preferential={subscription.cost.preferential}/>)}
            </div>
</section>

const PriceRules=props=> <section className="price-list-container">
    <h2 className="typo-section-title">Правила действия абонементов клуба</h2>
    <div className="rules typo-subscription-rules">
    Абонемент приобретается при факте единовременной оплаты всей его стоимости. Активация абонемента происходит в день посещения первого занятия по абонементу.

Абонемент действует 30/90 дней со дня активации.

Абонемент может быть применен во всех филиалах ТК «Чердак».

По окончанию срока действия абонемента (30/90 дней с момента активации) действие абонемента заканчивается. Все не посещенные занятия сгорают. Все вопросы, связанные с переносом и возвратом денежные средств, рассматриваются дирекцией клуба в индивидуальном порядке по письменному заявлению.

Безлимитные абонементы позволяют своему владельцу посещать неограниченное количество групповых уроков в ТК «Чердак» в соответствии с уровнем их танцевальной подготовки. Уровень танцевальной подготовки клиента оценивает преподаватель группы, занятия которой хочет посещать клиент.

Новая система абонементов клуба распространяется на все групповые парные и сольные уроки танцев в клубе «Чердак» за исключением направления Pole dance.

Абонемент является именным, занятия по нему не могут быть переданы другому лицу.

Студенческие, школьные, пенсионные скидки предоставляются клиентам, подтверждающим свой статус соответствующими документами.
    </div>
</section>

class Price extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        const props = this.props
        return  <div>
            <PriceOneTime /*adult={oneTime.cost.adult} preferential={oneTime.cost.preferential}*//>
            < PriceList />
            <PriceMiniGroups />
            <PriceRules />
        </div>
    }
}

export default Price