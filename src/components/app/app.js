import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {useStore} from 'effector-react';
import ShopHeader from '../shop-header';
import {HomePage, CartPage} from '../pages';

import {$shoppingCart} from '../../reducers';

const App = () => { 
    const {cartItems, orderTotal} = useStore($shoppingCart);

    return (
        <main role="main" className="container">
            <ShopHeader numItems={cartItems.length} total={orderTotal} />
            <Routes>
                <Route path="/"
                    exact ={true}
                    element={<HomePage />}/>

                <Route path="/home" 
                    element={<HomePage />}/>
                    
                <Route path="/cart"
                    element={<CartPage />} />
            </Routes>
        </main>
        
    );
};
export default App;