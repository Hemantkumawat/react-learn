import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';
function Layout({ children }) {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

export default Layout;