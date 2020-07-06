import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as CustomersActions from '../actions/customers.actions';
import { map, concatMap } from 'rxjs/operators';
import { CustomerService } from '../../core/services/customer.service';
import { CustomerActions } from '../actions/action-types';

@Injectable()
export class CustomersEffects {
  constructor(
    private actions$: Actions,
    private customerService: CustomerService
  ) {}

  loadCustomers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CustomersActions.loadAllCustomers),
      concatMap(() => this.customerService.getAllCustomers()),
      map((customers) => CustomersActions.loadAllCustomersSucces({ customers }))
    )
  );

  addCustomer$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CustomerActions.createCustomer),
        concatMap((action) => this.customerService.createCustomer(action.customer))
      ),
    { dispatch: false }
  );
}
