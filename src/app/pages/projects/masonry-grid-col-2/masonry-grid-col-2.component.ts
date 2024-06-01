import { Component } from '@angular/core';
import { TitleBarComponent } from '../../../components/titlebar/title-bar.component';
import { RouterLink } from '@angular/router';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-masonry-grid-col-4',
  standalone: true,
  imports: [TitleBarComponent, RouterLink, NgForOf],
  templateUrl: './masonry-grid-col-2.component.html',
  styleUrl: './masonry-grid-col-2.component.css',
})
export class MasonryGridCol2Component {}
