
import {
  NgModule
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  SkyIconModule
} from 'projects/indicators/src/public-api';

import {
  IconDemoComponent
} from './icon-demo.component';

@NgModule({
  imports: [
    CommonModule,
    SkyIconModule
  ],
  declarations: [
    IconDemoComponent
  ],
  exports: [
    IconDemoComponent
  ]
})
export class IconDemoModule { }
