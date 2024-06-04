import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

import { BLOG_ROUTE } from './pages/blog/blog.routes';
import { DOCTORS_ROUTE } from './pages/doctors/doctors.routes';
import { DEPARTMENTS_ROUTE } from './pages/projects/deparments.routes';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'about-us',
    loadComponent: () =>
      import('./pages/about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'our-history',
    loadComponent: () =>
      import('./pages/our-history/our-history.component').then(
        (m) => m.OurHistoryComponent,
      ),
  },
  {
    path: 'classes',
    loadComponent: () =>
      import('./pages/timetable/timetable.component').then(
        (m) => m.TimetableComponent,
      ),
  },
  {
    path: 'make-appointments',
    loadComponent: () =>
      import('./pages/appointments/appointments.component').then(
        (m) => m.AppointmentsComponent,
      ),
  },
  {
    path: 'faq',
    loadComponent: () =>
      import('./pages/faq/faq.component').then((m) => m.FaqComponent),
  },
  {
    path: 'service-details',
    loadComponent: () =>
      import('./pages/service-details/service-details.component').then(
        (m) => m.ServiceDetailsComponent,
      ),
  },
  {
    path: 'contact-us',
    loadComponent: () =>
      import('./pages/contact/contact.component').then(
        (m) => m.ContactComponent,
      ),
  },
  { path: 'gallery', loadComponent: () => import('./pages/gallery/gallery.component').then((m) => m.GalleryComponent) },

  ...BLOG_ROUTE,
  ...DOCTORS_ROUTE,
  ...DEPARTMENTS_ROUTE,
  { path: '**', component: PageNotFoundComponent },
];
