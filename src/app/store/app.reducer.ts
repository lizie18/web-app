import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';


export interface AppState {
  customers: reducers.CustomersState;
}



export const appReducers: ActionReducerMap<AppState> = {
  customers: reducers.customersReducer,
}
