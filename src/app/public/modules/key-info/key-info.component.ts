import {
  Component,
  Input
} from '@angular/core';

import {
  SkyKeyInfoLabelComponent
} from './key-info-label.component';

import {
  SkyKeyInfoValueComponent
} from './key-info-value.component'

@Component({
  selector: 'sky-key-info',
  templateUrl: './key-info.component.html',
  styleUrls: ['./key-info.component.scss']
})
export class SkyKeyInfoComponent {
  @Input()
  public layout = 'vertical';
}
