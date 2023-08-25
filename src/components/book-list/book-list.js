import React, {useEffect} from 'react';
import BookListItem from '../book-list-item';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import {useStore} from 'effector-react';

import { 
    $bookList,
    bookAddToCart,
    fetchBooksRequest
} from '../../reducers';

import './book-list.css';

const BookList = ({books, onAddedToCart}) => {
    return (
        <ul className='books-list'>
                {
                    books.map((book) => {
                        return (
                            <li key={book.id}>
                                <BookListItem book={book} 
                                    onAddedToCart={() => onAddedToCart(book.id)} />
                            </li>
                        );
                    })
                }
            </ul>
    );
};

const BookListContainer = () => {
    const {books, loading, error} = useStore($bookList);
    //Получим список книг и обновим store
    useEffect(() => {fetchBooksRequest()}, 
        []);

    if (loading) {
        return <Spinner />;
    }

    if (error) {
        return <ErrorIndicator />;
    }
    return <BookList books={books} onAddedToCart={bookAddToCart}/>;
};

export default BookListContainer;
