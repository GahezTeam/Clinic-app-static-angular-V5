import { Component } from '@angular/core';
import { TitleBarComponent } from '../../../components/titlebar/title-bar.component';
import { RouterLink } from '@angular/router';

import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-doctors',
  standalone: true,
  imports: [TitleBarComponent, RouterLink, NgForOf],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class DoctorsListComponent {}
