import React from "react";
import {useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { URL_MENU_API } from "../utilits/contents";
import RestaurantCard from "./RestaurantCard";
import RestaurantCategory from "./RestaurantCategory";



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
    console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    console.log(categories)

    return(
        <div className="menu">
        
            
            <div>
            <h1>{resInfo?.cards[0]?.card?.card?.info?.name}</h1>
            <p>{resInfo?.cards[0]?.card?.card?.info?.cuisines.join(", ")} - 
            {resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage}</p>
            </div>
            
            <div>
            {categories.map((category) => (
                <RestaurantCategory key={"category?.card?.card?.id"} data={category?.card?.card}/>
            ))}
            </div>
            
        </div>
    )
}

// Higher order component : input - RestaurantCard => return - RestaurantCardPromoted

// export const withPromotedLabel = (RestaurantCard) => {
//     return(props) => {
//         return(
//             <div>
//                 <label>Promoted</label>
//                 <RestaurantCard {...props}/>
//             </div>
//         );
//     };
// };

export default RestaurantMenu;