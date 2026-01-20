import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Employee {

  constructor() {}

  getEmployees() {
    return [
      { id: 101, firstname: 'Joseph', lastname: 'Dizon', email: 'jdizon@student.hau.edu.ph' },
      { id: 102, firstname: 'James', lastname: 'Atienza', email: 'jatienza@student.hau.edu.ph' },
      { id: 103, firstname: 'John', lastname: 'Cena', email: 'jcena@student.hau.edu.ph' },
      { id: 104, firstname: 'Robert', lastname: 'Quintana', email: 'rquintana@student.hau.edu.ph' },

      { id: 105, firstname: 'Adrian', lastname: 'Anunciacion', email: 'amanunciacion2@student.ahu.edu.ph' }
    ];
  }
}
