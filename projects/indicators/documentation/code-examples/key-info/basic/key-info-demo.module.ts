import {
  NgModule
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  SkyKeyInfoModule
} from 'projects/indicators/src/public-api';

import {
  KeyInfoDemoComponent
} from './key-info-demo.component';

@NgModule({
  imports: [
    CommonModule,
    SkyKeyInfoModule
  ],
  declarations: [
    KeyInfoDemoComponent
  ],
  exports: [
    KeyInfoDemoComponent
  ]
})
export class KeyInfoDemoModule { }
