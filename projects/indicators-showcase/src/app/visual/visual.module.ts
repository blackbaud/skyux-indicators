import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkyDocsToolsModule } from '@skyux/docs-tools';

import { SkyAlertModule } from 'projects/indicators/src/public-api';

import { VisualComponent } from './visual.component';
import { AlertVisualComponent } from './alert/alert-visual.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AlertVisualComponent,
    VisualComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SkyAlertModule,
    SkyDocsToolsModule
  ]
})
export class VisualModule { }
