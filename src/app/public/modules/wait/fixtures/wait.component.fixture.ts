import {
  Component,
  ViewChild
} from '@angular/core';

import {
  SkyWaitComponent
} from '..';

@Component({
  selector: 'sky-test-cmp',
  templateUrl: './wait.component.fixture.html'
})
export class SkyWaitTestComponent {
  public ariaLabel: string;

  public isWaiting: boolean = false;
  public isFullPage: boolean = false;
  public isNonBlocking: boolean = false;

  public showAnchor0 = true;
  public showAnchor2 = true;

  @ViewChild(SkyWaitComponent)
  public waitComponent: SkyWaitComponent;
}
