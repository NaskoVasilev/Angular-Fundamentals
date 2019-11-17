import { ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { reducer as authReducer, IState as IAuthState } from './auth/reducer'
import * as authSelectors from './auth/selectors';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { RouterStateUrl as IRouterStateUrl } from '../core/app-router.serializer';
import { environment } from 'src/environments/environment';

export const reducers = {
    auth: authReducer,
    router: routerReducer
}

export interface IAppState {
    auth: IAuthState,
    router: RouterReducerState<IRouterStateUrl>
}

export const metaReducers: MetaReducer<IAppState>[] = !environment.production ? [storeFreeze]: [];

// Auth selctors
export const getAuthStore = createFeatureSelector('auth');
export const getAuthUsername = createSelector(getAuthStore, authSelectors.getUsername);     
export const getAuthToken = createSelector(getAuthStore, authSelectors.getToken);     
export const getAuthUserId = createSelector(getAuthStore, authSelectors.getUserId);     
export const getErrorMessage = createSelector(getAuthStore, authSelectors.getErrorMessage);     
export const getIsAuthenticated = createSelector(getAuthToken, (token) => !!token);  

// Router selctors
export const getRouterStore = createFeatureSelector('router');
export const getRouterUrl = createSelector(getRouterStore, 
    (routerState: RouterReducerState<IRouterStateUrl>) => routerState ? routerState.state.url : '');