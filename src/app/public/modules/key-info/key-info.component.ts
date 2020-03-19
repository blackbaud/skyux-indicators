import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'sky-key-info',
  templateUrl: './key-info.component.html',
  styleUrls: ['./key-info.component.scss']
})
export class SkyKeyInfoComponent {
  /**
   * To display key info horizontally, set this property to `horizontal`.
   */
  @Input()
  public layout = 'vertical';
}
