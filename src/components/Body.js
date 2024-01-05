import React, { useContext, useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utilits/useOnlinestatus";
import { Link } from "react-router-dom";
import UserContext from "../utilits/UserContext";


const Body = () => {
    // local state variable
    const[listOfRestaurant, setListOfRestaurant] = useState([]);

    const[searchText, setSearchText] = useState("");

    const[filteredRestaurant, setFilteredRestaurant] = useState([]);

    

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.6073388&lng=85.1362679&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
            // https://corsproxy.io/? :-> this link solve CORS error for app & it's alternate of "cors plugin for browser"
        const json = await data.json();
        // console.log(json);
        setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.
            infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.
            infoWithStyle?.restaurants);
            
            console.log(json?.data?.cards[4]?.card?.card?.gridElements?.
                infoWithStyle?.restaurants);
    };

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false){
        return(
            <h1>Oops! please check your internet connection</h1>
        )
    };
    console.log(listOfRestaurant);

    const {loggedInUser, setUserName} = useContext(UserContext);
   
    return listOfRestaurant.length === 0?(<Shimmer/>):(
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" 
                           value={searchText}
                           onChange={(e) => {
                            setSearchText(e.target.value);
                           }}
                    />
                    <button onClick={() => {
                        console.log(searchText);

                        const filteredRestaurant = listOfRestaurant.filter((res) => {
                            return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                        });

                        setFilteredRestaurant(filteredRestaurant);
                    }}>search</button>
                </div>
                <button className="filter-btn" 
                onClick={() => {
                    const filteredRest = listOfRestaurant.filter((res) => {
                        return res.info.avgRating > 4;
                    })
                    setListOfRestaurant(filteredRest);
                }}>
                Top Rated Restaurant</button>
            </div>
            <div className="userContext">
                <label>Username: </label>
                <input 
                value={loggedInUser}
                onChange={(e) => setUserName(e.target.value)}
                />
            </div>
            <div className="res-container">
                {filteredRestaurant.map((restaurant) => {
                    return (
                        <Link
                        key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                        
                            <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                            
                        </Link>
                    )
                })}
                
            </div>
        </div>
    )
}
export default Body;