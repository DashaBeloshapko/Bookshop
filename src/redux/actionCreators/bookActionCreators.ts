import { put, takeEvery } from "redux-saga/effects";
import { IBook, IBooksInfo, IBooksResponse, } from "../../types";
import { LIMIT_BOOKS, LOAD_BOOKS, SET_BOOKS } from "../actionTypes";

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

function* fetchLoadBooks(action: any) {
    const { limit } = action.booksInfo;
    console.log(limit)
    const url = `https://api.itbook.store/1.0/new?limit=${limit}`;
    const resp: Response = yield fetch(`${url}`);
    const data: IBooksResponse = yield resp.json();
    yield put(setBooks(data.books));
}

function* watcherBooks() {
    yield takeEvery(LOAD_BOOKS, fetchLoadBooks)
}

export { loadBooks, watcherBooks, setBooks, limitBooks }


