import React from "react";
import { Routes, Route } from "react-router-dom";
import FormPreview from "../Pages/FormPreview/FormPreview";
import HomePage from "../Pages/Home/HomePage";

const RoutingComponent = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/:formName" element={<FormPreview />} />
            </Routes>
        </>
    );
};

export const Routing = React.memo(RoutingComponent);