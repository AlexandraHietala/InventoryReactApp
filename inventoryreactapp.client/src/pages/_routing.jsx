import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SettingsPage from "./settings.jsx";
import ProjectsPage from "./projects.jsx";
import MembersPage from "./members.jsx";
import AboutPage from "./about.jsx";
import HomePage from "./home.jsx";

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/about/members' element={<MembersPage />} />
                <Route path='/about/projects' element={<ProjectsPage />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/settings' element={<SettingsPage />} />
                <Route path='/' element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Routing;
