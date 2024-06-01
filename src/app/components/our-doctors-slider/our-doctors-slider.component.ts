import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgForOf, SlicePipe } from '@angular/common';

@Component({
  selector: 'app-our-doctors-slider',
  standalone: true,
  imports: [RouterLink, NgForOf, SlicePipe],
  templateUrl: './our-doctors-slider.component.html',
  styleUrl: './our-doctors-slider.component.css',
})
export class OurDoctorsSliderComponent {}
