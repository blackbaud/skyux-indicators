import {
  NgModule
} from '@angular/core';

import {
  SkyLibResourcesService
} from '@skyux/i18n';

import {
  SkyLibResourcesTestService
} from '@skyux/i18n/testing';

import {
  SkyAlertModule
} from '../alert.module';

import {
  AlertTestComponent
} from './alert.component.fixture';

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
