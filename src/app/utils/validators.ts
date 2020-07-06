import { FormGroup } from '@angular/forms';

export class CustomValidators {
  constructor() {}

  static validDate(fieldName: string, dateService) {
    return (form: FormGroup) => {
      const dateField = form.controls[fieldName];

      if (dateField.errors && !dateField.errors.mustMatch) {
        return;
      }

      if (dateService.validateDate(dateField.value) == 'Invalid Date') {
        dateField.setErrors({ invalid_date: true });
      } else {
        dateField.setErrors(null);
      }

    };
  }
}
