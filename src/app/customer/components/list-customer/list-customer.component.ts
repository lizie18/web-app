import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { loadCustomers } from 'src/app/store/actions';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.scss']
})
export class ListCustomerComponent implements OnInit {
  allCustomers$: Observable<any>;
  constructor( private store: Store<AppState> ) { }

  ngOnInit(): void {
    this.allCustomers$ = this.store.select('customers');
    this.store.dispatch( loadCustomers() );
  }

}
