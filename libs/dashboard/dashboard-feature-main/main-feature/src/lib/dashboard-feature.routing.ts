import { Route } from '@angular/router';
import { DashboardFeatureMainComponent } from './dashboard-feature-main/dashboard-feature-main.component';

export const DashboardFeatureMainComponentRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'main' },
  { path: 'main', component: DashboardFeatureMainComponent, children: [] },
];
