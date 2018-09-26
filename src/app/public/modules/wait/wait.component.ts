import {
  Component,
  Input,
  ElementRef
} from '@angular/core';

import {
  SkyWaitAdapterService
} from './wait-adapter.service';

@Component({
  selector: 'sky-wait',
  templateUrl: './wait.component.html',
  styleUrls: ['./wait.component.scss'],
  providers: [SkyWaitAdapterService]
})
export class SkyWaitComponent {

  @Input()
  public set isWaiting(value: boolean) {
    if (value && !this._isFullPage) {
      this.adapterService.setWaitBounds(this.elRef);
    } else if (!value && !this._isFullPage) {
      this.adapterService.removeWaitBounds(this.elRef);
    }
    this.adapterService.setBusyState(this.elRef, this._isFullPage, value, !this.isNonBlocking);
    this._isWaiting = value;
  }
  public get isWaiting() {
    return this._isWaiting;
  }

  @Input()
  public set isFullPage(value: boolean) {
    if (value) {
      this.adapterService.removeWaitBounds(this.elRef);
    } else if (!value && this._isWaiting) {
      this.adapterService.setWaitBounds(this.elRef);
    }

    this._isFullPage = value;
  }
  public get isFullPage() {
    return this._isFullPage;
  }

  @Input()
  public set ariaLabel(value: string) {
    this._ariaLabel = value;
  }
  public get ariaLabel(): string {
    if (this._ariaLabel) {
      return this._ariaLabel;
    }

    const type = this.isFullPage ? '_page' : '';
    const blocking = this.isNonBlocking ? '' : '_blocking';
    const resourceKey = 'sky_wait' + type + blocking + '_aria_alt_text';
    console.log(resourceKey);
    return this.getString(resourceKey);
  }

  @Input()
  public isNonBlocking: boolean;

  private _isWaiting: boolean;
  private _isFullPage: boolean;
  private _ariaLabel: string;

  // TODO: The following require statement is not recommended, but was done
  // to avoid a breaking change (SkyResources is synchronous, but SkyAppResources is asynchronous).
  // We should switch to using SkyAppResources in the next major release.
  private resources: any = require('!json-loader!.skypageslocales/resources_en_US.json');

  constructor(
    private elRef: ElementRef,
    private adapterService: SkyWaitAdapterService
  ) {}

  /**
   * This method is a stand-in for the old SkyResources service from skyux2.
   * TODO: We should consider using Builder's resources service instead.
   * @param key
   */
  private getString(key: string): string {
    return this.resources[key].message;
  }
}
