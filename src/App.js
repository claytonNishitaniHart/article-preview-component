import React from 'react';
import './App.css';
import { FaShare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import Drawers from "./images/drawers.jpg";
import Avatar from "./images/avatar-michelle.jpg";

class App extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            clicked: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({clicked: !this.state.clicked});
    }

    render(){
        let element = document.getElementById("panel");
        if (this.state.clicked) {
            if (element !== null) {
                element.style.opacity = "1";
                element.style.bottom = "90px";
            }
        } else {
            if (element !== null) {
                element.style.opacity = "0";
                element.style.bottom = "45px";
            }
        }

        return (
            <div className="App">
                <div className={"Container"}>
                    <img className={"Image"} src={Drawers} alt={"drawers"}/>
                    <div className={"Content"}>
                        <h1 className={"Content-Heading"}>
                            Shift the overall look and feel by adding these wonderful touches to furniture in your home
                        </h1>
                        <b className={"Content-Body"}>
                            Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I've got some simple tips to help you make any room feel complete.
                        </b>
                        <div className={"Content-Info"}>
                            <img className={"Avatar"} src={Avatar} alt={"avatar"}/>
                            <span className={"Avatar-Name"}>
                                Michelle Appleton
                            </span>
                            <span className={"Avatar-Date"}>
                                28 Jun 2020
                            </span>
                            <div id={"panel"} className={"SharePanel"}>
                                <span className={"SharePanel-Text"}>
                                    S H A R E
                                </span>
                                <button className={"SharePanel-Button FB"}>
                                    <FaFacebookSquare/>
                                </button>
                                <button className={"SharePanel-Button Twitter"}>
                                    <FaTwitter/>
                                </button>
                                <button className={"SharePanel-Button Pinterest"}>
                                    <FaPinterest/>
                                </button>
                            </div>
                            <button className={this.state.clicked ? "Share-Button Share-Button-clicked" : "Share-Button Share-Button-unclicked"} onClick={() => this.handleClick()}>
                                <FaShare/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
