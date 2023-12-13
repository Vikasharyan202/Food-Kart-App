import React from "react";
import { useState } from "react";

const User = (props) => {

    const[count] = useState(0);
    const[count2] = useState(3);
    
    const{name, location} = props;

    return(
        <div className="user-card">
            <h2>count : {count}</h2>
            <h2>coun2 : {count2}</h2>
            <h2>Name : {name}</h2>
            <h3>Location : {location}</h3>
            <h4>Contact : @aryan02</h4>
        </div>
    )
}

export default User;