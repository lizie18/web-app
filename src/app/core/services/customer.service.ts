import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Customer } from '../models/customer.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private firestore: AngularFirestore) { }

  getAllCustomers() {
    return this.firestore.collection<Customer>('customer').snapshotChanges().pipe(
    map(snaps => {
      return snaps.map(snap => {
        return {
          id: snap.payload.doc.id,
          ...snap.payload.doc.data()
        };
      });
    }));
  }

  createCustomer(data) {
    return this.firestore.collection<Customer>('customer').add(data);
  }
}
