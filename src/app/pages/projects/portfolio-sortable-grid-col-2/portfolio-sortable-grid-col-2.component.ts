import { Component } from '@angular/core';
import { TitleBarComponent } from '../../../components/titlebar/title-bar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-portfolio-sortable-grid-col-4',
  standalone: true,
  imports: [TitleBarComponent, RouterLink],
  templateUrl: './portfolio-sortable-grid-col-2.component.html',
  styleUrl: './portfolio-sortable-grid-col-2.component.css',
})
export class PortfolioSortableGridCol2Component {}
