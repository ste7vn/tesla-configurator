import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CarConfiguratorService } from '../services';
import { VeichlePreviewPathPipe } from './veichle-preview-path.pipe';

@Component({
  selector: 'app-veichle-preview',
  standalone: true,
  imports: [CommonModule, VeichlePreviewPathPipe],
  templateUrl: './veichle-preview.component.html',
  styleUrl: './veichle-preview.component.scss',
})
export class VeichlePreviewComponent {
  protected configuration = inject(CarConfiguratorService).configuration;
}
