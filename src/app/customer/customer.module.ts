import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { ListCustomerComponent } from './components/list-customer/list-customer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomersResolver } from '../store/resolvers/customers.resolver';
import { EffectsModule } from '@ngrx/effects';
import { CustomersEffects } from '../store/effects/customers.effects';
import { StoreModule } from '@ngrx/store';
import { customersReducer } from '../store/reducers/customers.reducer';

import { NgxMaskModule, IConfig } from 'ngx-mask';
const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
  };
};


@NgModule({
  declarations: [
    CustomerComponent,
    AddCustomerComponent,
    ListCustomerComponent,
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(maskConfigFunction),
    EffectsModule.forFeature([CustomersEffects]),
    StoreModule.forFeature('customers', customersReducer),
  ],
  providers: [CustomersResolver],
})
export class CustomerModule {}
