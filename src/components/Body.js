import React from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utilits/mockData";


const Body = () => {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {resList.map((restaurant) => {
                    return <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                })}
                
            </div>
        </div>
    )
}
export default Body;