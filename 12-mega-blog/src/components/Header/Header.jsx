import React from 'react';

const Header = () => {
    return (
        <header className="bg-gray-800">
            <div className="container mx-auto px-4 py-6 flex justify-between">
                <h1 className="text-3xl text-white">My Website</h1>
                <nav className="">
                    <ul className="flex space-x-4">
                        <li><a href="/" className="text-white hover:text-gray-300">Home</a></li>
                        <li><a href="/about" className="text-white hover:text-gray-300">About</a></li>
                        <li><a href="/contact" className="text-white hover:text-gray-300">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;