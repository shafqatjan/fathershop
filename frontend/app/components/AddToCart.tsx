'use client';

import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';
const AddToCart = () => {
    const count = useSelector((state: RootState) => state.counter.value);

    return (
        <div>
            <button onClick={() => console.log('Clicked')} className='btn btn-primary'>Add to Cart {count}</button>
        </div>
    )
}

export default AddToCart