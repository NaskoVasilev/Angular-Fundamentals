import { Actions, ActionTypes, LoginSuccess } from './actions';

export interface IState {
    userId: string;
    username: string;
}

const initialState: IState = {
    userId: null,
    username: null
}

export function reducer(state: IState = initialState, action: Actions) {
    switch (action.type) {
        case ActionTypes.LoginSuccess: {
            const {userId, username} = (action as LoginSuccess).payload;
            return { ...state, userId, username };
        }
        default: {
            return state;
        }
    }
}