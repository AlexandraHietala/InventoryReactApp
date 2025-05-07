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
                    <MenuItem onClick={() => setToggled(false)} toggled={toggled} breakPoint="always" icon={<Icon name="burger" className="w-6 h-6" />}></MenuItem>
                    <MenuItem onClick={() => history("/home")} icon={<Icon name="circle" className="w-4 h-4" />}>Home</MenuItem>
                    <MenuItem onClick={() => history("/collections")} icon={<Icon name="book" className="w-4 h-4" />}>Collections</MenuItem>
                    <MenuItem onClick={() => history("/settings")} icon={<Icon name="settings" className="w-4 h-4" />}>Settings</MenuItem>
                </Menu>
            </Sidebar>
            <main style={{ display: 'flex', height: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', height: '50px', paddingLeft: '20px'  }}>
                <span class="ps-menu-icon css-wx7wi4">
                    <button className="btn-menu" onClick={() => setToggled(!toggled)} type="button">
                        <Icon name="burger" className="w-6 h-6" />
                    </button>
                    </span>
                </div>
            </main>
        </div>
    );
};

export default SideBar;
