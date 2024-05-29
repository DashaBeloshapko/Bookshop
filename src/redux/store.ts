import { createStore, combineReducers, applyMiddleware } from "redux";
import { booksReduser, userReduser } from "./reducers";
import createSagaMiddleware from 'redux-saga';
import { watcherBooks, watcherUser } from "./actionCreators";
import { all } from "redux-saga/effects";

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
    yield all([
        watcherUser(),
        watcherBooks(),
    ])
}

const store = createStore(
    combineReducers({
        user: userReduser,
        books: booksReduser,
    }),
    {},
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga)

export { store };