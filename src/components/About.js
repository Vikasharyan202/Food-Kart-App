import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";


class About extends Component{
    constructor(props){
        super(props);

        console.log("Parent constructor");
    }

    componentDidMount(){
        console.log("Parent component Did Mount")
    }

    render() {
        console.log("Parent Render");
        return(
            <div>
                <h1>About</h1>
                <h4>This is an about page</h4>
    
                <UserClass name={"vikash"} location={"Bangalore"}/>
            </div>
        )
    }
}

// const About = () => {
//     return(
//         <div>
//             <h1>About</h1>
//             <h4>This is an about page</h4>

//             <UserClass name={"vikash"} location={"Bangalore"}/>
//         </div>
//     )
// }

export default About;