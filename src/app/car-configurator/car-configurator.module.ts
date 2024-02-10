import { NgModule, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CONFIGURATOR_ROUTES } from './car-configurator.routes';
import { CarConfiguratorService } from './services';
import { MenuService } from '../services';
import { toObservable } from '@angular/core/rxjs-interop';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(CONFIGURATOR_ROUTES)],
  providers: [CarConfiguratorService],
})
export class CarConfiguratorModule {
  constructor(
    menuService: MenuService,
    carConfiguratorService: CarConfiguratorService
  ) {
    menuService.items.update((current) => [
      ...current,
      { id: 'step1', title: 'Step 1', route: '/car-configurator/car-model' },
      {
        id: 'step2',
        title: 'Step 2',
        route: '/car-configurator/car-config',
        disabled$: toObservable(
          computed(
            () =>
              !carConfiguratorService.isModelValid(
                carConfiguratorService.configuration()
              )
          )
        ),
      },
      {
        id: 'step3',
        title: 'Step 3',
        route: '/car-configurator/car-summary',
        disabled$: toObservable(
          computed(
            () =>
              !carConfiguratorService.isConfigurationValid(
                carConfiguratorService.configuration()
              )
          )
        ),
      },
    ]);
  }
}
