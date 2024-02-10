import { ICarConfig } from './car-config.interface';

export interface ICarOptions {
  configs: ICarConfig[];
  towHitch: boolean;
  yoke: boolean;
}
