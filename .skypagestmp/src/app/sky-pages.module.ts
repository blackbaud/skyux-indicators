

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SkyAppAssetsService } from '@skyux/assets';
import { SkyAppRuntimeConfigParams, SkyAppConfig, SkyAppParamsConfig } from '@skyux/config';
import { SkyAppWindowRef } from '@skyux/core';
import { SkyThemeModule, SkyThemeService } from '@skyux/theme';
import { SkyI18nModule } from '@skyux/i18n';
import { SkyAppTitleService, SkyViewkeeperHostOptions } from '@skyux/core';
import {
  SkyAppOmnibarTitleService
} from '@skyux-sdk/builder/runtime/omnibar/omnibar-title.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';
import { Subscription } from 'rxjs';

import '../../src/main';

import {
  AppExtrasModule
} from '../../src/app/app-extras.module';

import {
  SkyAppBootstrapper
} from '@skyux-sdk/builder/runtime';

import {
  SkyAppHostLocaleModule
} from '@skyux-sdk/builder/runtime/i18n/app-host-locale.module';

import {
  SkyAppAuthTokenModule
} from '@skyux-sdk/builder/runtime/auth-token.module';

export class SkyAppAssetsImplService {
  private pathMap: {[key: string]: any} = {
    'img/guidelines/alert/alert-anatomy.png': '/skyux-indicators/assets/img/guidelines/alert/alert-anatomy.97a8f4730ec898184f1385a9d8f6cb2cec65014c.png',
      'img/guidelines/alert/alert-layout-1.png': '/skyux-indicators/assets/img/guidelines/alert/alert-layout-1.5ea33e06913874bf994f21abfdcbd4f78089e0ba.png',
      'img/guidelines/alert/alert-layout-2.png': '/skyux-indicators/assets/img/guidelines/alert/alert-layout-2.f7bb8c890687adc83f64a6762b139aacfdb070e0.png',
      'img/guidelines/alert/alert-layout-3.png': '/skyux-indicators/assets/img/guidelines/alert/alert-layout-3.9bc1988c2a8c0e767902ad7e654e34d9aa928b6e.png',
      'img/guidelines/alert/alert-option-1.png': '/skyux-indicators/assets/img/guidelines/alert/alert-option-1.360d11e229676802dc02b3fca7ce3e316ee73298.png',
      'img/guidelines/alert/alert-type-1.png': '/skyux-indicators/assets/img/guidelines/alert/alert-type-1.3fbc096518e4b1828da1c46fa7abd5d6537a1198.png',
      'img/guidelines/alert/alert-type-2.png': '/skyux-indicators/assets/img/guidelines/alert/alert-type-2.2de4f733250162ecf4ae61d8fd5a646fe53b149a.png',
      'img/guidelines/alert/alert-type-3.png': '/skyux-indicators/assets/img/guidelines/alert/alert-type-3.6afaff11c2a247d7f7bcc98bec3072d5499ce357.png',
      'img/guidelines/alert/alert-type-4.png': '/skyux-indicators/assets/img/guidelines/alert/alert-type-4.6b3f191187ef25affb09aebfd97642b6efadf18f.png',
      'img/guidelines/alert/alert-usage-1.png': '/skyux-indicators/assets/img/guidelines/alert/alert-usage-1.5869fca0beff94bad3f980c599b4d088740ef45b.png',
      'img/guidelines/alert/alert-usage-2.png': '/skyux-indicators/assets/img/guidelines/alert/alert-usage-2.858d1c22a47f02e18eee7bbd7851c9bb22ed0965.png',
      'img/guidelines/alert/alert-usage-3.png': '/skyux-indicators/assets/img/guidelines/alert/alert-usage-3.3db4468f8771898dfb923a7a9d5515fd86c61845.png',
      'img/guidelines/alert/alert-usage-4.png': '/skyux-indicators/assets/img/guidelines/alert/alert-usage-4.c541d44d16f5ffb36f0d7832826092c62a9cb3bb.png',
      'img/guidelines/alert/alert-usage-5.png': '/skyux-indicators/assets/img/guidelines/alert/alert-usage-5.5f41827c96914b4d3528af9b0b67aa9209cbcaa4.png',
      'img/guidelines/alert/alert-usage-6.png': '/skyux-indicators/assets/img/guidelines/alert/alert-usage-6.cc09483d62dfb33bc76d1a22e2eac9e403e10fda.png',
      'img/guidelines/key-info/horizontal-layout.png': '/skyux-indicators/assets/img/guidelines/key-info/horizontal-layout.3f27e2e29dd14fbce500976d14128eed71147e70.png',
      'img/guidelines/key-info/key-info-anatomy.png': '/skyux-indicators/assets/img/guidelines/key-info/key-info-anatomy.60a1e257cfa985d24a06d6229c14081b181c08e8.png',
      'img/guidelines/key-info/key-info-usage-1.png': '/skyux-indicators/assets/img/guidelines/key-info/key-info-usage-1.2fd16b8ff6c062bd253aceb678f39ef837c655b0.png',
      'img/guidelines/key-info/key-info-usage-2.png': '/skyux-indicators/assets/img/guidelines/key-info/key-info-usage-2.a759949e43dcafd50be63f0ce81243432ce851ba.png',
      'img/guidelines/key-info/key-info-usage-3.png': '/skyux-indicators/assets/img/guidelines/key-info/key-info-usage-3.d412412162f0b11904ba105e84120039d2092a4e.png',
      'img/guidelines/key-info/key-info-usage-4.png': '/skyux-indicators/assets/img/guidelines/key-info/key-info-usage-4.25258508c8a1b504bfffe2fc704c499d93c96965.png',
      'img/guidelines/key-info/key-info-usage-5.png': '/skyux-indicators/assets/img/guidelines/key-info/key-info-usage-5.07e34e413652572dfb889c10f3f7309f887ad01e.png',
      'img/guidelines/key-info/key-info-usage-6.png': '/skyux-indicators/assets/img/guidelines/key-info/key-info-usage-6.73307ba154b0978d235909e262ffcd0c798d3c77.png',
      'img/guidelines/key-info/vertical-layout.png': '/skyux-indicators/assets/img/guidelines/key-info/vertical-layout.d528badfddb8010bf813f61bc68f52538369316f.png',
      'img/guidelines/status-indicator/status-indicator-anatomy.png': '/skyux-indicators/assets/img/guidelines/status-indicator/status-indicator-anatomy.914765df32127e6c9bb1a5553994b23c7c8d4d70.png',
      'img/guidelines/status-indicator/status-indicator-usage-1.png': '/skyux-indicators/assets/img/guidelines/status-indicator/status-indicator-usage-1.9ba922c76283522ae2497a15220b4336adf7906c.png',
      'img/guidelines/status-indicator/status-indicator-usage-2-5.png': '/skyux-indicators/assets/img/guidelines/status-indicator/status-indicator-usage-2-5.14f2d54d6160c6ba992f2e53a64bc758dcaf319f.png',
      'img/guidelines/status-indicator/status-indicator-usage-2.5.png': '/skyux-indicators/assets/img/guidelines/status-indicator/status-indicator-usage-2.5.d9d30d9398780ff985569573f036a88d12c26847.png',
      'img/guidelines/status-indicator/status-indicator-usage-2.png': '/skyux-indicators/assets/img/guidelines/status-indicator/status-indicator-usage-2.f937ae17dbdd4c1c45838a6957b81884e80df600.png',
      'img/guidelines/status-indicator/status-indicator-usage-3.png': '/skyux-indicators/assets/img/guidelines/status-indicator/status-indicator-usage-3.f8bd4deb48019a06cabda2866f7fd477b92549c8.png',
      'img/guidelines/status-indicator/status-indicator-usage-4.png': '/skyux-indicators/assets/img/guidelines/status-indicator/status-indicator-usage-4.e56904ee8e05c4499a1b8fb2279254f88bf42052.png',
      'img/guidelines/status-indicator/status-indicator-usage-5.png': '/skyux-indicators/assets/img/guidelines/status-indicator/status-indicator-usage-5.5cf76fb84bf2d3545d34f9ca41c2db9417c55e11.png',
      'img/guidelines/status-indicator/status-indicator-usage-6.png': '/skyux-indicators/assets/img/guidelines/status-indicator/status-indicator-usage-6.ecf524ea9e2df73f4a97c8b35de1ff77c4993434.png',
      'locales/resources_en_US.json': '/skyux-indicators/assets/locales/resources_en_US.fc4aaca4dac135b8725a99a1ed7275d2fdcce1f8.json'
  };
  public getUrl(filePath: string): string {
    return this.pathMap[filePath];
  }
  public getAllUrls(): {[key: string]: any} {
    return this.pathMap;
  }
}

