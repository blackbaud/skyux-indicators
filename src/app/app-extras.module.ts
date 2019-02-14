import {
  NgModule
} from '@angular/core';

import {
  SkyAppLinkModule
} from '@skyux/router';

import {
  SkyIconModule
} from './public';

@NgModule({
  exports: [
    SkyAppLinkModule,
    SkyIconModule
  ]
})
export class AppExtrasModule { }
