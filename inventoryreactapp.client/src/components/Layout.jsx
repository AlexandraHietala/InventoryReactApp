import React from "react";

import SideBar from "./SideBar.jsx";
import Wrapper from "./Wrapper.jsx";

export const Layout = ({ children }) => {
    return (
        <Wrapper>     
            <div className="flex h-screen bg-gray-200"> 
                <SideBar />
                <div className="flex flex-col flex-1 overflow-hidden">
                    <main className="content">
                        <section className="sm:flex-row flex flex-col flex-1">
                            <div
                                className="content-box"
                                style={{ flexGrow: 2, flexBasis: "0%" }}>
                                {children}
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </Wrapper>
    );
};

export default Layout;
