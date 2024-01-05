import React from "react";
import { URL_CARD } from "../utilits/contents";
import { Dispatch } from "@reduxjs/toolkit";
import { addItem } from "../utilits/cartSlice";
import { useDispatch } from "react-redux";

const ItemList = ({items}) => {

const dispatch = useDispatch();

const handleAddItem = (item) => {
    dispatch(addItem(item));
    console.log(item)
}
    return(
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} className="itemInfo">
                    <div>
                    <div>
                        <span>{item.card.info.name}</span>
                        <span> - ₹ {item.card.info.price / 100}</span>
                    </div>
                    <p>{item.card.info.description}</p>
                    </div>
                    <div>
                    <img src={URL_CARD + item.card.info.imageId}/>
                    <button onClick={() => handleAddItem(item)}>Add++</button>
                    </div>
                </div>
            ))}
        </div>
    ) 
}

export default ItemList;