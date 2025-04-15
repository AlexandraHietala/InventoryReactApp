import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import Icon from "awesome-react-icons";
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import '../styles/sidenav.css'

export const SideBar = () => {
    const history = useNavigate();
    const location = useLocation();
    const [toggled, setToggled] = React.useState(false);

    return (
        <div style={{ display: 'flex', height: '100%', minHeight: '400px' }}>
            <Sidebar onBackdropClick={() => setToggled(false)} toggled={toggled} breakPoint="always">
                <Menu>
                    <MenuItem onClick={() => setToggled(false)} toggled={toggled} breakPoint="always" icon={<Icon name="burger" />}></MenuItem>
                    <MenuItem onClick={() => history("/home")} icon={<Icon name="circle" />}>Home</MenuItem>
                    <MenuItem onClick={() => history("/collections")} icon={<Icon name="book" />}>Collections</MenuItem>
                    <MenuItem onClick={() => history("/settings")} icon={<Icon name="settings" />}>Settings</MenuItem>
                </Menu>
            </Sidebar>
            <main style={{ display: 'flex', padding: 10 }}>
                <div>
                    <button className="btn-menu" onClick={() => setToggled(!toggled)} type="button">
                        <Icon name="burger" className="w-6 h-6" />
                    </button>
                </div>
            </main>
        </div>
    );
};

export default SideBar;
