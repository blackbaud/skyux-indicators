import {
  CommonModule
} from '@angular/common';

import {
  NgModule
} from '@angular/core';

import {
  SkyHelpInlineModule
} from 'projects/indicators/src/public-api';

import {
  HelpInlineDemoComponent
} from './help-inline-demo.component';

@NgModule({
  imports: [
    CommonModule,
    SkyHelpInlineModule
  ],
  exports: [
    HelpInlineDemoComponent
  ],
  declarations: [
    HelpInlineDemoComponent
  ]
})
export class HelpInlineDemoModule { }
