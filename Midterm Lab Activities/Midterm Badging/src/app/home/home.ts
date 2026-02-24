import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService, Post } from '../services/data';
import { map, Observable } from 'rxjs';
import { TruncatePipe } from '../pipes/truncate-pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TruncatePipe],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit {
  latestPosts$: Observable<Post[]> | undefined;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.latestPosts$ = this.dataService.fetchPosts().pipe(
      map(posts => posts.slice(0, 5))
    );
  }
}
