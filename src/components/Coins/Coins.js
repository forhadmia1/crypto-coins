import React, { useEffect, useState } from 'react';
import Coin from '../Coin/Coin';

const Coins = () => {
    const [coins, setCoins] = useState([])

    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
            .then(res => res.json())
            .then(data => setCoins(data))
    }, [])

    console.log(coins)

    return (
        <div>
            <div className='mt-20'>
                <h1 className='text-4xl font-bold text-slate-600 text-center'>Available Crypto Currencies</h1>
                <p className='text-xl font-bold text-slate-500 text-center mt-4'>Total Coins: {coins.length}</p>
            </div>
            <div className="grid grid-cols-3 gap-20 px-20 my-10">
                {
                    coins.map(coin=> <Coin key={coin.id} coin={coin}></Coin>)
                }
            </div>
        </div>
    );
};

export default Coins;