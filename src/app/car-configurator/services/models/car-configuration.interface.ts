import { ICarColor } from './car-color.interface';
import { ICarModel } from './car-model.interface';
import { ICarConfig } from './car-config.interface';

export interface ICarConfiguration {
  model: Omit<ICarModel, 'colors'>;
  color: ICarColor;
  config: ICarConfig;
  towHitch?: boolean;
  yoke?: boolean;
}
