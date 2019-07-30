import {
  Component
} from '@angular/core';

import {
  SkyIconType
} from '../icon-type';

@Component({
  selector: 'sky-test-cmp',
  templateUrl: './icon.component.fixture.html'
})
export class IconTestComponent {
  public icon = 'circle';
  public iconType: SkyIconType;
  public size = '3x';
  public fixedWidth = false;
}
