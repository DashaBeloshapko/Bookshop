import { IUser, IUserState } from "../../types";
import { SET_USER } from "../actionTypes";

const initialState = {
    user: {} as IUser,
}

const userReduser = (state: IUserState = initialState, action: any) => {
    switch (action.type) {
        case SET_USER: {
            return ({
                ...state,
                user: action.user,
            })
        }
        default: {
            return state;
        }
    }
}

export { userReduser }