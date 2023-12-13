import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);

        console.log("child class constructor")

        this.state = {
            UserInfo: {
                name:"Dummy",
                location: "Default"
            }
        }
    }

    async componentDidMount(){
        // console.log("child component Did Mount")

        const data = await fetch("https://api.github.com/users/Vikasharyan202");
        const json = await data.json();

        this.setState({
            UserInfo: json,
        });
    }

    render(){
        console.log("child class Render ")

        const{count} = this.state;
        const{name, location, avatar_url} = this.state.UserInfo;
        return(
            <div className="user-card">
                <img src={avatar_url}/>
                <h2>Name : {name}</h2>
                <h3>Location : {location}</h3>
                <h4>Contact : @202vikash</h4>
            </div>
        )
    }
}

export default UserClass;