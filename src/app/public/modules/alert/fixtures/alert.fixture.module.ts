import {
  NgModule
} from '@angular/core';

import { AlertTestComponent } from './alert.component.fixture';
import { SkyAlertModule } from '../alert.module';
import { SkyLibResourcesService } from '@skyux/i18n';
import { SkyLibResourcesTestService } from '@skyux/i18n/testing';

@NgModule({
  declarations: [
    AlertTestComponent
  ],
  imports: [
    SkyAlertModule
  ],
  providers: [
    {
      provide: SkyLibResourcesService,
      useClass: SkyLibResourcesTestService
    }
  ]
})
export class AlertTestModule { }
