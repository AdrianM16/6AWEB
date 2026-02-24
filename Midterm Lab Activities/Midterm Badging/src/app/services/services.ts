import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService, Post } from '../services/data';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable, combineLatest, startWith, map } from 'rxjs';
import { TruncatePipe } from '../pipes/truncate-pipe';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TruncatePipe],
  templateUrl: './services.html',
  styleUrls: ['./services.css']
})
export class ServicesPage implements OnInit {
  searchControl = new FormControl('');
  filteredPosts$: Observable<Post[]> | undefined;
  loading = true;
  error = false;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    const posts$ = this.dataService.fetchPosts();

    this.filteredPosts$ = combineLatest([
      posts$,
      this.searchControl.valueChanges.pipe(startWith(''))
    ]).pipe(
      map(([posts, search]) => {
        const query = (search ?? '').toLowerCase();
        return posts.filter(p =>
          p.title.toLowerCase().includes(query) ||
          p.body.toLowerCase().includes(query)
        );
      })
    );

    posts$.subscribe({
      next: () => this.loading = false,
      error: () => { this.error = true; this.loading = false; }
    });
  }
}
