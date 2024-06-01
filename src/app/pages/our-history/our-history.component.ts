import { Component } from '@angular/core';
import { TitleBarComponent } from '../../components/titlebar/title-bar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-our-history',
  standalone: true,
  imports: [TitleBarComponent, RouterLink],
  templateUrl: './our-history.component.html',
  styleUrl: './our-history.component.css',
})
export class OurHistoryComponent {}
