import { computed, inject } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { CarConfiguratorService } from './services';

export const CONFIGURATOR_ROUTES: Routes = [
  {
    path: 'car-model',
    loadComponent: () =>
      import('./car-model/car-model.component').then(
        (m) => m.CarModelComponent
      ),
  },
  {
    path: 'car-config',
    loadComponent: () =>
      import('./car-config/car-config.component').then(
        (m) => m.CarConfigComponent
      ),
    canActivate: [
      () => {
        const srv = inject(CarConfiguratorService);
        return (
          srv.isModelValid(srv.configuration()) ||
          inject(Router).createUrlTree(['/car-configurator'])
        );
      },
    ],
  },
  {
    path: 'car-summary',
    loadComponent: () =>
      import('./car-summary/car-summary.component').then(
        (m) => m.CarSummaryComponent
      ),
    canActivate: [
      () => {
        const srv = inject(CarConfiguratorService);
        return (
          srv.isConfigurationValid(srv.configuration()) ||
          inject(Router).createUrlTree(['/car-configurator'])
        );
      },
    ],
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'car-model',
  },
];
