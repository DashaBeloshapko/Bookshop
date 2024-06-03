
import { IBigBook, IBook, IBooksState, ICart, ILIkeBook } from "../../types"
import { ADD_TO_CART, CLEAR_CART, LIKE_BOOK, LIMIT_BOOKS, MINUS_QUAN, PLUS_QUAN, REMOVE_FROM_CART, REMOVE_FROM_LIKE_BOOK, SET_BIG_BOOK, SET_BOOKS, SET_CURRENT_PAGE } from "../actionTypes"

const loadCartFromLocalStorage = (): ICart[] => {
    try {
        const myCart = localStorage.getItem('cart');
        return myCart ? JSON.parse(myCart) : [];
    } catch (e) {
        console.warn("Could not load cart from localStorage", e);
        return [];
    }
}

const saveCartToLocalStorage = (cart: ICart[]) => {
    try {
        const myCart = JSON.stringify(cart);
        localStorage.setItem('cart', myCart);
    } catch (e) {
        console.warn("Could not save cart to localStorage", e);
    }
}

const loadFavoritesFromLocalStorage = (): ILIkeBook[] => {
    try {
        const myLikes = localStorage.getItem('favorites');
        return myLikes ? JSON.parse(myLikes) : [];
    } catch (e) {
        console.warn("Could not load favorites from localStorage", e);
        return [];
    }
}

const saveFavoritesToLocalStorage = (favorites: ILIkeBook[]) => {
    try {
        const myLikes = JSON.stringify(favorites);
        localStorage.setItem('favorites', myLikes);
    } catch (e) {
        console.warn("Could not save favorites to localStorage", e);
    }
}

const initialState = {
    books: [] as IBook[],
    limit: 6,
    bigBook: {} as IBigBook,
    cart: loadCartFromLocalStorage(),
    quan: 1,
    likeBook: loadFavoritesFromLocalStorage(),
    currentPage: 1,
}

const booksReduser = (state: IBooksState = initialState, action: any) => {
    switch (action.type) {
        case SET_BOOKS: {
            return ({
                ...state,
                books: action.books,
            })
        }
        case LIMIT_BOOKS: {
            return ({
                ...state,
                limit: action.limit,
            })
        }
        case SET_BIG_BOOK: {
            return {
                ...state,
                bigBook: action.bigBook,
            };
        }
        case ADD_TO_CART: {
            const newCart = [...state.cart];
            const index = newCart.findIndex(item => item.isbn13 === action.cart.isbn13);
            if (index !== -1) {
                newCart[index].quan = (newCart[index].quan || 1) + 1;
            } else {
                newCart.push({ ...action.cart, quantity: 1 });
            }
            saveCartToLocalStorage(newCart);
            return ({
                ...state,
                cart: newCart
            });
        }
        case REMOVE_FROM_CART: {
            const newCart = state.cart.filter(item => item.isbn13 !== action.isbn13);
            saveCartToLocalStorage(newCart);
            return ({
                ...state,
                cart: newCart
            });
        }
        case LIKE_BOOK: {
            const newFavBooks = [...state.likeBook, action.likeBook];
            saveFavoritesToLocalStorage(newFavBooks);
            return {
                ...state,
                likeBook: newFavBooks
            };
        }
        case REMOVE_FROM_LIKE_BOOK: {
            const newFavBooks = state.likeBook.filter(book => book.isbn13 !== action.isbn13);
            saveFavoritesToLocalStorage(newFavBooks);
            return {
                ...state,
                likeBook: newFavBooks
            };
        }
        case PLUS_QUAN: {
            const newCart = [...state.cart];
            const index = newCart.findIndex(item => item.isbn13 === action.isbn13);

            if (index !== -1) {
                newCart[index].quan += 1;
            }

            saveCartToLocalStorage(newCart);

            return ({
                ...state,
                cart: newCart
            });
        }
        case MINUS_QUAN: {
            const newCart = [...state.cart];
            const index = newCart.findIndex(item => item.isbn13 === action.isbn13);

            if (index !== -1) {
                newCart[index].quan -= 1;
            }

            saveCartToLocalStorage(newCart);

            return ({
                ...state,
                cart: newCart
            });
        }
        case CLEAR_CART: {
            saveCartToLocalStorage([])
            return ({
                ...state,
                cart: [],
            })
        }
        case SET_CURRENT_PAGE: {
            return ({
                ...state,
                currentPage: action.currentPage,
            })
        }
        default: {
            return state;
        }
    }
}

export { booksReduser }
