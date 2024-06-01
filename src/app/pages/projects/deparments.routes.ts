import { Routes } from '@angular/router';

export const DEPARTMENTS_ROUTE: Routes = [
  {
    path: 'portfolio-grid-col-2',
    loadComponent: () =>
      import('./portfolio-grid-col-2/portfolio-grid-col-2.component').then(
        (m) => m.PortfolioGridCol2Component,
      ),
  },
  {
    path: 'portfolio-sortable-col-2',
    loadComponent: () =>
      import(
        './portfolio-sortable-grid-col-2/portfolio-sortable-grid-col-2.component'
      ).then((m) => m.PortfolioSortableGridCol2Component),
  },
  {
    path: 'departments/details',
    loadComponent: () =>
      import('./single-detail-style/single-detail-style.component').then(
        (m) => m.SingleDetailStyleComponent,
      ),
  },
];
