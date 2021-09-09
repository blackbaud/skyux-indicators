import {
  CommonModule
} from '@angular/common';

import {
  NgModule
} from '@angular/core';

import {
  FormsModule
} from '@angular/forms';

import {
  SkyIdModule
} from '@skyux/core';

import {
  SkyCheckboxModule
} from '@skyux/forms';

import {
  SkyTextHighlightModule
} from 'projects/indicators/src/public-api';

import {
  TextHighlightDemoComponent
} from './text-highlight-demo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SkyCheckboxModule,
    SkyIdModule,
    SkyTextHighlightModule
  ],
  exports: [
    TextHighlightDemoComponent
  ],
  declarations: [
    TextHighlightDemoComponent
  ]
})
export class TextHighlightDemoModule { }
