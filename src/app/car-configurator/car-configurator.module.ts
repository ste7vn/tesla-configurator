import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CONFIGURATOR_ROUTES } from './car-configurator.routes';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(CONFIGURATOR_ROUTES)],
})
export class CarConfiguratorModule {}
