import { Component } from '@angular/core';
import { TestimonialBgImgComponent } from '../../components/testimonial/testimonial-bg-img/testimonial-bg-img.component';
import { TitleBarComponent } from '../../components/titlebar/title-bar.component';

@Component({
  selector: 'app-timetable',
  standalone: true,
  imports: [TestimonialBgImgComponent, TitleBarComponent],
  templateUrl: './timetable.component.html',
  styleUrl: './timetable.component.css',
})
export class TimetableComponent {}
