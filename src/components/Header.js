import '../css/Header.css';

import React from "react";
import logo from '../assets/logot.png';
import {Button, Card, Container, Row, Col} from 'react-bootstrap';


function Header() {
    return (
        <div>
            <div className={"container"}>
                <img className={"logo"} src={logo} alt={"qlkhflk"}/>
            </div>
            <div>
                <h1 color={"#6DBB20"}>Welcome to the JUNGLE HOUSE</h1>
                <p className={"paragraph"}>Welcome to The Jungle House de CplusC Architectural Workshop est une réponse directe à l’urgence climatique à laquelle notre planète sont confrontés.</p>
            </div>

            <hr/>
        </div>
)
}

export default Header;