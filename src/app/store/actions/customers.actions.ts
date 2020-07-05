import { createAction, props, Action } from '@ngrx/store';
import { Customer } from 'src/app/core/models/customer.interface';

// export enum CustomerActionTypes {
//   LOAD_CUSTOMERS = '[Customers] Load Customers',
//   LOAD_CUSTOMERS_SUCCESS = '[Customers] Load Customers Success',
//   LOAD_CUSTOMERS_ERROR = '[Customers] Load Customers Error',
// }



export const loadCustomers = createAction('[Customers] Load Customers');

export const loadCustomersSuccess = createAction(
  '[Customers] Get Customers',
  props<{customers: Customer[]}>()
);

export const loadCustomersError = createAction(
  '[Customers] Get Customers',
  props<{error: any}>()
);

export const createCustomer = createAction(
  '[Customer] Create Customer',
  props<{customer: Customer}>()
);

export const createCustomerSucces = createAction(
  '[Customer] Create Customer Success',
  props<{ customer: Customer }>()
);

export const createCustomerError = createAction(
  '[Customer] Create Customer Error',
  props<{ error: any }>()
);
