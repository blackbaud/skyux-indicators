import {
  CommonModule
} from '@angular/common';

import {
  NgModule
} from '@angular/core';

import {
  SkyWaitModule
} from 'projects/indicators/src/public-api';

import {
  WaitDemoComponent
} from './wait-demo.component';

@NgModule({
  imports: [
    CommonModule,
    SkyWaitModule
  ],
  exports: [
    WaitDemoComponent
  ],
  declarations: [
    WaitDemoComponent
  ]
})
export class WaitDemoModule { }
