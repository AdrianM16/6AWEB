import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { User } from './user.model';

export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  brand: string;
}

@Injectable({
  providedIn: 'root'
})
export class Httpclient {

  private usersUrl = 'https://jsonplaceholder.typicode.com/users';
  private usersStorageKey = 'users';

  private productsUrl = 'https://dummyjson.com/products';
  private productsStorageKey = 'products';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    const cachedData = localStorage.getItem(this.usersStorageKey);

    if (cachedData) {
      return of(JSON.parse(cachedData));
    }

    return this.http.get<User[]>(this.usersUrl).pipe(
      tap(users => {
        localStorage.setItem(this.usersStorageKey, JSON.stringify(users));
      })
    );
  }

  // Products from DummyJSON
  getProducts(limit: number = 5): Observable<Product[]> {
    const cachedData = localStorage.getItem(this.productsStorageKey);

    if (cachedData) {
      return of(JSON.parse(cachedData).slice(0, limit));
    }

    return this.http.get<{ products: Product[] }>(this.productsUrl).pipe(
      map(res => res.products.slice(0, limit)),
      tap(products => {
        localStorage.setItem(this.productsStorageKey, JSON.stringify(products));
      })
    );
  }
}