export function SkyAppConfigFactory(windowRef: SkyAppWindowRef): any {
  const config: any = {"runtime":{"app":{"inject":false,"template":"/Users/stevebr/Projects/github/blackbaud/skyux-indicators/node_modules/@skyux-sdk/builder/src/main.ejs","base":"/skyux-indicators/","name":"skyux-indicators"},"command":"build","componentsPattern":"**/*.component.ts","componentsIgnorePattern":"./public/**/*","includeRouteModule":true,"routesPattern":"**/index.html","runtimeAlias":"@skyux-sdk/builder/runtime","srcPath":"src/app/","spaPathAlias":"../..","skyPagesOutAlias":"../..","useTemplateUrl":true,"handle404":true,"routes":[{"routePath":"docs/alert","routeParams":[]},{"routePath":"docs/help-inline","routeParams":[]},{"routePath":"docs/icon","routeParams":[]},{"routePath":"docs/key-info","routeParams":[]},{"routePath":"docs/label","routeParams":[]},{"routePath":"docs/status-indicator","routeParams":[]},{"routePath":"docs/text-highlight","routeParams":[]},{"routePath":"docs/tokens","routeParams":[]},{"routePath":"docs/wait","routeParams":[]},{"routePath":"","routeParams":[]},{"routePath":"visual/alert","routeParams":[]},{"routePath":"visual/chevron","routeParams":[]},{"routePath":"visual/help-inline","routeParams":[]},{"routePath":"visual/icon-stack","routeParams":[]},{"routePath":"visual/icon","routeParams":[]},{"routePath":"visual/key-info","routeParams":[]},{"routePath":"visual/label","routeParams":[]},{"routePath":"visual/status-indicator","routeParams":[]},{"routePath":"visual/text-highlight","routeParams":[]},{"routePath":"visual/tokens","routeParams":[]},{"routePath":"visual/wait","routeParams":[]},{"routePath":""},{"routePath":"**","routeParams":[]}]},"skyux":{"$schema":"./node_modules/@skyux/config/skyuxconfig-schema.json","mode":"easy","host":{"url":"https://developer.blackbaud.com","frameOptions":{"none":true}},"app":{"title":"Blackbaud - SKY UX Application","styles":["@skyux/theme/css/sky.css","@skyux/theme/css/themes/modern/styles.css","@skyux/docs-tools/css/docs-tools.css"],"theming":{"supportedThemes":["default","modern"],"theme":"default"}},"compileMode":"aot","params":{"addin":true,"envid":true,"leid":true,"svcid":{"value":"skyux"}},"name":"skyux-indicators","plugins":["@skyux-sdk/builder-plugin-skyux"],"omnibar":{},"testSettings":{"e2e":{"browserSet":"speedy"},"unit":{"browserSet":"paranoid"}},"pipelineSettings":{"vsts":{"testSettings":{"e2e":{"browserSet":false},"unit":{"browserSet":false}}}}}};
  config.runtime.params = new SkyAppRuntimeConfigParams(
    windowRef.nativeWindow.location.toString(),
    {"addin":true,"envid":true,"leid":true,"svcid":{"value":"skyux"}}
  );
  return config;
}

