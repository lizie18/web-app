import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { CustomerService } from 'src/app/core/services/customer.service';
import { DateService } from 'src/app/core/services/date.service';
import { CustomValidators } from 'src/app/utils/validators';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss'],
})
export class AddCustomerComponent implements OnInit {
  customerForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService,
    private dateService: DateService
  ) {}

  ngOnInit(): void {
    this.initCustomerForm();
  }

  private initCustomerForm() {
    this.customerForm = this.fb.group(
      {
        name: ['', [Validators.required, Validators.minLength(3)]],
        lastname: ['', [Validators.required, Validators.minLength(3)]],
        dateOfBirth: ['', [Validators.required]],
        age: ['0', [Validators.required]],
      },
      {
        validator: CustomValidators.validDate(
          'dateOfBirth',
          this.dateService
        ),
      }
    );
  }

  fieldHasError(field: AbstractControl, errorName: string): boolean {
    return field.hasError(errorName);
  }

  fieldIsValid(field: AbstractControl): boolean {
    return field.valid && field.touched;
  }

  fieldIsInvalid(field: AbstractControl): boolean {
    return field.invalid && field.touched;
  }

  // Getters
  get name() {
    return this.customerForm.get('name');
  }

  get lastname() {
    return this.customerForm.get('lastname');
  }

  get dateOfBirth() {
    return this.customerForm.get('dateOfBirth');
  }

  sendCustomerForm() {
    const form = {...this.customerForm.value};
    form.age = this.dateService.calculateAge(form.dateOfBirth);
    form.dateOfBirth = this.dateService.toDate(form.dateOfBirth);

    this.customerForm.reset({age: 0});
    this.customerService
      .createCustomer(form);
  }
}
