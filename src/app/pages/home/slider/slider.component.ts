import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-home-slider',
  standalone: true,
  imports: [RouterLink, NgIf, AsyncPipe, NgForOf],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
})
export class HomeSliderComponent {}
