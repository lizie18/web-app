import * as customerActions from '../actions/customers.actions';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import { Customer } from 'src/app/core/models/customer.interface';
import { createReducer, on } from '@ngrx/store';

export interface CustomerState extends EntityState<Customer> {
  error: any;
}

export const adapter: EntityAdapter<Customer> = createEntityAdapter<Customer>();

export const CustomersInitState: CustomerState = adapter.getInitialState({
  error: undefined
})

export interface CustomersState {
  customers: Customer[];
  loaded: boolean;
  loading: boolean;
  error: any;
}
const _customersReducer = createReducer(
  CustomersInitState,
  on(customerActions.loadCustomers, (state) => ({ ...state, loading: true })),

  on(customerActions.loadCustomersSuccess, (state, { customers }) => ({
    ...state,
    loading: false,
    loaded: true,
    customers: [...customers],
  })),

  on(customerActions.loadCustomersError, (state, { error }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { error },
  }))



);

export function customersReducer(state, action) {
  return _customersReducer(state, action);
}
