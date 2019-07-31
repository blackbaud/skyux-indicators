import {
  ChangeDetectionStrategy,
  Component,
  Input
} from '@angular/core';

import {
  SkyIconType
} from './icon-type';

@Component({
  selector: 'sky-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkyIconComponent {
  @Input()
  public icon: string;

  @Input()
  public size: string;

  @Input()
  public fixedWidth: boolean;

  @Input()
  public set iconType(value: SkyIconType) {
    this._iconType = value;
  }

  public get iconType(): SkyIconType {
    return this._iconType || 'solid';
  }

  private _iconType: SkyIconType;

  public classList(): string[] {
    const iconPrefix = this.getIconPrefix();

    const list: string[] = [
      iconPrefix,
      `fa-${this.icon}`
    ];

    if (this.size) {
      list.push('fa-' + this.size);
    }
    if (this.fixedWidth) {
      list.push('fa-fw');
    }

    return list;
  }

  private getIconPrefix(): string {
    switch (this.iconType) {
      case 'brands':
        return 'fab';
      case 'outline':
        return 'far';
      default:
      case 'solid':
        return 'fas';
    }
  }
}
