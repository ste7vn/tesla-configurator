import { Routes } from '@angular/router';
import { CarModelComponent } from './car-model/car-model.component';
import { CarConfigComponent } from './car-config/car-config.component';
import { CarSummaryComponent } from './car-summary/car-summary.component';

export const CONFIGURATOR_ROUTES: Routes = [
  {
    path: 'car-model',
    component: CarModelComponent,
  },
  {
    path: 'car-config',
    component: CarConfigComponent,
  },
  {
    path: 'car-summary',
    component: CarSummaryComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'car-model',
  },
];
