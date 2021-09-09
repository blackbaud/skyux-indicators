
import {
  NgModule
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  SkyStatusIndicatorModule
} from 'projects/indicators/src/public-api';

import {
  StatusIndicatorDemoComponent
} from './status-indicator-demo.component';

@NgModule({
  imports: [
    CommonModule,
    SkyStatusIndicatorModule
  ],
  declarations: [
    StatusIndicatorDemoComponent
  ],
  exports: [
    StatusIndicatorDemoComponent
  ]
})
export class StatusIndicatorDemoModule { }
