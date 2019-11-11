import { ActionReducerMap } from '@ngrx/store'
import { IState, reducer } from './reducer';

export interface IAppState {
    app: IState;
}

export const reducers: ActionReducerMap<IAppState> = { app: reducer }