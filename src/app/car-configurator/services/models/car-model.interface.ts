import { ICarColor } from './car-color.interface';

export interface ICarModel {
  code: string;
  description: string;
  colors: ICarColor[];
}
