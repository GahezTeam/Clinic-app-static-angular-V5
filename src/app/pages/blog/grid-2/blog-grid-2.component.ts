import { Component } from '@angular/core';
import { DatePipe, NgForOf } from '@angular/common';
import { RouterLink } from '@angular/router';

import { TitleBarComponent } from '../../../components/titlebar/title-bar.component';

@Component({
  selector: 'app-blog-grid-4',
  standalone: true,
  imports: [TitleBarComponent, RouterLink, NgForOf, DatePipe],
  templateUrl: './blog-grid-2.component.html',
  styleUrl: './blog-grid-2.component.css',
})
export class BlogGrid2Component {}
