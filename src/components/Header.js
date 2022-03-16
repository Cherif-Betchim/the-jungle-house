import '../Header.css';

import React from "react";
import logo from '../logot.png';


function Header() {
    return (
        <div>
            <div className={"logoContainer"}>
                <img className={"logo"} src={logo} alt={"qlkhflk"}/>
            </div>
            <h3>Welcome to the JUNGLE HOUSE</h3>
            <hr className={"bar"}/>
        </div>
    )
}

export default Header