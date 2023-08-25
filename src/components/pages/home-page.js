import React from 'react';
import BookList from '../book-list';
import ShoppingCartTable from '../shopping-cart-table/shopping-cart-table';

//
const HomePage = () => {
    return (
    <div className="home-page">
        <div>
            <BookList/>
            <ShoppingCartTable />
        </div>    
    </div>
    );
};

export default HomePage;