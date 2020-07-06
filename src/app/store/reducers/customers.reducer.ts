import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Customer, compareCustomersName } from 'src/app/core/models/customer.interface';
import { createReducer, on } from '@ngrx/store';
import { CustomerActions } from '../actions/action-types';

export interface CustomersState extends EntityState<Customer> {
  allCustomersLoaded: boolean;
}

export const adapter = createEntityAdapter<Customer>({
  sortComparer: compareCustomersName
});

export const initialCustomersState = adapter.getInitialState({
  allCustomersLoaded: false
});

export const customersReducer = createReducer(
  initialCustomersState,

  on(CustomerActions.loadAllCustomersSucces,
    (state, action) => adapter.setAll(action.customers, {...state, allCustomersLoaded: true})
  ),

  on(CustomerActions.createCustomer, (state, action) => {
      return adapter.addOne(action.customer, state);
  })
);

export const { selectAll, selectIds } = adapter.getSelectors();
