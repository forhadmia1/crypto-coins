import React from 'react';

const UsAddress = () => {
    return (
        <div className='flex justify-between items-center bg-cyan-200 max-w-7xl mx-auto p-8'>
            <address>
                <p>Street: 1203 SN Street</p>
                <p>City: New York</p>
                <p>Phone: +1(607)2333333</p>
                <p>Email: contact.usa@cc.com</p>
            </address>
            <h1 className='text-2xl font-bold text-slate-600'>US Office</h1>
        </div>
    );
};

export default UsAddress;