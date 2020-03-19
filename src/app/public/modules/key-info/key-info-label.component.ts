import {
  Component, Input
} from '@angular/core';

@Component({
  selector: 'sky-key-info-label',
  template: './key-info.component.html',
  styleUrls: ['./key-info.component.scss']
})
export class SkyKeyInfoLabelComponent {
  /**
   * Specifies a label to display in smaller, plain text under or beside the primary value.
   * @required
   */
  @Input()
  public label: '';
}
