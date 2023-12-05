import React from "react";
import { URL_LOGO } from "../utilits/contents";
import { useState, useEffect } from "react";

const Header = () => {
    const[loginBtn, setLoginBtn] = useState("Login");
        console.log('Header rendered')
    useEffect(() =>{
        console.log('useEffect called')
    }, [loginBtn]);

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
                    <button className="login" onClick={() => {
                       return loginBtn === 'Login' ? setLoginBtn('Logout')
                        : setLoginBtn('Login')
                    }}>{loginBtn}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;