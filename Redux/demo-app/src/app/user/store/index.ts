import { reducer, IUserState } from './reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface IAppUserState {
   user: {
       list: IUserState
   }
} 

//export const reducers = { entites: reducer } 
export const reducers = { list: reducer }