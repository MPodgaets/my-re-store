import { createStore, createEvent } from 'effector';

import getBooksFx from '../services';

const fetchBooksSuccess = getBooksFx.done; //'FETCH_BOOKS_SUCCESS'

const fetchBooksFaulure = getBooksFx.fail; //'FETCH_BOOKS_FAULURE';

const fetchBooksRequest = createEvent('FETCH_BOOKS_REQUEST');
fetchBooksRequest.watch(() => {
    return getBooksFx();
});

const $bookList = createStore( {books: [], loading: false, error: null});

$bookList.on(fetchBooksRequest, (state, payload) => {
    return {
        ... state,
        books: [],
        loading: true,
        error: null
    }
});

$bookList.on(fetchBooksSuccess, (state, payload) => {
    const {result} = payload;
    return {
        ...state,
        books: result,
        loading: false,
        error: null
    }  
});

$bookList.on(fetchBooksFaulure, (state, payload) => {
    const {result} = payload;
    return {
        ...state,
        books: [],
        loading: false,
        error: result
    }
});

export {
    $bookList,
    fetchBooksRequest
};
