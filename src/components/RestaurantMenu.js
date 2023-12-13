import React from "react";
import {useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {

    const[resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(
            "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.6039168&lng=85.1360248&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
            const json = await data.json();
            console.log(json)
            setResInfo(json.data);
    };

    if(resInfo === null) return <Shimmer/>

    const{name, cuisines, costForTwo} = resInfo?.cards[5].card.card.gridElements.infoWithStyle.restaurants[3].info ;
    
    // const{itemCards} = resInfo?.;

    return(
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{costForTwo}</h3>
            <h2>Menu</h2>
            <ul>
                <li>Rice</li>
                <li>pulse</li>
                <li>Bread</li>
            </ul>
        </div>
    )
}

export default RestaurantMenu;