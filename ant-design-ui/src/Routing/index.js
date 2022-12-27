import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../components/Home/HomePage";

const RoutingComponent = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                {/* <Route path="/form1" element={<ProductListing />} />
            <Route path="/form2" element={<ProductDetails />} />
            <Route path="/form3" element={<ProductDetails />} />
            <Route path="/form4" element={<ProductDetails />} />
             */}

            </Routes>
        </>
    );
};

export const Routing = React.memo(RoutingComponent);