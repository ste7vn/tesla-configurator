import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { CarConfiguratorService } from '../services';
import { CommonModule } from '@angular/common';
import { VeichlePreviewComponent } from '../veichle-preview/veichle-preview.component';

@Component({
  selector: 'app-car-summary',
  standalone: true,
  imports: [CommonModule, VeichlePreviewComponent],
  templateUrl: './car-summary.component.html',
  styleUrl: './car-summary.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarSummaryComponent {
  protected config = signal(inject(CarConfiguratorService).configuration());
}
