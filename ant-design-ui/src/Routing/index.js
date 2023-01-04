import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import CommonPageNotFound from "../common/CommonPageNotFound";
import HomePage from "../Pages/Home/HomePage";
import FormPreview from "../Pages/FormPreview/FormPreview";
import Category from "../Pages/Category/Category";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Login from "../Pages/Login/Login";

const RoutingComponent = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to="/Home"><HomePage /></Navigate>} />
                <Route path="/Home" element={<FormPreview />} />
                <Route path="/Category" element={<Category />} />
                <Route path="/About" element={<AboutUs />} />
                <Route path="/Login" element={<Login />} />
                <Route path="*" element={<CommonPageNotFound />} />
            </Routes>
        </>
    );
};

export const Routing = React.memo(RoutingComponent);