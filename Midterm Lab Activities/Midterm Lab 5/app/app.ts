import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Httpclient, Product } from './httpclient';
import { User } from './user.model';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  users: User[] = [];
  products: Product[] = [];

  constructor(private httpclient: Httpclient) {}

  ngOnInit(): void {
    // Fetch first 10 users
    this.httpclient.getUsers().subscribe(data => {
      this.users = data;
    });

    // Fetch first 5 products from DummyJSON
    this.httpclient.getProducts(5).subscribe(data => {
      this.products = data;
    });
  }
}
