import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerComponent } from './customer.component';
import { CustomersResolver } from '../store/resolvers/customers.resolver';

const routes: Routes = [{
  path: '',
  component: CustomerComponent,
  resolve: {
    customers: CustomersResolver
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
