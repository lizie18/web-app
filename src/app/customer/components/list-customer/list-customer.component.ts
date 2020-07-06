import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { Customer } from 'src/app/core/models/customer.interface';
import { selectAllCustomers, selectCustomersAges } from 'src/app/store/selectors/customers.selector';
import { firestore } from 'firebase';
// import { loadCustomers } from 'src/app/store/actions';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.scss'],
})
export class ListCustomerComponent implements OnInit {
  loading$: Observable<boolean>;
  allCustomers$: Observable<Customer[]>;
  averageAges;
  standardDeviation;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.allCustomers$ = this.store.pipe(select(selectAllCustomers));
    this.store.pipe(select(selectCustomersAges))
      .subscribe((customerAges) => {
        this.averageAges =
          customerAges.reduce((previous, current) => (current += previous)) /
          customerAges.length;
        this.standardDeviation = Math.sqrt(customerAges.reduce((previous, next) => {
          return previous + Math.pow(next - this.averageAges, 2);
        }, 0) / (customerAges.length - 1));
      });
  }
}
