import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe, NgForOf, NgIf } from '@angular/common';

import { BlogSidebarComponent } from '../sidebar/sidebar.component';
import { TitleBarComponent } from '../../../components/titlebar/title-bar.component';

@Component({
  selector: 'app-blog-details',
  standalone: true,
  imports: [
    TitleBarComponent,
    RouterLink,
    BlogSidebarComponent,
    NgIf,
    DatePipe,
    NgForOf,
    ReactiveFormsModule,
  ],
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.css',
})
export class BlogDetailsComponent {}
