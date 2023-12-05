import React from "react";
import {createRoot} from "react-dom/client";
import {App, appRouter} from "./App";
import { RouterProvider } from "react-router-dom";

const root = createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>)
