import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../styles/home.css'
// import Fentities from './Fentities';

class Home extends Component {
    handleChange = (value) => {

        console.log(value)
    }
    render() {
        return (
            <div>
                {/* <form onSubmit={this.handleSubmit}>
                    <div id="u-input">
                        <label>
                            <input type="text" value={this.state} placeholder="Ask and you shall receive" onChange={this.handleChange} />
                        </label>
                        <div id="button">Seek</div>
                    </div>
                </form> */}

                <h1 id="home-title">Your Adventure</h1>



                <div id="home-container">

                    <div id="wizards"><span className="main-directory-text">
                        <Link to="/directory/wizards">Wizards</Link>
                    </span></div>
                    <div id="bestiary">
                        <span className="main-directory-text">
                            <Link to="/directory/bestiary">Bestiary</Link>
                        </span></div>
                    <div id="world" className="disabled"><span className="main-directory-text">World</span></div>
                    <div id="potions" className="disabled"><span className="main-directory-text">Potions</span></div>
                    <div id="deities" className="disabled"><span className="main-directory-text">Deities</span></div>
                </div>
            </div>
        );
    }
}

export default Home;