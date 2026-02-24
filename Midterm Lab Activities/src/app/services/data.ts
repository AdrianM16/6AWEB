import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap, catchError, shareReplay } from 'rxjs/operators';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable({ providedIn: 'root' })
export class DataService {
  private postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  private postsSubject = new BehaviorSubject<Post[] | null>(null);
  posts$ = this.postsSubject.asObservable();

  constructor(private http: HttpClient) {}

  fetchPosts(): Observable<Post[]> {
    if (!this.postsSubject.value) {
      this.http.get<Post[]>(this.postsUrl)
        .pipe(
          tap(posts => this.postsSubject.next(posts)),
          catchError(() => of([])),
          shareReplay(1)
        ).subscribe();
    }
    return this.posts$ as Observable<Post[]>;
  }
}
