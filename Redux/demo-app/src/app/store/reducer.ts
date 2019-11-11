export interface IState {
    counter: number;
}

const defaultState = {
    counter: 0
};

export function reducer(state: IState = defaultState, action: any) {
    if(action.type === 'INC'){
        return { ...state, counter: state.counter + 1 };
    }
    else if(action.type === 'DEC'){
        return { ...state, counter: state.counter - 1 }
    }
    return state;
}
