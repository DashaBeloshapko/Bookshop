import { put, takeEvery } from "redux-saga/effects";
import { IBigBook, IBook, IBooksInfo, IBooksResponse, ICart, } from "../../types";
import { ADD_TO_CART, LIMIT_BOOKS, LOAD_BIG_BOOK, LOAD_BOOKS, SET_BIG_BOOK, SET_BOOKS } from "../actionTypes";

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

function* fetchLoadBooks(action: any) {
    const { limit, search } = action.booksInfo;
    console.log(search)
    let url = `https://api.itbook.store/1.0/new?limit=${limit}`;
    if (search) {
        url = `https://api.itbook.store/1.0/search/` + search + `?limit=${limit}`
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

export { loadBooks, watcherBooks, setBooks, limitBooks, loadBigBook, addToCart }