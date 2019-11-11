import { Course } from '../models/course';
import { Action } from '@ngrx/store';

export interface IState {
    counter: number;
}

const defaultState = {
    counter: 0
};

export function reducer(state: IState = defaultState, action: any) {
    if (action.type === 'INC') {
        return { ...state, counter: state.counter + 1 };
    }
    else if (action.type === 'DEC') {
        return { ...state, counter: state.counter - 1 }
    }
    return state;
}

const defaultCourseState = [];

export function courseReducer(state: Course[] = defaultCourseState, action: Actions) {
    switch (action.type) {
        case ADD_COURSE: {
            let newState = [ ...state, action.payload ];
            return newState;
        }
        case REMOVE_COURSE: {
            let targetCourse = state[action.payload];
            return state.filter(course => course != targetCourse); 
        }
        default:
            return state;
    }
}

export const ADD_COURSE = '[COURSE] Add';
export const REMOVE_COURSE = '[COURSE] Remove';

export class AddCourse implements Action {
    readonly type = ADD_COURSE;
    constructor(public payload: Course) { }
}

export class RemoveCourse implements Action {
    readonly type = REMOVE_COURSE;
    constructor(public payload: number) { }
}

export type Actions = AddCourse | RemoveCourse
