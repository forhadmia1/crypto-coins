import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Contact = () => {
    return (
        <div className='mt-32'>
            <div>
                <h1 className='text-4xl text-slate-700 text-center'>Contact Us, Our Office Address Down Below</h1>
                <div className='flex gap-10 justify-center mt-10'> 
                    <Link className='bg-cyan-700 p-3 rounded-lg text-white hover:text-cyan-800 font-bold' to={'bd-address'}>BD Address</Link>
                    <Link className='bg-cyan-700 p-3 rounded-lg text-white hover:text-cyan-800 font-bold' to={'us-address'}>US Address</Link>
                </div>
            </div>
            <div className='my-20'>
                    <Outlet/>
            </div>
        </div>
    );
};

export default Contact;