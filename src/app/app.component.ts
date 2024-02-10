import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuService } from './services';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, AsyncPipe, JsonPipe],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  protected menuItems = inject(MenuService).items;
}
