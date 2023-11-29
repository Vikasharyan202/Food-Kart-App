import React from "react";
import { URL_LOGO } from "../utilits/contents";
const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo"
                    src={URL_LOGO}
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;