export function skyViewkeeperHostOptionsFactory(config: SkyAppConfig): SkyViewkeeperHostOptions {
  const omnibarExists = config.skyux.omnibar && config.runtime.params.get('addin') !== '1';

  const hostOptions = new SkyViewkeeperHostOptions();
  hostOptions.viewportMarginTop = omnibarExists ? 50 : 0;

  return hostOptions;
}

export function skyAppParamsConfigFactory(config: SkyAppConfig): SkyAppParamsConfig {
  return new SkyAppParamsConfig({
    params: config.skyux.params
  });
}

// Setting skyux config as static property exclusively for Bootstrapper
SkyAppBootstrapper.config = {"$schema":"./node_modules/@skyux/config/skyuxconfig-schema.json","mode":"easy","host":{"url":"https://developer.blackbaud.com","frameOptions":{"none":true}},"app":{"title":"Blackbaud - SKY UX Application","styles":["@skyux/theme/css/sky.css","@skyux/theme/css/themes/modern/styles.css","@skyux/docs-tools/css/docs-tools.css"],"theming":{"supportedThemes":["default","modern"],"theme":"default"}},"compileMode":"aot","params":{"addin":true,"envid":true,"leid":true,"svcid":{"value":"skyux"}},"name":"skyux-indicators","plugins":["@skyux-sdk/builder-plugin-skyux"],"omnibar":{},"testSettings":{"e2e":{"browserSet":"speedy"},"unit":{"browserSet":"paranoid"}},"pipelineSettings":{"vsts":{"testSettings":{"e2e":{"browserSet":false},"unit":{"browserSet":false}}}}};

