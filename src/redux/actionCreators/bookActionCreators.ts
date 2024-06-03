import { put, takeEvery } from "redux-saga/effects";
import { IBigBook, IBook, IBooksInfo, IBooksResponse, ICart, ILIkeBook, } from "../../types";
import { ADD_TO_CART, CLEAR_CART, LIKE_BOOK, LIMIT_BOOKS, LOAD_BIG_BOOK, LOAD_BOOKS, MINUS_QUAN, PLUS_QUAN, REMOVE_FROM_CART, REMOVE_FROM_LIKE_BOOK, SET_BIG_BOOK, SET_BOOKS, SET_CURRENT_PAGE } from "../actionTypes";

const setBooks = (books: IBook[]) => ({
    type: SET_BOOKS,
    books,
})

const loadBooks = (booksInfo: IBooksInfo) => ({
    type: LOAD_BOOKS,
    booksInfo,
})

const limitBooks = (limit: number) => ({
    type: LIMIT_BOOKS,
    limit,
})

const loadBigBook = (isbn13: string) => ({
    type: LOAD_BIG_BOOK,
    isbn13,
})

const setBigBook = (bigBook: IBigBook) => ({
    type: SET_BIG_BOOK,
    bigBook,
})

const addToCart = (cart: ICart) => ({
    type: ADD_TO_CART,
    cart,
});

const likeBook = (likeBook: ILIkeBook) => ({
    type: LIKE_BOOK,
    likeBook,
})

const removeFromCart = (isbn13: number) => ({
    type: REMOVE_FROM_CART,
    isbn13,
})

const removeFromLikeBook = (isbn13: number) => ({
    type: REMOVE_FROM_LIKE_BOOK,
    isbn13,
})

const plusQuan = (isbn13: number) => ({
    type: PLUS_QUAN,
    isbn13,
})

const minusQuan = (isbn13: number) => ({
    type: MINUS_QUAN,
    isbn13,
})

const clearCart = () => ({
    type: CLEAR_CART,
})

const setCurrentPage = (currentPage: number) => ({
    type: SET_CURRENT_PAGE,
    currentPage,
})

function* fetchLoadBooks(action: any) {
    const { limit, search, currentPage } = action.booksInfo;
    let url = `https://api.itbook.store/1.0/new`;
    if (search) {
        url = `https://api.itbook.store/1.0/search/` + search
    }
    const resp: Response = yield fetch(`${url}`);
    const data: IBooksResponse = yield resp.json();
    yield put(setBooks(data.books));
}

function* fetchBigBook(action: any) {
    const resp: Response = yield fetch(`https://api.itbook.store/1.0/books/${action.isbn13}`)
    const data: IBigBook = yield resp.json();
    yield put(setBigBook(data));
}

function* watcherBooks() {
    yield takeEvery(LOAD_BOOKS, fetchLoadBooks)
    yield takeEvery(LOAD_BIG_BOOK, fetchBigBook)
}

export {
    loadBooks,
    watcherBooks,
    setBooks,
    limitBooks,
    loadBigBook,
    addToCart,
    likeBook,
    removeFromCart,
    removeFromLikeBook,
    plusQuan,
    minusQuan,
    clearCart,
    setCurrentPage,
}