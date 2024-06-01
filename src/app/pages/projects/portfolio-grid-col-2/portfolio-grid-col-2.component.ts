import { Component } from '@angular/core';
import { TitleBarComponent } from '../../../components/titlebar/title-bar.component';
import { RouterLink } from '@angular/router';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-portfolio-grid-col-4',
  standalone: true,
  imports: [TitleBarComponent, RouterLink, NgForOf],
  templateUrl: './portfolio-grid-col-2.component.html',
})
export class PortfolioGridCol2Component {}
