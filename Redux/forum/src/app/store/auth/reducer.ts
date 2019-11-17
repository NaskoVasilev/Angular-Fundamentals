import { Actions, ActionTypes, LoginSuccess, LoginFailed, SetToken, LogoutFailed } from './actions';

export interface IState {
    userId: string;
    username: string;
    token: string;
    errorMessage: string;
}

const initialState: IState = {
    userId: null,
    username: null,
    token: null,
    errorMessage: null
}

export function reducer(state: IState = initialState, action: Actions): IState {
    switch (action.type) {
        case ActionTypes.LoginSuccess: {
            const {userId, username, token} = (action as LoginSuccess).payload;
            return { ...state, userId, username, token };
        }
        case(ActionTypes.LoginFailed): {
            const {error} = (action as LoginFailed).payload;
            return { ...state, errorMessage: error.error.description }
        }
        case(ActionTypes.SetToken): {
            const {token} = (action as SetToken).payload;
            return { ...state, token: token }
        }
        case(ActionTypes.LogoutSuccess): {
            return initialState;
        }
        default: {
            return state;
        }
    }
}