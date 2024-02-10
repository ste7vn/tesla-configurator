import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'car-configurator',
    loadChildren: () =>
      import('./car-configurator/car-configurator.module').then(
        (m) => m.CarConfiguratorModule
      ),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'car-configurator',
  },
];
