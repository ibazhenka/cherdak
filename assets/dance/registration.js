import React from 'react'
import {directions, teachers} from '../../data'
import Schedule from '../schedule/table/table/index.jsx'
import Panel from '../schedule/table/panel/index.jsx'
import Checkbox from '../schedule/table/checkbox/index.jsx'
import {getTeacherFullName, getTeacherDirections} from '../schedule/table/table/data-builder.js' 
import {TeacherCard} from '../teacher/index.jsx'
import Modal from 'react-modal'
import {H1, H2} from '../typography/titles/index.jsx'
import blocker from '../blocker/blocker.js'
Modal.setAppElement('#modal')

function getDanceTitle(){
    let danceTitle= new Set()
    for (const dir of Object.values(directions)) {
        danceTitle.add(dir.title)
    }
    return Array.from(danceTitle).sort()
}

const danceTitle = getDanceTitle()

// class Blocker {
//     constructor(){
//         this.blockTouch=(e)=> e.preventDefault()
//         this.body = document.body
//     }
//     block(){
//         this.body.className += " noscroll"
//         this.body.addEventListener("touchmove", blockTouch, { passive: false })
//     }
//     unblock(){
//         this.body.className = this.body.className.replace(" noscroll", "")
//         this.body.removeEventListener("touchmove", blockTouch)
//     }
// }
// const blocker = new Blocker()

class RegistrationWindow extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            modalIsOpen: false
        };
    }
    openModal() {
        this.setState({modalIsOpen: true});        
        blocker.block()
    }
    closeModal() {
        this.setState({modalIsOpen: false});
        blocker.unblock()
    }
    
    render() {
        return <div>
            <button onClick={() => this.openModal()} className="typo-button button-short-main">Пробный урок</button>
            <Modal className="Modal"
                overlayClassName="Overlay"
                isOpen={this.state.modalIsOpen}
                onRequestClose={() => this.closeModal()}
                contentLabel="Example Modal"
            >

            <H2 color="white" OpenSansRegular>Записаться на урок</H2>
            <button className="close-button" onClick={()=>this.closeModal()}>&#215;</button>
            <form>
                <div className="form-container">
                    <input className="form-input" type="text" required pattern="^[A-Za-zА-Яа-яЁё]+$" placeholder="Имя" name="Имя"/>
                    <input className="form-input" type="text" pattern="^[A-Za-zА-Яа-яЁё]+$" placeholder="Фамилия" name="Фамилия"/>
                    <input className="form-input" type="tel" required pattern="[0-9]{,11}" placeholder="Телефон" name="Телефон"/>
                    <input className="form-input" type="email" placeholder="Email" name="Email"/>
                </div>
                <Panel title="Выберите направление:" page="registration">
                    {danceTitle.map(dance=><Checkbox title={dance} />)}
                </Panel>
                <div className="button-submit-registration">
                    <input className="button typo-button button-submit-registration" type="submit" value="Записаться на урок"/>
                </div> 
                <div className="accept-text">
                    ОТПРАВЛЯЯ ДАННЫЕ ФОРМЫ, Я ТЕМ САМЫМ СОГЛАШАЮСЬ НА ОБРАБОТКУ ПЕРСОНАЛЬНЫХ ДАННЫХ
                </div>
            </form>
            </Modal>
        </div>
    }
}
export default RegistrationWindow