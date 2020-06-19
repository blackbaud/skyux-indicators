
import {
  NgModule
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  SkyIconModule
} from '@skyux/indicators';

import {
  StatusIndicatorDemoComponent
} from './status-indicator-demo.component';

@NgModule({
  imports: [
    CommonModule,
    SkyIconModule
  ],
  declarations: [
    StatusIndicatorDemoComponent
  ],
  exports: [
    StatusIndicatorDemoComponent
  ]
})
export class SkyStatusIndicatorDemoComponent { }
