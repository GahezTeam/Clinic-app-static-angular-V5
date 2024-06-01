import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home-features',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css',
})
export class HomeFeaturesComponent {}