// BEGIN IMPORTED COMPONENT: AlertDocsComponent
import { AlertDocsComponent } from '../../src/app/docs/alert/alert-docs.component';
// END IMPORTED COMPONENT: AlertDocsComponent

// BEGIN IMPORTED COMPONENT: HelpInlineDocsComponent
import { HelpInlineDocsComponent } from '../../src/app/docs/help-inline/help-inline-docs.component';
// END IMPORTED COMPONENT: HelpInlineDocsComponent

// BEGIN IMPORTED COMPONENT: IconDocsComponent
import { IconDocsComponent } from '../../src/app/docs/icon/icon-docs.component';
// END IMPORTED COMPONENT: IconDocsComponent

// BEGIN IMPORTED COMPONENT: IconDocsIconListComponent
import { IconDocsIconListComponent } from '../../src/app/docs/icon/icon-list.component';
// END IMPORTED COMPONENT: IconDocsIconListComponent

// BEGIN IMPORTED COMPONENT: KeyInfoDocsComponent
import { KeyInfoDocsComponent } from '../../src/app/docs/key-info/key-info-docs.component';
// END IMPORTED COMPONENT: KeyInfoDocsComponent

// BEGIN IMPORTED COMPONENT: LabelDocsComponent
import { LabelDocsComponent } from '../../src/app/docs/label/label-docs.component';
// END IMPORTED COMPONENT: LabelDocsComponent

// BEGIN IMPORTED COMPONENT: StatusIndicatorDocsComponent
import { StatusIndicatorDocsComponent } from '../../src/app/docs/status-indicator/status-indicator-docs.component';
// END IMPORTED COMPONENT: StatusIndicatorDocsComponent

// BEGIN IMPORTED COMPONENT: TextHighlightDocsComponent
import { TextHighlightDocsComponent } from '../../src/app/docs/text-highlight/text-highlight-docs.component';
// END IMPORTED COMPONENT: TextHighlightDocsComponent

// BEGIN IMPORTED COMPONENT: TokensDocsComponent
import { TokensDocsComponent } from '../../src/app/docs/tokens/tokens-docs.component';
// END IMPORTED COMPONENT: TokensDocsComponent

// BEGIN IMPORTED COMPONENT: WaitDocsComponent
import { WaitDocsComponent } from '../../src/app/docs/wait/wait-docs.component';
// END IMPORTED COMPONENT: WaitDocsComponent

// BEGIN IMPORTED COMPONENT: AlertVisualComponent
import { AlertVisualComponent } from '../../src/app/visual/alert/alert-visual.component';
// END IMPORTED COMPONENT: AlertVisualComponent

// BEGIN IMPORTED COMPONENT: SkyChevronDemoComponent
import { SkyChevronDemoComponent } from '../../src/app/visual/chevron/chevron-demo.component';
// END IMPORTED COMPONENT: SkyChevronDemoComponent

// BEGIN IMPORTED COMPONENT: SkyHelpInlineDemoComponent
import { SkyHelpInlineDemoComponent } from '../../src/app/visual/help-inline/help-inline-demo.component';
// END IMPORTED COMPONENT: SkyHelpInlineDemoComponent

