import React from 'react'
import {price} from '../../data'
import {H1, H2} from '../typography/titles/index.jsx'


const PriceOneTime=(props)=> <section className="first-section-container price-one-time-img" id="oneTime">
    <h2 className="typo-slogan">Впервые у нас? Пробное занятие в группе — бесплатно!</h2>
    <h3 className="typo-cost-title">{`разовое посещение группового занятия — ${props.adult}`} <span className="ruble">₽</span>{`, льготное* —  ${props.preferential}`} <span className="ruble">₽</span></h3>
    <div className="price-button-row">
        {/* <a href='/price#oneTime' className='price-button typo-button'>РАЗОВОЕ ПОСЕЩЕНИЕ</a> */}
        <a href='/price#subscriptions' className='price-button typo-button'>АБОНЕМЕНТЫ И БЕЗЛИМИТЫ</a>
        <a href='/price#miniGroups' className='price-button typo-button'>СТОИМОСТЬ ЗАНЯТИЙ В МИНИГРУППАХ</a>
        {/* <a href='/price' className='price-button typo-button'>ИНДИВИДУАЛЬНЫЕ ЗАНЯТИЯ</a> */}
        <a href='/price#rules' className='price-button typo-button'>ПРАВИЛА</a>
    </div>
    <div className="typo-cost-title standart-margin">
        *льготное посещение для детей до 18 лет, студентов, аспирантов и пенсионеров 
    </div>
</section>

const CardCostLightFon=(props)=> <div className="cost-container">
    <div className="typo-subtitle-price">полный</div>
    <div className="typo-cost">{props.adult}<span className="ruble">₽</span></div>
    <div className="title-subscription-container">
        <h3 className="typo-title-price">{props.title}</h3>
        <div className="typo-subtitle-price">и все практики</div>
    </div>
    <div className="typo-subtitle-price">льготный</div>
    <div className="typo-cost">{props.preferential}<span className="ruble">₽</span></div>
</div>

const CardCostDarkFon=(props)=> <div className="cost-container">
    <div className="typo-subtitle-price white-opacity">полный</div>
    <div className="typo-cost white-opacity">{props.adult}<span className="ruble">₽</span></div>
    <div className="title-subscription-container">
        <h3 className="typo-title-price white">{props.title}</h3>
        <div className="typo-subtitle-price white">и все практики</div>
    </div>
    <div className="typo-subtitle-price white-opacity">льготный</div>
    <div className="typo-cost white-opacity">{props.preferential}<span className="ruble">₽</span></div>
</div>

const CardCostMiniGroups=(props)=> <div className="cost-container" >
    <div className="typo-subtitle-price white-opacity">полный</div>
    <div className="typo-cost white-opacity">{props.adult}<span className="ruble">₽</span></div>
    <div className="title-subscription-container">
        <h3 className="typo-title-price white">{props.title}</h3>
    </div>
    <div className="typo-subtitle-price white-opacity">льготный</div>
    <div className="typo-cost white-opacity">{props.preferential}<span className="ruble">₽</span></div>
</div>

const PriceMiniGroups=(props)=> <section className="price-mini-groups-img price-mini" id="miniGroups">
    <h2 className="typo-slogan">Занятия в мини-группах </h2>
    <h3 className="typo-cost-title">занятия полдэнс и стрейтчинг</h3>
    <div className="price-2subscription-container standart-margin">
        {Object.values(price).filter(subscription=> subscription.type == 'minigroup').map(subscription=> <CardCostMiniGroups id={subscription.id} title={subscription.title} practice={subscription.practice} adult={subscription.cost.adult} preferential={subscription.cost.preferential}/>)}
    </div>
</section>

const PriceList=props=> <section className="main-section-white-background" id="subscriptions">
    <H1 color="grey" OpenSansRegular>Абонементы</H1>
    <div className="price-4subscription-container standart-margin">
        {Object.values(price).filter(subscription=> subscription.type == 'subscription').map(subscription=> <CardCostLightFon id={subscription.id} title={subscription.title} practice={subscription.practice} adult={subscription.cost.adult} preferential={subscription.cost.preferential}/>)}
    </div>
    <div className="standart-margin rules typo-subscription-rules ">Система абонементов клуба распространяется на все групповые парные и сольные уроки танцев в клубе «Чердак»
        за исключением направления Pole dance. Абонемент действует 30  дней со дня активации.
    </div>
    <div className="big-margin">
        <H2 color="grey" OpenSansRegular>Безлимитные абонементы</H2>
    </div>
    <div className="price-2subscription-container standart-margin">
        {Object.values(price).filter(subscription=> subscription.type == 'unlimited').map(subscription=> <CardCostLightFon id={subscription.id} title={subscription.title} practice={subscription.practice} adult={subscription.cost.adult} preferential={subscription.cost.preferential}/>)}
    </div>
</section>

const PriceRules=props=> <section className="main-section-white-background" id="rules">
    <H2 color="grey" OpenSansRegular>Правила действия абонементов клуба</H2>
    <div className="row-rules standart-margin">
        <div className="typo-subscription-rules rules-subscription">
            Абонемент приобретается при факте единовременной оплаты всей его стоимости. <br/>
            Активация абонемента происходит в день посещения первого занятия по абонементу.<br/>
            Абонемент действует 30/90 календарных дней со дня активации.<br/>
            По окончанию срока действия абонемента (30/90 дней с момента активации) действие абонемента заканчивается. Все непосещенные занятия сгорают. Все вопросы, связанные с переносом и возвратом денежные средств, рассматриваются дирекцией клуба в индивидуальном порядке по письменному заявлению.<br/>
            Безлимитные абонементы позволяют своему владельцу посещать неограниченное количество групповых уроков в ТК «Чердак» в соответствии с уровнем их танцевальной подготовки. Уровень танцевальной подготовки клиента оценивает преподаватель группы, занятия которой хочет посещать клиент.<br/>
            Абонемент является именным, занятия по нему не могут быть переданы другому лицу.<br/>
            Студенческие, школьные, пенсионные скидки предоставляются клиентам, подтверждающим свой статус соответствующими документами.<br/>
        </div>
        <div>
            <img src="/static/img/rules.jpg" alt='rules' className="rules-img"/>
        </div>
    </div>
</section>

class Price extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        const props = this.props
        return  <div>
            <PriceOneTime adult={price.oneTime.cost.adult} preferential={price.oneTime.cost.preferential}/>
            <PriceList />
            <PriceMiniGroups />
            <PriceRules />
        </div>
    }
}

export default Price
export {CardCostDarkFon}