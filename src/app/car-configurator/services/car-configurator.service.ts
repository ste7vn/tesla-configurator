import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { ICarModel, ICarOptions } from './models';
import { Observable } from 'rxjs';
import { ICarConfiguration } from './models/car-configuration.interface';

@Injectable()
export class CarConfiguratorService {
  public configuration = signal<Partial<ICarConfiguration> | undefined>(
    undefined
  );

  constructor(private _httpClient: HttpClient) {}

  public getModels(): Observable<ICarModel[]> {
    return this._httpClient.get<ICarModel[]>('/models');
  }

  public getOptions(model: string): Observable<ICarOptions> {
    return this._httpClient.get<ICarOptions>(`/options/${model}`);
  }

  public isModelValid(
    configuration: Partial<ICarConfiguration> | undefined
  ): boolean {
    if (configuration?.model == undefined || configuration.color == undefined)
      return false;
    return true;
  }

  public isConfigurationValid(
    configuration: Partial<ICarConfiguration> | undefined
  ): boolean {
    if (!this.isModelValid(configuration)) return false;
    if (configuration?.config == undefined) return false;
    return true;
  }
}
