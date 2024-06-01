import { Component, Input } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-title-bar',
  standalone: true,
  imports: [NgForOf, NgIf],
  templateUrl: './title-bar.component.html',
  styleUrl: './title-bar.component.css',
})
export class TitleBarComponent {
  @Input() imgSrc: string | undefined;
  @Input() title: string | undefined;
  @Input() subtitle: string[] | undefined;
}
