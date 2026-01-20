import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Products {

  constructor() {}

  getProducts() {
    return [
      { pid: 'P-101', pname: 'Logitech Mouse', desc: '6 Button Mechanical Mouse', price: 899.00 },
      { pid: 'P-102', pname: 'JBL BT Speaker', desc: 'Waterproof Radio 360 Surround', price: 1099.00 },
      { pid: 'P-103', pname: 'Mechanical KeyBoard', desc: 'Hot-swappable RGB Backlit', price: 2395.00 },
      { pid: 'P-104', pname: 'Oculus Meta', desc: 'All-in-one Gaming Headset', price: 22450.00 }
    ];
  }
}
