import { Component } from '@angular/core';
import { TitleBarComponent } from '../../components/titlebar/title-bar.component';
import { HomeServiceComponent } from '../home/service/service.component';
import { OurDoctorsSliderComponent } from '../../components/our-doctors-slider/our-doctors-slider.component';
import { ClientsComponent } from '../../components/clients/clients.component';
import { TestimonialBgImgComponent } from '../../components/testimonial/testimonial-bg-img/testimonial-bg-img.component';
import { InboxComponent } from '../../components/inbox/inbox.component';
import { ShardDepartmentsComponent } from "../../components/shard-departments/shard-departments.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    TitleBarComponent,
    HomeServiceComponent,
    OurDoctorsSliderComponent,
    ClientsComponent,
    TestimonialBgImgComponent,
    InboxComponent,
    ShardDepartmentsComponent,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {}
