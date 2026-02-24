import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class About {
  today = new Date();
}
