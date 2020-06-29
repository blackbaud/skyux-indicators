import {
  NgModule
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  SkyTooltipComponent
} from './tooltip.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    SkyTooltipComponent
  ],
  declarations: [
    SkyTooltipComponent
  ]
})
export class SkyTooltipModule { }
