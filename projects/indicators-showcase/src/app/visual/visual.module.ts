import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkyDocsToolsModule } from '@skyux/docs-tools';

import { SkyAlertModule, SkyChevronModule, SkyHelpInlineModule, SkyIconModule, SkyKeyInfoModule, SkyLabelModule, SkyStatusIndicatorModule, SkyTextHighlightModule, SkyTokensModule, SkyWaitModule } from 'projects/indicators/src/public-api';

import { VisualComponent } from './visual.component';
import { AlertVisualComponent } from './alert/alert-visual.component';
import { RouterModule } from '@angular/router';
import { SkyChevronDemoComponent } from './chevron/chevron-demo.component';
import { SkyHelpInlineDemoComponent } from './help-inline/help-inline-demo.component';
import { SkyIconStackDemoComponent } from './icon-stack/icon-stack-demo.component';
import { SkyIconDemoComponent } from './icon/icon-demo.component';
import { KeyInfoVisualComponent } from './key-info/key-info-visual.component';
import { SkyLabelDemoComponent } from './label/label-demo.component';
import { StatusIndicatorVisualComponent } from './status-indicator/status-indicator-visual.component';
import { SkyTextHighlightDemoComponent } from './text-highlight/text-highlight-demo.component';
import { SkyTokensDemoComponent } from './tokens/tokens-demo.component';
import { SkyWaitDemoComponent } from './wait/wait-demo.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AlertVisualComponent,
    SkyChevronDemoComponent,
    SkyHelpInlineDemoComponent,
    SkyIconDemoComponent,
    SkyIconStackDemoComponent,
    KeyInfoVisualComponent,
    VisualComponent,
    SkyLabelDemoComponent,
    StatusIndicatorVisualComponent,
    SkyTextHighlightDemoComponent,
    SkyTokensDemoComponent,
    SkyWaitDemoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SkyAlertModule,
    SkyChevronModule,
    SkyDocsToolsModule,
    SkyHelpInlineModule,
    SkyIconModule,
    SkyKeyInfoModule,
    SkyLabelModule,
    SkyStatusIndicatorModule,
    SkyTextHighlightModule,
    SkyTokensModule,
    SkyWaitModule
  ]
})
export class VisualModule { }
