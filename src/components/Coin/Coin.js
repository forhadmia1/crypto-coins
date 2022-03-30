import React from 'react';
import { Link } from 'react-router-dom';

const Coin = ({ coin }) => {
    const { id, symbol, name, image } = coin;

    return (
        <Link to={`/coin/${id}`}>
            <div className="flex justify-between shadow-xl p-3 items-center rounded">
                <div className=" w-16 h-16">
                    <img src={image} alt="" />
                </div>
                <div className="text-right">
                    <h2 className='text-xl font-bold text-slate-700'>{name}</h2>
                    <p className='text-slate-600 text-lg'>{symbol}</p>
                </div>
            </div>
        </Link>

    );
};

export default Coin;