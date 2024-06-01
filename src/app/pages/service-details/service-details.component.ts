import { Component } from '@angular/core';
import { TitleBarComponent } from "../../components/titlebar/title-bar.component";

@Component({
  selector: 'app-service-details',
  standalone: true,
  imports: [TitleBarComponent],
  templateUrl: './service-details.component.html',
  styleUrl: './service-details.component.css',
})
export class ServiceDetailsComponent {}
