import {
  CommonModule
} from '@angular/common';

import {
  NgModule
} from '@angular/core';

import {
  SkyTokensModule
} from 'projects/indicators/src/public-api';

import {
  TokensDemoComponent
} from './tokens-demo.component';

@NgModule({
  imports: [
    CommonModule,
    SkyTokensModule
  ],
  exports: [
    TokensDemoComponent
  ],
  declarations: [
    TokensDemoComponent
  ]
})
export class TokensDemoModule { }
