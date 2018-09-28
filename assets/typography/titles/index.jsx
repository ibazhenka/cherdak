import React from 'react'
import './titles.css'

/*
const H1SerifW = (props) => <h1 className="title-serif-w">{props.title}</h1>
const H1SerifB = (props) => <h1 className="title-serif-b">{props.title}</h1>
const H1SansW = (props) => <h1 className="title-sans-w">{props.title}</h1>
const H1SansG = (props) => <h1 className="title-sans-g">{props.title}</h1>

const H2SerifW = (props) => <h2 className="title-serif-w">{props.title}</h2>
const H2SerifB = (props) => <h2 className="title-serif-b">{props.title}</h2>
const H2SansW = (props) => <h2 className="title-sans-w">{props.title}</h2>
const H2SansG = (props) => <h2 className="title-sans-g">{props.title}</h2>
*/


const Title = props => {
    let className = "title"
    const {color, serif, tag} = props

    switch (color) {
        case 'grey': className += " grey"; break;
        case 'white': className += " white"; break;
        default:  className += " black"; break;
    }
    if (serif) {
       className += " EBGaramondBold";
    }else{
        className += " sans-serif";
    }
    
    return React.createElement(tag, {className:className}, props.children)
}

const H1 = props => <Title tag="h1" {...props}/>
const H2 = props => <Title tag="h2" {...props}/>
const H3 = props => <Title tag="h3" {...props}/>
const H4 = props => <Title tag="h4" {...props}/>
const H5 = props => <Title tag="h5" {...props}/>
const H6 = props => <Title tag="h6" {...props}/>


//<H1 color="gray" font="sans"/>

export  {H1, H2}



