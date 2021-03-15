import {
  ChangeDetectionStrategy,
  Component,
  Input
} from '@angular/core';

import {
  SkyIconVariant
} from './icon-variant';

@Component({
  selector: 'sky-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkyIconComponent {

  /**
   * Specifies the name of
   * [the Font Awesome icon](https://fontawesome.com/icons?d=gallery) to
   * display. Do not specify the `fa fa-` classes.
   * @required
   */
  @Input()
  public icon: string;

  /**
   * Specifies the type of icon to display. Specifying `fa` will display a Font Awesome icon,
   * while specifying `skyux` will display an icon from the custom SKY UX icon font. Note that
   * the custom SKY UX icon font is currently in beta.
   */
  @Input()
  public iconType = 'fa';

  /**
   * Specifies the size of the icon using
   * [Font Awesome sizes](https://fontawesome.com/how-to-use/on-the-web/styling/sizing-icons).
   */
  @Input()
  public size: string;

  /**
   * Indicates whether the icon has a fixed width.
   */
  @Input()
  public fixedWidth: boolean;

  /**
   * Specifies the icon variant (`line` or `solid`). If the variant doesn't exist for the
   * specified icon, the normal icon is displayed.
   */
  @Input()
  public variant: SkyIconVariant;
}
