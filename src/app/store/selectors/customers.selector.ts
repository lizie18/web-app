import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CustomersState } from '../reducers/customers.reducer';

import * as fromCustomers from '../reducers/customers.reducer';

export const selectCustomersState = createFeatureSelector<CustomersState>('customers');

export const selectAllCustomers = createSelector(
  selectCustomersState,
  fromCustomers.selectAll
);


export const selectCustomersAges = createSelector(
  selectAllCustomers,
  customers => customers.map(customer => {
    return customer.age;
  })
);


export const areCustomersLoaded = createSelector(
  selectCustomersState,
  state => state.allCustomersLoaded
);
