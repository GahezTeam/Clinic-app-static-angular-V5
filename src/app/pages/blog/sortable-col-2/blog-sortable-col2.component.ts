import { Component } from '@angular/core';
import { TitleBarComponent } from '../../../components/titlebar/title-bar.component';
import { RouterLink } from '@angular/router';

import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-blog-sortable-col-4',
  standalone: true,
  imports: [TitleBarComponent, RouterLink, NgForOf],
  templateUrl: './blog-sortable-col2.component.html',
  styleUrl: './blog-sortable-col2.component.css',
})
export class BlogSortableCol2 {}
