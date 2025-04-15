import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SettingsPage from "./settings.jsx";
import CollectionsPage from "./collections.jsx";
import HomePage from "./home.jsx";

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/collections' element={<CollectionsPage />} />
                <Route path='/settings' element={<SettingsPage />} />
                <Route path='/home' element={<HomePage />} />
                <Route path='/' element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Routing;
