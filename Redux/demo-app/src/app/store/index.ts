import { ActionReducerMap } from '@ngrx/store'
import { IState, reducer, courseReducer } from './reducer';
import { Course } from '../models/course';

export interface IAppState {
    app: IState;
    courses: Course[]
}

export const reducers: ActionReducerMap<IAppState> = { app: reducer, courses: courseReducer  }