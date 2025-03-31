import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'list',
    loadComponent: () =>
      import('@bw/controls/list-feature').then(
        (c) => c.ControlsFeatureListComponent
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('@bw/dashboard/main-feature').then(
        (r) => r.DashboardFeatureMainComponentRoutes
      ),
  },
];
