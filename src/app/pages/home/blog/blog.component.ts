import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe, NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-home-blog',
  standalone: true,
  imports: [RouterLink, NgForOf, DatePipe, NgIf],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class homeBlogComponent {}
