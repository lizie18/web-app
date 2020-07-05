import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomerService } from 'src/app/core/services/customer.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
  customerForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService
  ) { }

  ngOnInit(): void {
    this.initCustomerForm();
  }

  initCustomerForm() {
    this.customerForm = this.fb.group({
      name: [''],
      lastname: [''],
      dateOfBirth: [''],
      age: ['']
    });
  }

  sendCustomerForm() {
    this.customerService.createCustomer(this.customerForm.value).then(
      data => console.log(data)
    );
  }

}
