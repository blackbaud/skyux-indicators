import {
  ChangeDetectionStrategy,
  Component,
  Input
} from '@angular/core';

import {
  SkyIndicatorIconUtility
} from '../shared/indicator-icon-utility';

import {
  SkyIconStackItem
} from '../icon/icon-stack-item';

const INDICATOR_TYPE_DEFAULT = 'warning';

@Component({
  selector: 'sky-status-indicator',
  templateUrl: './status-indicator.component.html',
  styleUrls: ['./status-indicator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkyStatusIndicatorComponent {
  /**
   * Specifies a style for the status indicator to determine the icon.
   * The valid options are `danger`, `info`, `success`, and `warning`.
   * @default "warning"
   */
  @Input()
  public set indicatorType(value: string) {
    this._indicatorType = value;
    this.updateIcon();
  }

  public get indicatorType(): string {
    return this._indicatorType || INDICATOR_TYPE_DEFAULT;
  }

  public icon: string;

  public baseIcon: SkyIconStackItem;

  public topIcon: SkyIconStackItem;

  private _indicatorType: string;

  private updateIcon(): void {
    const indicatorIcon = SkyIndicatorIconUtility.getIconsForType(this.indicatorType);

    this.icon = indicatorIcon.defaultThemeIcon;
    this.baseIcon = indicatorIcon.modernThemeBaseIcon;
    this.topIcon = indicatorIcon.modernThemeTopIcon;
  }
}
