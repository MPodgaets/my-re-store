import { createStore} from 'effector';

const $shoppingCart = createStore({
    cartItems: [],
    orderTotal: 0
});

const updateCartItems = (cartItems, item, idx) => {
    if (idx === -1 ) {
        return [...cartItems, item];
    }
    else {
        if (item.count === 0) {
            return [...cartItems.slice(0, idx), 
                ...cartItems.slice(idx + 1)];
        } else {
            return [...cartItems.slice(0, idx), 
                item, ...cartItems.slice(idx + 1)];
        }  
    } 
};

const updateCartItem = (book, item = {}, quantity) => {
    const {id = book.id, title = book.title, count = 0, total = 0} = item;  
    return {   
        id, 
        title,
        count: count + quantity, 
        total: total + quantity*book.price
    };    
};

const updateOrder = (state, bookId, quantity) => {
    const {bookList: {books}, shoppingCart: {cartItems}} = state;

    const book = books.find((book) => book.id === bookId);
    //Найдем книгу в корзине
    const itemId = cartItems.findIndex((item) => item.id === bookId);
    const item = cartItems[itemId]; 

    const newItem = updateCartItem(book, item, quantity);
    const newCartItems = updateCartItems(cartItems, newItem, itemId); 
    return {
        cartItems: newCartItems,
        orderTotal: countOrderTotal(newCartItems)
    };
}

const countOrderTotal = (cartItems) => {
    let orderTotal = 0;

    cartItems.forEach(item => {
        orderTotal = orderTotal + item.total;    
    });

    return orderTotal;
};

export  {
    $shoppingCart,
    updateOrder
};