
class Blocker {
    constructor(){
        this.blockTouch=(e)=> e.preventDefault()
        this.body = document.body
    }
    block(){
        this.body.className += " noscroll"
        this.body.addEventListener("touchmove", this.blockTouch, { passive: false })
    }
    unblock(){
        this.body.className = this.body.className.replace(" noscroll", "")
        this.body.removeEventListener("touchmove", this.blockTouch)
    }
}
const blocker = new Blocker()

export default blocker