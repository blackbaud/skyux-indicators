import {
  NgModule
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  SkyIconModule
} from '../icon/icon.module';

import {
  SkyStatusIndicatorComponent
} from './status-indicator.component';

@NgModule({
  declarations: [
    SkyStatusIndicatorComponent
  ],
  imports: [
    CommonModule,
    SkyIconModule
  ],
  exports: [
    SkyStatusIndicatorComponent
  ]
})
export class SkyStatusIndicatorModule { }
