import React from 'react';
import './book-list-item.css';

const BookListItem = ({book, onAddedToCart}) => {
    const {title, author, price, coverImage} = book;
    return (
        <div className="book-list-item">
            <div className="book-cover">
                <img scr={coverImage} alt="cover"/>
            </div>
            <div className="book-details">
                <span className="book-title">{title}</span>
                <div className="book-author">{author}</div>
                <div className="book-price">{price} руб</div>
                <button 
                    onClick={onAddedToCart}
                    className="btn btn-info add-to-cart">
                        AddToCart
                </button>
            </div>
        </div>
    );
};

export default BookListItem;
