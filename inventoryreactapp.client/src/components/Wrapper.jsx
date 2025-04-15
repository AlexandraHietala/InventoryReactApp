import React from 'react';

const Wrapper = ({ children }) => {
    return (
        <div className="relative min-h-screen">
            <main className="w-full min-h-screen">{children}</main>
        </div>
    );
};

export default Wrapper;
