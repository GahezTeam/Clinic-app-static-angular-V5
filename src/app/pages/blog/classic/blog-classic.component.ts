import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe, NgForOf } from '@angular/common';

import { BlogSidebarComponent } from '../sidebar/sidebar.component';
import { TitleBarComponent } from '../../../components/titlebar/title-bar.component';

@Component({
  selector: 'app-blog-classic',
  standalone: true,
  imports: [
    TitleBarComponent,
    RouterLink,
    ReactiveFormsModule,
    DatePipe,
    NgForOf,
    BlogSidebarComponent,
  ],
  templateUrl: './blog-classic.component.html',
  styleUrl: './blog-classic.component.css',
})
export class BlogClassicComponent {}
