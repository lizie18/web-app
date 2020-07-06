export interface Customer {
  id: string;
  name: string;
  lastname: string;
  age: number;
  dateOfBirth: any;
}

export function compareCustomersName(c1: Customer, c2: Customer) {
  const compare = (c1.name).localeCompare(c2.name);
  if (compare > 0) {
    return 1;
  } else if (compare < 0) {
    return -1;
  } else {
    return 0;
  }
}
