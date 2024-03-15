import React from 'react'
import AddToCart from '../AddToCart';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';
// import styles from './ProductCard.module.css';

const ProductCard = () => {
    const count = useSelector((state: RootState) => state.counter.value);

    return (
        <div className=''>
            {count}
            <AddToCart />
        </div>
    )
}

export default ProductCard