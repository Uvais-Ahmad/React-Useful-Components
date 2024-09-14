import React from 'react'
import { CustomCartProvider } from '../config/context';
import Items from './Items';
import Navbar from './Navbar';

function CustomContext() {
    return (
        <CustomCartProvider>
            <div className='App'>
                <h2>Shopping Cart</h2>
                <Navbar />
                <Items />
            </div>
        </CustomCartProvider>
    );
}

export default CustomContext
