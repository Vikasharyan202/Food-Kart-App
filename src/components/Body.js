import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";


const Body = () => {
    // local state variable
    const[listOfRestaurant, setListOfRestaurant] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.6039168&lng=85.1360248&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        console.log(json);
        setListOfRestaurant(json.data.cards[5].card.card.gridElements.
            infoWithStyle.restaurants)
            
    };

    return listOfRestaurant.length === 0? (<Shimmer/>):(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" 
                onClick={() => {
                    const filteredRest = listOfRestaurant.filter((res) => {
                        return res.info.avgRating > 4;
                    })
                    setListOfRestaurant(filteredRest);
                }}>
                Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {listOfRestaurant.map((restaurant) => {
                    return <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                })}
                
            </div>
        </div>
    )
}
export default Body;