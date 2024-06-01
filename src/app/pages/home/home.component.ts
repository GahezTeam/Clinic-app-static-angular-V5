import { Component } from '@angular/core';

import { HomeSliderComponent } from './slider/slider.component';
import { HomeAboutUsComponent } from './about-us/about-us.component';
import { HomeFeaturesComponent } from './features/features.component';
import { OurDoctorsSliderComponent } from '../../components/our-doctors-slider/our-doctors-slider.component';
import { HomeInboxComponent } from './inbox/inbox.component';
import { ClientsComponent } from '../../components/clients/clients.component';
import { homeBlogComponent } from './blog/blog.component';
import { InboxComponent } from "../../components/inbox/inbox.component";
import { HomeServiceComponent } from "./service/service.component";
import { RouterLink } from "@angular/router";
import { ContactComponent } from "../contact/contact.component";
import { HomeContactComponent } from "./contact/contact.component";
import { TestimonialBgImgComponent } from "../../components/testimonial/testimonial-bg-img/testimonial-bg-img.component";
import { HomePricingComponent } from "./pricing/pricing.component";
import { StaticBoxComponent } from "./static-box/static-box.component";
import { HomeDepartmentsComponent } from "./departments/departments.component";
import { OurDoctorsSliderHoverComponent } from "../../components/our-doctors-slider-hover/our-doctors-slider-hover.component";

@Component({
  selector: 'app-home',
  standalone: true,

  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [
    HomeSliderComponent,
    HomeFeaturesComponent,
    HomeAboutUsComponent,
    OurDoctorsSliderComponent,
    HomeInboxComponent,
    ClientsComponent,
    homeBlogComponent,
    InboxComponent,
    HomeServiceComponent,
    RouterLink,
    ContactComponent,
    HomeContactComponent,
    TestimonialBgImgComponent,
    HomePricingComponent,
    StaticBoxComponent,
    HomeDepartmentsComponent,
    HomeDepartmentsComponent,
    OurDoctorsSliderHoverComponent,
  ],
})
export class HomeComponent {}
