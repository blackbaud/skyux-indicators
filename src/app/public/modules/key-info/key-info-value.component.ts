import {
  Component, Input
} from '@angular/core';

@Component({
  selector: 'sky-key-info-value',
  template: './key-info.component.html',
  styleUrls: ['./key-info.component.scss']
})
export class SkyKeyInfoValueComponent {
  /**
   * Specifies the primary content to display in large, bold text.
   * @required
   */
  @Input()
  public value: '';
}
