
import { BigBook } from "../../components/Books"
import { IBigBook, IBook, IBooksState, ICart } from "../../types"
import { ADD_TO_CART, LIMIT_BOOKS, LOAD_BOOKS, SET_BIG_BOOK, SET_BOOKS } from "../actionTypes"

const initialState = {
    books: [] as IBook[],
    limit: 6,
    bigBook: {} as IBigBook,
    cart: [] as ICart[],
    quan: 1,
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
            return {
                ...state,
                cart: [...state.cart, action.cart],
            };
        }
        default: {
            return state;
        }
    }
}

export { booksReduser }