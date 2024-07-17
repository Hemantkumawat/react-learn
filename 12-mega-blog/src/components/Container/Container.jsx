import React from "react";

const Container = ({ children }) => {
    return (<div className="w-full max-w-7xl mx-auto px-4">
        {children} &nbsp;
    </div>);
}

export default Container;