import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
    const products = useSelector((state)=> state.products);
    console.log(products);
    return (
        <div className='mt-6'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
            <div className='col-span-2'>
                {
                    products.length > 0 ? products.map((product, index)=>(
                        <div key={index}>{product.name}</div>
                    )) : <p>Product Not Found</p>
                } 
            </div>

            <div>Add New Products</div>
        </div>
        </div>
    );
};

export default Home;