import { Observable } from 'rxjs';

export interface IMenuItem {
  id: string;
  title: string;
  route: string;
  disabled$?: Observable<boolean>;
}
