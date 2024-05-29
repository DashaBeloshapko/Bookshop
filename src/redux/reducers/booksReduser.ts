
import { IBook, IBooksState } from "../../types"
import { LIMIT_BOOKS, LOAD_BOOKS, SET_BOOKS } from "../actionTypes"

const initialState = {
    books: [] as IBook[],
    limit: 6,
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
        default: {
            return state;
        }
    }
}

export { booksReduser }