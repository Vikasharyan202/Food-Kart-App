import React from "react";

/**
 * Header
 *  - Logo
 *  - Nav Items
 * 
 * Body 
 *  -Search
 *  -RestaurantContainer
 *      -RestaurantCard
 * 
 * Footer
 *  -Copyright
 *  -Links
 *  -Address
 *  -Contact
 * 
 */

const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo"
                    src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=2"
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

const Body = () => {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                
            </div>
        </div>
    )
}


const AppLayout = () => {
    return(
        <div className="app">
            <Header/>
        </div>
    )
}
export default AppLayout;