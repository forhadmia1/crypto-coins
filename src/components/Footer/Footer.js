import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillGithub,AiOutlineTwitter } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { ImLinkedin2 } from 'react-icons/im';

const Footer = () => {
    return (
        <footer className='mx-auto w-full mt-4'>
            <div className='flex gap-16 justify-center text-2xl text-slate-400'>
                <Link className='hover:text-slate-600' to={''}><BsFacebook/></Link>
                <Link className='hover:text-slate-600' to={''}><AiOutlineTwitter/></Link>
                <Link className='hover:text-slate-600' to={''}><AiFillGithub/></Link>
                <Link className='hover:text-slate-600' to={''}><ImLinkedin2/></Link>
            </div>
            <p className='text-center py-10 text-xl text-slate-700'>All right reserved by &copy;Crypto Coins</p>
        </footer>
    );
};

export default Footer;