import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../styles/fentity-directory.css'

class Fentities extends Component {
    render() {
        console.log(this.props.match)
        // console.log(this.props.match)
        console.log(this.props.state)
        const fentitiesCategory = this.props.match.params.fentities
        console.log(fentitiesCategory)
        console.log(this.props.state[fentitiesCategory])
        return (
            <div>
                <h1 id="fentities-title">{fentitiesCategory}</h1>
                <div id="fentities-container">
                    {this.props.state[fentitiesCategory].map(f => {
                        return (
                            <div className="mini">
                             <Link to={`/directory/${fentitiesCategory}/${f.name}`} >
                                  <img id={f.power === "Handsome" ? "doubleSizeBy3" : "null"  } className="directory-img" src={f.imgUrl} alt="" />
                                 </Link>  
                                <span> <Link to={`/directory/${fentitiesCategory}/${f.name}`} >{f.name}</Link></span>
                            </div>
                        )
                    })}
                </div>
            </div>)
    }
}

export default Fentities