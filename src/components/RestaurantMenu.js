import React from "react";
import {useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { URL_MENU_API } from "../utilits/contents";

const RestaurantMenu = () => {

   const[resInfo, setResInfo] = useState(null);

   const {resId} = useParams();
   

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(URL_MENU_API + resId);
        
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    };

    // const { name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
    console.log(resInfo?.cards[0]?.card?.card?.info);

    if(resInfo === null){
        return <Shimmer/>
    }

    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    return(
        <div className="menu">
        
            <h1>{resInfo?.cards[0]?.card?.card?.info?.name}</h1>
            <h3>{resInfo?.cards[0]?.card?.card?.info?.cuisines.join(", ")}</h3>
            <h3>{resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage}</h3>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item => (
                    <li>{item.card.info.name} - Rs. {item.card.info.price / 100}</li>
                )))}
            </ul>
        </div>
    )
}

export default RestaurantMenu;