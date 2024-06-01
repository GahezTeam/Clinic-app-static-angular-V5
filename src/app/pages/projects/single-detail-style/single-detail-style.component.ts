import { Component } from '@angular/core';
import { TitleBarComponent } from "../../../components/titlebar/title-bar.component";

@Component({
  selector: 'app-single-detail-style',
  standalone: true,
  imports: [TitleBarComponent],
  templateUrl: './single-detail-style.component.html',
  styleUrl: './single-detail-style.component.css',
})
export class SingleDetailStyleComponent {}
