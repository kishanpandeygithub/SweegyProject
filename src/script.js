import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./component/Home";
import Restaurant from "./component/Restaurant";
import { BrowserRouter, Routes, Route, Link } from 'react-router';
import RestaurantMenu from "./component/RestaurantMenu";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/restaurant" element={<Restaurant></Restaurant>}></Route>
                <Route path="/city/delhi/:id" element={<RestaurantMenu></RestaurantMenu>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

const createRoot = ReactDOM.createRoot(document.getElementById("root"));
createRoot.render(<App></App>)