import { Injectable, signal } from '@angular/core';
import { IMenuItem } from './models';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  public items = signal<IMenuItem[]>([]);
}
