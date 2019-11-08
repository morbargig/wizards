import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import '../styles/fentity.css'


class Fentity extends Component {
    render() {
        console.log(this.props.match.params)
        console.log(this.props.state)
        let type = this.props.match.params.fentities
        let name = this.props.match.params.name
        // console.log(fentitiesCategory)
        let fentity = this.props.state[type].find(c => c.name === name)
        console.log(this.props.state[type].find(c => c.name === name))
        return (

            <div id="creature-container">
            <Link to={`/directory/${type}`} >Back</Link>
                <h1>{fentity.name}</h1>
                <img  src={fentity.imgUrl} alt="" />
                <div className="title">Power:</div>
                <div className="power text"> {fentity.power}</div>
                <div className="other text">{fentity.other}</div>
            </div>
        )
    }
}

export default Fentity;
