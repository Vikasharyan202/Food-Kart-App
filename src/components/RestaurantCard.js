import React, {useContext, useEffect} from "react";
import { URL_CARD, URL_STAR } from "../utilits/contents";
import UserContext from "../utilits/UserContext";

const RestaurantCard = (props) => {
    const{resData} = props;
    const{cloudinaryImageId, name, cuisines, avgRating, costForTwo} = resData?.info;
    const {loggedInUser} = useContext(UserContext);

    return(
        <div className="res-card">
            <img className="card" src={URL_CARD + cloudinaryImageId}/>
            <h4>{name}</h4>
            <h5 className="head">{cuisines}</h5>
            <h5>{avgRating} <img className="star" src={URL_STAR}/></h5>
            <h5>Price: {costForTwo}</h5>
            <h4>{loggedInUser}</h4>
        </div>
    )
}
export default RestaurantCard;