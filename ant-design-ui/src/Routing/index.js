import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/Home/HomePage";

const RoutingComponent = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/:formName" element={<HomePage />} />
            </Routes>
        </>
    );
};

export const Routing = React.memo(RoutingComponent);