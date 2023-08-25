import { combine, createEvent, sample } from 'effector';
import {
    $shoppingCart,
    updateOrder
} from './shopping-cart';

import {
    $bookList,
    fetchBooksRequest
} from './book-list';

const bookAddToCart = createEvent('BOOK_ADDED_TO_CART');

const bookRemovedFromCart = createEvent('BOOK_REMOVED_FROM_CART');

const allBookRemovedFromCart = createEvent('ALL_BOOK_REMOVED_FROM_CART');

const $state = combine({bookList: $bookList, shoppingCart: $shoppingCart} );

const addingBook = sample({
    source: $state,
    clock: bookAddToCart,
    fn: ((state, bookId) => {
        return updateOrder(state, bookId, 1)})
});

const removingBook = sample({
    source: $state,
    clock: bookRemovedFromCart,
    fn: ((state, bookId) => {
        return updateOrder(state, bookId, -1)})
});

const removingAllBook = sample({
    source: $state,
    clock: allBookRemovedFromCart,
    fn: ((state, bookId) => {
        const {count} = state.shoppingCart.cartItems.find((item) => item.id === bookId);
        return updateOrder(state, bookId, -1*count)})
});

$shoppingCart.on([addingBook, removingBook, removingAllBook], 
    (state, payload) => {
    return {...payload};
});

export {  
    $shoppingCart,
    $bookList,
    bookAddToCart,
    bookRemovedFromCart,
    allBookRemovedFromCart,
    fetchBooksRequest
};