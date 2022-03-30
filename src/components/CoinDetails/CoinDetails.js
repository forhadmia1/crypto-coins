import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const CoinDetails = () => {
    const { id } = useParams();
    const [coin, setCoin] = useState({})

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)

        fetch(` https://api.coingecko.com/api/v3/coins/${id}`)
            .then(res => res.json())
            .then(data => setCoin(data))

        setLoading(false)
    }, [id])

    const { name, market_cap_rank, country_origin, hashing_algorithm, genesis_date, last_updated, image, community_score, developer_score, liquidity_score, public_interest_score } = coin;

    return (
        <>
            {loading ? (<Spinner/>) : (<div className='grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto my-20'>
                <div className="pl-10 order-2 mt-10 md:mt-0">
                    <h1 className='text-4xl'>General Info:</h1>
                    <hr />
                    <p>Coin Name: {name}</p>
                    <p>Market Cap Rank: {market_cap_rank}</p>
                    <p>Origin: {country_origin ? country_origin : 'Not Available'}</p>
                    <p>Hashing Algorithm: {hashing_algorithm ? hashing_algorithm : 'Not Available'}</p>
                    <p>Genesis Date: {genesis_date ? genesis_date : 'Not Available'}</p>
                    <p>Last Updated: {last_updated ? last_updated : "Not Available"}</p>
                    <h1 className='text-4xl mt-4'>Scores:</h1>
                    <hr />
                    <p>Community Score: {community_score}</p>
                    <p>Developer Score: {developer_score}</p>
                    <p>Liquidity Score: {liquidity_score}</p>
                    <p>Public Interest Score: {public_interest_score}</p>
                </div>
                <div className="flex justify-center items-center order-1">
                    <img src={image?.large} alt="" />
                </div>
            </div>)}
        </>
    );
};

export default CoinDetails;