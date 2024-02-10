import { Pipe, PipeTransform } from '@angular/core';
import { ICarConfiguration } from '../services/models/car-configuration.interface';

@Pipe({
  name: 'veichlePreviewPath',
  standalone: true,
})
export class VeichlePreviewPathPipe implements PipeTransform {
  transform(
    configuration: Partial<ICarConfiguration> | undefined
  ): string | undefined {
    if (!configuration || !configuration.model || !configuration.color)
      return undefined;
    return `/assets/cars/${configuration.model.code}/${configuration.color.code}.jpg`;
  }
}
