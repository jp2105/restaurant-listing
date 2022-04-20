import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import Home from "../Pages/Home";
import RestaurantDetail from "../Pages/RestaurantDetail";
const AppNavigation = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/restaurant" element={<RestaurantDetail />} />
            </Routes>
        </Router>
    )
}

export default AppNavigation;