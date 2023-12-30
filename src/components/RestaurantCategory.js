import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data}) => {

    const [showItems, setShowItems] = useState(false)

    const handleClick = () => {
        setShowItems(!showItems)
    }

    console.log(data)
    return (
        <div className="accordian">
            {/* Accordian Header */}
            <div  className="accordianList" onClick={handleClick}>
                <span>{data.title} ({data.itemCards.length})</span>
                <span>⌄</span>
            </div>
            {/* Accordian Body */}
            <div className="itemList">
                {showItems && <ItemList items={data.itemCards}/>}
            </div>
            
        </div>
    )
}  
export default RestaurantCategory;