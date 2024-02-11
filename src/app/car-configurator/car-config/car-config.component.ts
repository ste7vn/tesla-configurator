import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  WritableSignal,
  computed,
  inject,
  signal,
} from '@angular/core';
import { CarConfiguratorService, ICarConfig, ICarOptions } from '../services';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { VeichlePreviewComponent } from '../veichle-preview/veichle-preview.component';

@Component({
  selector: 'app-car-config',
  standalone: true,
  imports: [CommonModule, FormsModule, VeichlePreviewComponent],
  templateUrl: './car-config.component.html',
  styleUrl: './car-config.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarConfigComponent {
  //#region Signals
  protected options: Signal<ICarOptions | undefined>;
  protected configs: Signal<ICarConfig[] | undefined> = computed(
    () => this.options()?.configs
  );
  protected selectedCarConfigId: WritableSignal<number | string> = signal<
    number | string
  >(inject(CarConfiguratorService).configuration()?.config?.id ?? '');
  protected includeYoke: WritableSignal<boolean> = signal<boolean>(
    inject(CarConfiguratorService).configuration()?.yoke ?? false
  );
  protected includeTow: WritableSignal<boolean> = signal<boolean>(
    inject(CarConfiguratorService).configuration()?.towHitch ?? false
  );
  protected selectedCarConfig: Signal<ICarConfig | undefined> = computed(() => {
    const configs = this.configs();
    if (!configs) return undefined;
    const selectedId = this.selectedCarConfigId();
    if (!selectedId) return undefined;
    return configs.find((config) => config.id === selectedId);
  });
  //#endregion
  constructor(private _carConfiguratorService: CarConfiguratorService) {
    const currentModel = this._carConfiguratorService.configuration();
    // this check should not be necessary since you can not land on this page without a model, but it is here to make this code more robust
    if (!currentModel?.model) this.options = signal(undefined);
    else {
      this.options = toSignal(
        this._carConfiguratorService.getOptions(currentModel.model.code)
      );
    }
  }
  //#region View hooks
  protected onSelectedCarConfigIdChange(configId: number | string): void {
    this.selectedCarConfigId.set(configId ? +configId : configId);
    this._syncConfiguration();
  }
  protected onIncludeYokeChange(includeYoke: boolean): void {
    this.includeYoke.set(includeYoke);
    this._syncConfiguration();
  }
  protected onIncludeTowChange(includeTow: boolean): void {
    this.includeTow.set(includeTow);
    this._syncConfiguration();
  }
  //#endregion
  //#region Internals
  private _syncConfiguration() {
    const currentModel = this._carConfiguratorService.configuration();
    if (!currentModel) return;
    this._carConfiguratorService.configuration.set({
      ...currentModel,
      config: this.selectedCarConfig(),
      towHitch: this.includeTow(),
      yoke: this.includeYoke(),
    });
  }
  //#endregion
}
