import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='flex justify-center flex-col items-center h-[100vh]'>
            <h1 className='text-xl md:text-4xl font-bold text-slate-600'>Welcome To Our Crypto Coins</h1>
            <Link className='bg-cyan-600 mt-6 p-3 rounded-3xl px-6 text-lg font-bold text-white hover:text-cyan-900' to={'/coins'}>Explore Coins</Link>
        </div>
    );
};

export default Home;