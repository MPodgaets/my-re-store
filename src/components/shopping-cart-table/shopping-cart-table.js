import React from "react";
import {useStore} from 'effector-react';

import {
    $shoppingCart,
    bookAddToCart,
    bookRemovedFromCart,
    allBookRemovedFromCart 
} from '../../reducers';

import './shopping-cart-table.css';

const ShoppingCartTable = () => {
    const renderRow = (item, idx) => {
        const {id, title, count, total} = item;
        return (
            <tr key={id}>
                <td>{idx + 1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>${total}</td>
                <td>
                    <button 
                        onClick={() => allBookRemovedFromCart(id)}
                        className="btn btn-outline-danger btn-sm float-right">
                        <i className="fa fa-trash-o" />
                    </button>
                    <button 
                        onClick={() => bookAddToCart(id)}
                        className="btn btn-outline-success btn-sm float-right">
                        <i className="fa fa-plus-circle" />
                    </button>
                    <button 
                        onClick={() => bookRemovedFromCart(id)}
                        className="btn btn-outline-warning btn-sm float-right">
                        <i className="fa fa-minus-circle" />
                    </button>
                </td>
            </tr>
        );
    }; 
    const {cartItems, orderTotal} = useStore($shoppingCart);

    return (
        <div className="shopping-cart-table">
            <h2>Your cart</h2>
            <table className="table">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Item</th>
                    <th>Count</th>
                    <th>Price</th>
                    <th>Action</th> 
                    </tr>    
                </thead>
                <tbody>
                    {cartItems.map(renderRow)}
                </tbody>
            </table>
            <div className="total">
                Total: ${orderTotal}
            </div>
        </div>
    );
};

export default ShoppingCartTable;
