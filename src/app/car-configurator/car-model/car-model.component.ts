import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  WritableSignal,
  computed,
  inject,
  signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { CarConfiguratorService, ICarColor } from '../services';
import { VeichlePreviewComponent } from '../veichle-preview/veichle-preview.component';

@Component({
  selector: 'app-car-model',
  standalone: true,
  imports: [CommonModule, FormsModule, VeichlePreviewComponent],
  templateUrl: './car-model.component.html',
  styleUrl: './car-model.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarModelComponent {
  //#region Signals
  protected configuration = inject(CarConfiguratorService).configuration;
  protected models = toSignal(inject(CarConfiguratorService).getModels());
  protected colors: Signal<ICarColor[]> = computed(() => {
    const models = this.models();
    if (!models || models.length < 1) return [];
    const currentModel = this.selectedModel();
    return models.find((model) => model.code === currentModel)?.colors ?? [];
  });
  protected selectedModel: WritableSignal<string> = signal<string>(
    this.configuration()?.model?.code ?? ''
  );
  protected selectedColor: WritableSignal<string> = signal<string>(
    this.configuration()?.color?.code ?? ''
  );
  //#endregion
  constructor(private _carConfiguratorService: CarConfiguratorService) {}
  //#region View hooks
  protected onSelectedModelChange(modelCode: string): void {
    this.selectedModel.set(modelCode);
    const firstAvailableColor = this.colors()[0];
    this.selectedColor.set(firstAvailableColor?.code);
    this._carConfiguratorService.configuration.set({
      model: this.models()?.find((model) => model.code === modelCode),
      color: firstAvailableColor,
    });
  }
  protected onSelectedColorChange(colorCode: string): void {
    this.selectedColor.set(colorCode);
    this._carConfiguratorService.configuration.set({
      ...this.configuration(),
      color: this.colors().find((color) => color.code === colorCode),
    });
  }
  //#endregion
}
