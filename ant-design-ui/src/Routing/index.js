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
                <Route path="/:formName" element={<FormPreview />} />
                <Route path="/:formName" element={<Category />} />
                <Route path="/:formName" element={<AboutUs />} />
                <Route path="/:formName" element={<Login />} />
                <Route path="*" element={<CommonPageNotFound />} />
            </Routes>
        </>
    );
};

export const Routing = React.memo(RoutingComponent);