// BEGIN IMPORTED COMPONENT: SkyIconStackDemoComponent
import { SkyIconStackDemoComponent } from '../../src/app/visual/icon-stack/icon-stack-demo.component';
// END IMPORTED COMPONENT: SkyIconStackDemoComponent

// BEGIN IMPORTED COMPONENT: SkyIconDemoComponent
import { SkyIconDemoComponent } from '../../src/app/visual/icon/icon-demo.component';
// END IMPORTED COMPONENT: SkyIconDemoComponent

// BEGIN IMPORTED COMPONENT: KeyInfoVisualComponent
import { KeyInfoVisualComponent } from '../../src/app/visual/key-info/key-info-visual.component';
// END IMPORTED COMPONENT: KeyInfoVisualComponent

// BEGIN IMPORTED COMPONENT: SkyLabelDemoComponent
import { SkyLabelDemoComponent } from '../../src/app/visual/label/label-demo.component';
// END IMPORTED COMPONENT: SkyLabelDemoComponent

// BEGIN IMPORTED COMPONENT: StatusIndicatorVisualComponent
import { StatusIndicatorVisualComponent } from '../../src/app/visual/status-indicator/status-indicator-visual.component';
// END IMPORTED COMPONENT: StatusIndicatorVisualComponent

// BEGIN IMPORTED COMPONENT: SkyTextHighlightDemoComponent
import { SkyTextHighlightDemoComponent } from '../../src/app/visual/text-highlight/text-highlight-demo.component';
// END IMPORTED COMPONENT: SkyTextHighlightDemoComponent

// BEGIN IMPORTED COMPONENT: SkyTokensDemoComponent
import { SkyTokensDemoComponent } from '../../src/app/visual/tokens/tokens-demo.component';
// END IMPORTED COMPONENT: SkyTokensDemoComponent

// BEGIN IMPORTED COMPONENT: SkyWaitDemoComponent
import { SkyWaitDemoComponent } from '../../src/app/visual/wait/wait-demo.component';
// END IMPORTED COMPONENT: SkyWaitDemoComponent

