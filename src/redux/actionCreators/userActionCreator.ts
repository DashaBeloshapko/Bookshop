import { takeEvery, put } from "redux-saga/effects";
import { ACTIVATE_SIGN_UP, GET_USER_INFO, SET_USER, SIGN_IN_USER, SIGN_UP_USER } from "../actionTypes";
import { IActivationInfo, ISignInUserInfo, ISignUp, IUser } from "../../types";

const signUpUser = (signUpData: ISignUp) => ({
    type: SIGN_UP_USER,
    signUpData,
})

const activateSignUp = (activationInfo: IActivationInfo) => ({
    type: ACTIVATE_SIGN_UP,
    activationInfo,
})

const signInUser = (signInUserInfo: ISignInUserInfo) => ({
    type: SIGN_IN_USER,
    signInUserInfo,
})

const getUserInfo = () => ({
    type: GET_USER_INFO,
})

const setUser = (user: IUser) => ({
    type: SET_USER,
    user,
})

function* signUp(action: any) {
    const resp: Response = yield fetch(`https://studapi.teachmeskills.by/auth/users/`, {
        method: 'POST',
        body: JSON.stringify(action.signUpData),
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

function* activationUser(action: any) {
    const resp: Response = yield fetch(`https://studapi.teachmeskills.by/auth/users/activation/`, {
        method: 'POST',
        body: JSON.stringify(action.activationInfo),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

function* signIn(action: any) {
    const resp: Response = yield fetch(`https://studapi.teachmeskills.by/auth/jwt/create/`, {
        method: 'POST',
        body: JSON.stringify(action.signInUserInfo),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (resp.status === 200) {
        const tokens: { access: string, refresh: string } = yield resp.json()
        localStorage.setItem('access', tokens.access)
        localStorage.setItem('refresh', tokens.refresh)
        window.location.pathname = '/posts'
    }
}

function* getToken() {
    const token = localStorage.getItem('access')
    const resp: Response = yield fetch(`https://studapi.teachmeskills.by/auth/jwt/verify/`, {
        method: 'POST',
        body: JSON.stringify({ token: token }),
        headers: {
            'Content-Type': 'application/json',
        }
    })
    if (resp.status === 200) {
        console.log('старый')
        return token
    } else {
        const refresh = localStorage.getItem('refresh')
        const resp: Response = yield fetch(`https://studapi.teachmeskills.by/auth/jwt/refresh/`, {
            method: 'POST',
            body: JSON.stringify({ refresh: refresh }),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        if (resp.status === 200) {
            const newAccess: { access: string } = yield resp.json()
            localStorage.setItem('access', newAccess.access)
            console.log('новый')
            return newAccess.access
        }
    }
}

function* fetchUserInfo() {
    const token: string = yield getToken()
    const resp: Response = yield fetch(`https://studapi.teachmeskills.by/auth/users/me/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
    if (resp.status === 200) {
        const user: IUser = yield resp.json()
        yield put(setUser(user))
    }
}

function* watcherUser() {
    yield takeEvery(SIGN_UP_USER, signUp)
    yield takeEvery(ACTIVATE_SIGN_UP, activationUser)
    yield takeEvery(SIGN_IN_USER, signIn)
    yield takeEvery(GET_USER_INFO, fetchUserInfo)
}

export { signUpUser, watcherUser, activateSignUp, signInUser, getUserInfo, setUser, getToken }