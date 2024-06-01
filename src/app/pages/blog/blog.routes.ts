import { Routes } from '@angular/router';

export const BLOG_ROUTE: Routes = [
  {
    path: 'blog-grid-2',
    loadComponent: () =>
      import('./grid-2/blog-grid-2.component').then(
        (m) => m.BlogGrid2Component,
      ),
  },
  {
    path: 'blog-sortable-col-2',
    loadComponent: () =>
      import('./sortable-col-2/blog-sortable-col2.component').then(
        (m) => m.BlogSortableCol2,
      ),
  },
  {
    path: 'blog-classic',
    loadComponent: () =>
      import('./classic/blog-classic.component').then(
        (m) => m.BlogClassicComponent,
      ),
  },
  {
    path: 'blog/details',
    loadComponent: () =>
      import('./details/blog-details.component').then(
        (m) => m.BlogDetailsComponent,
      ),
  },
];
