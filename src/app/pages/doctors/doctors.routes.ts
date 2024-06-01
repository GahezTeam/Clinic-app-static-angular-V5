import { Routes } from '@angular/router';

export const DOCTORS_ROUTE: Routes = [
  // {
  //   path: 'doctors',
  //   component: IndexComponent,
  //   children: [
  //          { path: 'doctors', component: DoctorsListComponent },
  //       { path: 'doctors/details/:id', component: DoctorsDetailsComponent },
  //   ],
  // },

  {
    path: 'doctors',
    loadComponent: () =>
      import('./list/list.component').then((m) => m.DoctorsListComponent),
  },
  {
    path: 'doctors/details',
    loadComponent: () =>
      import('./details/details.component').then(
        (m) => m.DoctorsDetailsComponent,
      ),
  },
];
