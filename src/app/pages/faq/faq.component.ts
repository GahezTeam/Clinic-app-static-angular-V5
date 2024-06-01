import { Component } from '@angular/core';
import { TitleBarComponent } from "../../components/titlebar/title-bar.component";

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [TitleBarComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css',
})
export class FaqComponent {}
