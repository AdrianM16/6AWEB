import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Employee } from './employee';
import { Products } from './products';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  // Employees list
  public employees: {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
  }[] = [];

  // Products list
  public products: {
    pid: string;
    pname: string;
    desc: string;
    price: number;
  }[] = [];

  constructor(
    private employeeService: Employee,
    private productsService: Products
  ) {}

  ngOnInit() {
    this.employees = this.employeeService.getEmployees();
    this.products = this.productsService.getProducts();
  }
}
