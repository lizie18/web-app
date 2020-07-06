import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  constructor() {}

  validateDate(dateFormated: string) {
    if (dateFormated.length !== 8) {
      return 'Invalid Date';
    }

    const date = this.toDate(dateFormated);;

    if (new Date() < date) {
      return 'Invalid Date';
    }
    return date;
  }

  toDate(dateFormated: string) {
    const dd = dateFormated.slice(0, 2);
    const mm = dateFormated.slice(2, 4);
    const yyyy = dateFormated.slice(4, 8);

    return new Date(Number(yyyy), Number(mm) - 1, Number(dd));
  }

  calculateAge(dateFormated: string) {
    const today = new Date();
    const dateOfBirth = this.toDate(dateFormated);
    let age = today.getFullYear() - dateOfBirth.getFullYear();
    const month = today.getMonth() - dateOfBirth.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < dateOfBirth.getDate())) {
      age = age - 1;
    }
    return age;
  }
}
