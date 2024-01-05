import React, {lazy, Suspense, useEffect, useState} from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utilits/UserContext";
import { Provider } from "react-redux";
import appStore from "./utilits/appStore";
import Cart from "./components/Cart";


const Grocery = lazy(() => import("./components/Grocery"));

export const App = () => {
    const [userName, setUserName] = useState();

    useEffect(() => {
        // make an API call and send username and password
        const data = {
            name: "Vikash Aryan"
        };
        setUserName(data.name);
    }, []);

    return(
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
            <div className="app">
            <Header/>
            <Outlet/>
            </div>
            </UserContext.Provider>
        </Provider>
    )
}

export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path:"/",
                element: <Body/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/grocery',
                element: (
                    <Suspense fallback={<h1>Loading.....</h1>}>
                        <Grocery/>
                    </Suspense>
                )
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu/>
            },
            {
                path: "/cart",
                element: <Cart/>
            }
            
        ],
        errorElement: <Error/>
    }, 
    
]);
