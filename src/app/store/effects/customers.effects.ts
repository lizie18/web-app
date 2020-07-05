import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import * as customersActions from '../actions/customers.actions';
import { tap, mergeMap, map, catchError, switchMap } from 'rxjs/operators';
import { CustomerService } from '../../core/services/customer.service';

@Injectable()
export class CustomersEffects {
  constructor(
    private actions$: Actions,
    private customerService: CustomerService
  ) {}

  @Effect() loadCustomers$ = this.actions$.pipe(
    ofType(customersActions.loadCustomers),
    switchMap(() => this.customerService.getAllCustomers()),
    map((customers) => {
      return customersActions.loadCustomersSuccess({ customers });
    })
  );
}
