import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { tap, first, finalize, filter } from 'rxjs/operators';
import { loadAllCustomers } from '../actions/customers.actions';
import { areCustomersLoaded } from '../selectors/customers.selector';

@Injectable()
export class CustomersResolver implements Resolve<any> {
  loading = false;
  constructor( private store: Store<AppState> ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.store.pipe(
      select(areCustomersLoaded),
      tap((customersLoaded) => {
        if (!this.loading && !customersLoaded) {
          this.loading = true;
          this.store.dispatch(loadAllCustomers());
        }
      }),
      filter(customersLoaded => customersLoaded),
      first(),
      finalize(() => (this.loading = false))
    );
  }
}