// AUTO GENERATED FROM: src/app/docs/alert/index.html
@Component({
  templateUrl: '../../src/app/docs/alert/index.html'
})
export class SPR_0_IndexComponent implements OnInit, OnDestroy {
  private sub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/docs/help-inline/index.html
@Component({
  templateUrl: '../../src/app/docs/help-inline/index.html'
})
export class SPR_1_IndexComponent implements OnInit, OnDestroy {
  private sub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/docs/icon/index.html
@Component({
  templateUrl: '../../src/app/docs/icon/index.html'
})
export class SPR_2_IndexComponent implements OnInit, OnDestroy {
  private sub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/docs/key-info/index.html
@Component({
  templateUrl: '../../src/app/docs/key-info/index.html'
})
export class SPR_3_IndexComponent implements OnInit, OnDestroy {
  private sub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/docs/label/index.html
@Component({
  templateUrl: '../../src/app/docs/label/index.html'
})
export class SPR_4_IndexComponent implements OnInit, OnDestroy {
  private sub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/docs/status-indicator/index.html
@Component({
  templateUrl: '../../src/app/docs/status-indicator/index.html'
})
export class SPR_5_IndexComponent implements OnInit, OnDestroy {
  private sub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/docs/text-highlight/index.html
@Component({
  templateUrl: '../../src/app/docs/text-highlight/index.html'
})
export class SPR_6_IndexComponent implements OnInit, OnDestroy {
  private sub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/docs/tokens/index.html
@Component({
  templateUrl: '../../src/app/docs/tokens/index.html'
})
export class SPR_7_IndexComponent implements OnInit, OnDestroy {
  private sub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/docs/wait/index.html
@Component({
  templateUrl: '../../src/app/docs/wait/index.html'
})
export class SPR_8_IndexComponent implements OnInit, OnDestroy {
  private sub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/index.html
@Component({
  templateUrl: '../../src/app/index.html'
})
export class SPR_9_IndexComponent implements OnInit, OnDestroy {
  private sub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/visual/alert/index.html
@Component({
  templateUrl: '../../src/app/visual/alert/index.html'
})
export class SPR_10_IndexComponent implements OnInit, OnDestroy {
  private sub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/visual/chevron/index.html
@Component({
  templateUrl: '../../src/app/visual/chevron/index.html'
})
export class SPR_11_IndexComponent implements OnInit, OnDestroy {
  private sub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/visual/help-inline/index.html
@Component({
  templateUrl: '../../src/app/visual/help-inline/index.html'
})
export class SPR_12_IndexComponent implements OnInit, OnDestroy {
  private sub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/visual/icon-stack/index.html
@Component({
  templateUrl: '../../src/app/visual/icon-stack/index.html'
})
export class SPR_13_IndexComponent implements OnInit, OnDestroy {
  private sub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/visual/icon/index.html
@Component({
  templateUrl: '../../src/app/visual/icon/index.html'
})
export class SPR_14_IndexComponent implements OnInit, OnDestroy {
  private sub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/visual/key-info/index.html
@Component({
  templateUrl: '../../src/app/visual/key-info/index.html'
})
export class SPR_15_IndexComponent implements OnInit, OnDestroy {
  private sub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/visual/label/index.html
@Component({
  templateUrl: '../../src/app/visual/label/index.html'
})
export class SPR_16_IndexComponent implements OnInit, OnDestroy {
  private sub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/visual/status-indicator/index.html
@Component({
  templateUrl: '../../src/app/visual/status-indicator/index.html'
})
export class SPR_17_IndexComponent implements OnInit, OnDestroy {
  private sub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/visual/text-highlight/index.html
@Component({
  templateUrl: '../../src/app/visual/text-highlight/index.html'
})
export class SPR_18_IndexComponent implements OnInit, OnDestroy {
  private sub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/visual/tokens/index.html
@Component({
  templateUrl: '../../src/app/visual/tokens/index.html'
})
export class SPR_19_IndexComponent implements OnInit, OnDestroy {
  private sub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

// AUTO GENERATED FROM: src/app/visual/wait/index.html
@Component({
  templateUrl: '../../src/app/visual/wait/index.html'
})
export class SPR_20_IndexComponent implements OnInit, OnDestroy {
  private sub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    public config: SkyAppConfig
  ) { }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

@Component({ template: '<router-outlet></router-outlet>' }) export class RootComponent {}

@Component({ template: `<iframe src="https://host.nxt.blackbaud.com/errors/notfound" style="border:0;height:100vh;width:100%;" [title]="'skyux_builder_page_not_found_iframe_title' | skyAppResources"></iframe>` }) export class NotFoundComponent { }
const appRoutingProviders: any[] = []
const routes: Routes = [
{
    path: '',
    component: RootComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: [{
    path: 'docs/alert',
    component: SPR_0_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'docs/help-inline',
    component: SPR_1_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'docs/icon',
    component: SPR_2_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'docs/key-info',
    component: SPR_3_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'docs/label',
    component: SPR_4_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'docs/status-indicator',
    component: SPR_5_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'docs/text-highlight',
    component: SPR_6_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'docs/tokens',
    component: SPR_7_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'docs/wait',
    component: SPR_8_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: '',
    component: SPR_9_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'visual/alert',
    component: SPR_10_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'visual/chevron',
    component: SPR_11_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'visual/help-inline',
    component: SPR_12_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'visual/icon-stack',
    component: SPR_13_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'visual/icon',
    component: SPR_14_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'visual/key-info',
    component: SPR_15_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'visual/label',
    component: SPR_16_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'visual/status-indicator',
    component: SPR_17_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'visual/text-highlight',
    component: SPR_18_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'visual/tokens',
    component: SPR_19_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  },
{
    path: 'visual/wait',
    component: SPR_20_IndexComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  }]
  },
{
    path: '**',
    component: NotFoundComponent,
    canActivate: [],
    canDeactivate: [],
    canActivateChild: [],
    children: []
  }
];
const routing = RouterModule.forRoot(routes, { useHash: false });

import { enableProdMode } from '@angular/core';
enableProdMode();

require('!style-loader!css-loader!sass-loader!@skyux/theme/css/sky.css');
require('!style-loader!css-loader!sass-loader!@skyux/theme/css/themes/modern/styles.css');
require('!style-loader!css-loader!sass-loader!@skyux/docs-tools/css/docs-tools.css');


@NgModule({
  declarations: [
    AlertDocsComponent,
    HelpInlineDocsComponent,
    IconDocsComponent,
    IconDocsIconListComponent,
    KeyInfoDocsComponent,
    LabelDocsComponent,
    StatusIndicatorDocsComponent,
    TextHighlightDocsComponent,
    TokensDocsComponent,
    WaitDocsComponent,
    AlertVisualComponent,
    SkyChevronDemoComponent,
    SkyHelpInlineDemoComponent,
    SkyIconStackDemoComponent,
    SkyIconDemoComponent,
    KeyInfoVisualComponent,
    SkyLabelDemoComponent,
    StatusIndicatorVisualComponent,
    SkyTextHighlightDemoComponent,
    SkyTokensDemoComponent,
    SkyWaitDemoComponent,
    SPR_0_IndexComponent,
    SPR_1_IndexComponent,
    SPR_2_IndexComponent,
    SPR_3_IndexComponent,
    SPR_4_IndexComponent,
    SPR_5_IndexComponent,
    SPR_6_IndexComponent,
    SPR_7_IndexComponent,
    SPR_8_IndexComponent,
    SPR_9_IndexComponent,
    SPR_10_IndexComponent,
    SPR_11_IndexComponent,
    SPR_12_IndexComponent,
    SPR_13_IndexComponent,
    SPR_14_IndexComponent,
    SPR_15_IndexComponent,
    SPR_16_IndexComponent,
    SPR_17_IndexComponent,
    SPR_18_IndexComponent,
    SPR_19_IndexComponent,
    SPR_20_IndexComponent,
    RootComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SkyI18nModule,
    SkyAppHostLocaleModule,
    SkyAppAuthTokenModule,
    AppExtrasModule,
    SkyThemeModule,
    routing
  ],
  exports: [
    AlertDocsComponent,
    HelpInlineDocsComponent,
    IconDocsComponent,
    IconDocsIconListComponent,
    KeyInfoDocsComponent,
    LabelDocsComponent,
    StatusIndicatorDocsComponent,
    TextHighlightDocsComponent,
    TokensDocsComponent,
    WaitDocsComponent,
    AlertVisualComponent,
    SkyChevronDemoComponent,
    SkyHelpInlineDemoComponent,
    SkyIconStackDemoComponent,
    SkyIconDemoComponent,
    KeyInfoVisualComponent,
    SkyLabelDemoComponent,
    StatusIndicatorVisualComponent,
    SkyTextHighlightDemoComponent,
    SkyTokensDemoComponent,
    SkyWaitDemoComponent,
    SPR_0_IndexComponent,
    SPR_1_IndexComponent,
    SPR_2_IndexComponent,
    SPR_3_IndexComponent,
    SPR_4_IndexComponent,
    SPR_5_IndexComponent,
    SPR_6_IndexComponent,
    SPR_7_IndexComponent,
    SPR_8_IndexComponent,
    SPR_9_IndexComponent,
    SPR_10_IndexComponent,
    SPR_11_IndexComponent,
    SPR_12_IndexComponent,
    SPR_13_IndexComponent,
    SPR_14_IndexComponent,
    SPR_15_IndexComponent,
    SPR_16_IndexComponent,
    SPR_17_IndexComponent,
    SPR_18_IndexComponent,
    SPR_19_IndexComponent,
    SPR_20_IndexComponent,
    RootComponent,
    NotFoundComponent
  ],
  providers: [
    SkyAppWindowRef,
    {
      provide: SkyAppConfig,
      deps: [
        SkyAppWindowRef
      ],
      useFactory: SkyAppConfigFactory
    },
    {
      provide: SkyAppParamsConfig,
      useFactory: skyAppParamsConfigFactory,
      deps: [SkyAppConfig]
    },
    {
      provide: SkyAppAssetsService,
      useClass: SkyAppAssetsImplService
    },
    {
      provide: SkyViewkeeperHostOptions,
      deps: [
        SkyAppConfig
      ],
      useFactory: skyViewkeeperHostOptionsFactory
    },
    SkyThemeService,
    { provide: SkyAppTitleService, useClass: SkyAppOmnibarTitleService },
    appRoutingProviders
  ]
}) export class SkyPagesModule { }