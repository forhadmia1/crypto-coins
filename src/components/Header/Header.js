import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <nav className='flex justify-between items-center bg-cyan-700 px-16 py-3'>
            <div className='text-2xl font-bold hidden md:block text-white'>
                <Link to={'/'}>Crypto Coins</Link>
            </div>
            <div className='text-xl flex gap-6'>
                <CustomLink to={'/'}>Home</CustomLink>
                <CustomLink to={'/coins'}>Coins</CustomLink>
                <CustomLink to={'/contact'}>Contact</CustomLink>
                <CustomLink to={'/about'}>About</CustomLink>
            </div>
        </nav>
    );
};

export default Header;