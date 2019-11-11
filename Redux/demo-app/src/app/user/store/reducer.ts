const defaultState = {
    entites: []
};

export interface IUserState {
    entites: any[];
}

export function reducer(state: IUserState = defaultState, action: any) {
    if(action.type === 'LOAD_USERS_SUCCESS'){
        return { ...state, entites: action.payload }
    }
    else if(action.type === 'DELETE_USER'){
        return { ...state, entites: state.entites.filter(user => user.id !== action.payload) }
    }
    return state;
}
