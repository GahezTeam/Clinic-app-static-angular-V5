import { Component, HostBinding } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DatePipe, NgForOf } from '@angular/common';

@Component({
  selector: 'app-blog-sidebar',
  standalone: true,
  imports: [RouterLink, NgForOf, ReactiveFormsModule, DatePipe],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class BlogSidebarComponent {
  @HostBinding('class') class = 'col-md-12 col-lg-3 blog-left-col';
}
