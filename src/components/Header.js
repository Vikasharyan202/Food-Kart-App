import React from "react";
import { URL_LOGO } from "../utilits/contents";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilits/useOnlinestatus";

const Header = () => {
    const[loginBtn, setLoginBtn] = useState("Login");
        console.log('Header rendered')
    useEffect(() =>{
        console.log('useEffect called')
    }, [loginBtn]);

    const onlineStatus = useOnlineStatus();

    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo"
                    src={URL_LOGO}
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status:{onlineStatus?"✅":"❌"}</li>
                    <li><Link to ="/">Home</Link></li>
                    <li><Link to ="/about">About Me</Link></li>
                    <li><Link to ="/contact">Contact Us</Link></li>
                    <li><Link to ="/grocery">Grocery</Link></li>
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