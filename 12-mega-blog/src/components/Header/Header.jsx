import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LogoutBtn from './LogoutBtn';

const Header = () => {
    const authStatus = useSelector((state) => state.auth.status);
    const navigate = useNavigate();
    const navItems = [
        {
            name: 'Home',
            slug: '/',
            active: !authStatus
        },
        {
            name: 'Login',
            slug: '/',
            active: !authStatus
        },
        {
            name: 'Sign Up',
            slug: '/',
            active: !authStatus
        },
        {
            name: 'All Posts',
            slug: '/',
            active: authStatus
        },
        {
            name: 'Add Post',
            slug: '/',
            active: authStatus
        }
    ];
    return (
        <header className="bg-gray-800">
            <Container className="container mx-auto px-4 py-6 flex justify-between">
                <div>
                    <Link to='/'>
                        <Logo width='70px' />
                    </Link>
                    <h1 className="text-3xl text-white">My Website</h1>
                </div>
                <nav className="">
                    <ul className="flex space-x-4">
                        {navItems.forEach((item) =>
                        (item.active ?
                            (<li key={item.name} className="px-2 border-2 border-l-gray-500">
                                <button href="/"
                                    onClick={() => navigate(item.slug)}
                                    className="text-white hover:text-gray-300">
                                    {item.name}
                                </button></li>)
                            : ''))}
                        {authStatus && (
                            <li>
                                <LogoutBtn />
                            </li>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>
    );
};

export default Header;