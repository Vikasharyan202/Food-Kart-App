import React from "react";
import { URL_LOGO } from "../utilits/contents";
import { useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilits/useOnlinestatus";
import UserContext from "../utilits/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const[loginBtn, setLoginBtn] = useState("Login");
        // console.log('Header rendered')
    useEffect(() =>{
        // console.log('useEffect called')
    }, [loginBtn]);

    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);

    const cartItems = useSelector((store) => store.cart.items)

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
                    <li><Link to ="/cart">Cart[{cartItems.length}]</Link></li>
                    <button className="login" onClick={() => {
                       return loginBtn === 'Login' ? setLoginBtn('Logout')
                        : setLoginBtn('Login')
                    }}>{loginBtn}
                    </button>
                    <li>{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;