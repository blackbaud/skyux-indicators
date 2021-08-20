
import {
  SkyDocsSourceCodeProvider,
  SkyDocsTypeDefinitionsProvider
} from '@skyux/docs-tools';

export class SkyDocsSourceCodeImplService {
  public readonly sourceCode: any[] = [
  {
    "fileName": "alert-demo.component.html",
    "filePath": "src/app/public/plugin-resources/code-examples/alert/basic/alert-demo.component.html",
    "rawContents": "%3Csky-alert%0A%20%20alertType%3D%22danger%22%0A%20%20%5Bcloseable%5D%3D%22false%22%0A%20%20%5Bclosed%5D%3D%22false%22%0A%3E%0A%20%20Danger%20alert%20message%0A%3C%2Fsky-alert%3E"
  },
  {
    "fileName": "alert-demo.component.ts",
    "filePath": "src/app/public/plugin-resources/code-examples/alert/basic/alert-demo.component.ts",
    "rawContents": "import%20%7B%0A%20%20Component%0A%7D%20from%20'%40angular%2Fcore'%3B%0A%0A%40Component(%7B%0A%20%20selector%3A%20'app-alert-demo'%2C%0A%20%20templateUrl%3A%20'.%2Falert-demo.component.html'%0A%7D)%0Aexport%20class%20AlertDemoComponent%20%7B%20%7D%0A"
  },
  {
    "fileName": "alert-demo.module.ts",
    "filePath": "src/app/public/plugin-resources/code-examples/alert/basic/alert-demo.module.ts",
    "rawContents": "%0Aimport%20%7B%0A%20%20NgModule%0A%7D%20from%20'%40angular%2Fcore'%3B%0A%0Aimport%20%7B%0A%20%20CommonModule%0A%7D%20from%20'%40angular%2Fcommon'%3B%0A%0Aimport%20%7B%0A%20%20SkyAlertModule%0A%7D%20from%20'%40skyux%2Findicators'%3B%0A%0Aimport%20%7B%0A%20%20AlertDemoComponent%0A%7D%20from%20'.%2Falert-demo.component'%3B%0A%0A%40NgModule(%7B%0A%20%20imports%3A%20%5B%0A%20%20%20%20CommonModule%2C%0A%20%20%20%20SkyAlertModule%0A%20%20%5D%2C%0A%20%20declarations%3A%20%5B%0A%20%20%20%20AlertDemoComponent%0A%20%20%5D%2C%0A%20%20exports%3A%20%5B%0A%20%20%20%20AlertDemoComponent%0A%20%20%5D%0A%7D)%0Aexport%20class%20AlertDemoModule%20%7B%20%7D%0A"
  },
  {
    "fileName": "help-inline-demo.component.html",
    "filePath": "src/app/public/plugin-resources/code-examples/help-inline/basic/help-inline-demo.component.html",
    "rawContents": "%3Ch2%3E%0A%20%20My%20heading%0A%20%20%3Csky-help-inline%0A%20%20%20%20(actionClick)%3D%22onActionClick()%22%0A%20%20%3E%3C%2Fsky-help-inline%3E%0A%3C%2Fh2%3E%0A"
  },
  {
    "fileName": "help-inline-demo.component.ts",
    "filePath": "src/app/public/plugin-resources/code-examples/help-inline/basic/help-inline-demo.component.ts",
    "rawContents": "import%20%7B%0A%20%20Component%0A%7D%20from%20'%40angular%2Fcore'%3B%0A%0A%40Component(%7B%0A%20%20selector%3A%20'app-help-inline-demo'%2C%0A%20%20templateUrl%3A%20'.%2Fhelp-inline-demo.component.html'%0A%7D)%0Aexport%20class%20HelpInlineDemoComponent%20%7B%0A%0A%20%20public%20onActionClick()%3A%20void%20%7B%0A%20%20%20%20alert('Help%20inline%20button%20clicked!')%3B%0A%20%20%7D%0A%0A%7D%0A"
  },
  {
    "fileName": "help-inline-demo.module.ts",
    "filePath": "src/app/public/plugin-resources/code-examples/help-inline/basic/help-inline-demo.module.ts",
    "rawContents": "import%20%7B%0A%20%20CommonModule%0A%7D%20from%20'%40angular%2Fcommon'%3B%0A%0Aimport%20%7B%0A%20%20NgModule%0A%7D%20from%20'%40angular%2Fcore'%3B%0A%0Aimport%20%7B%0A%20%20SkyHelpInlineModule%0A%7D%20from%20'%40skyux%2Findicators'%3B%0A%0Aimport%20%7B%0A%20%20HelpInlineDemoComponent%0A%7D%20from%20'.%2Fhelp-inline-demo.component'%3B%0A%0A%40NgModule(%7B%0A%20%20imports%3A%20%5B%0A%20%20%20%20CommonModule%2C%0A%20%20%20%20SkyHelpInlineModule%0A%20%20%5D%2C%0A%20%20exports%3A%20%5B%0A%20%20%20%20HelpInlineDemoComponent%0A%20%20%5D%2C%0A%20%20declarations%3A%20%5B%0A%20%20%20%20HelpInlineDemoComponent%0A%20%20%5D%0A%7D)%0Aexport%20class%20HelpInlineDemoModule%20%7B%20%7D%0A"
  },
  {
    "fileName": "icon-demo.component.html",
    "filePath": "src/app/public/plugin-resources/code-examples/icon/icon-demo.component.html",
    "rawContents": "%3Csky-icon%0A%20%20icon%3D%22bars%22%0A%20%20size%3D%22lg%22%0A%3E%0A%3C%2Fsky-icon%3E%0A%3Csky-icon%0A%20%20icon%3D%22chevron-down%22%0A%20%20size%3D%22sm%22%0A%3E%0A%3C%2Fsky-icon%3E%0A%3Csky-icon%0A%20%20icon%3D%22chevron-up%22%0A%20%20size%3D%225x%22%0A%3E%0A%3C%2Fsky-icon%3E%0A%3Csky-icon%0A%20%20icon%3D%22cog%22%0A%20%20size%3D%222x%22%0A%3E%0A%3C%2Fsky-icon%3E%0A%3Csky-icon%0A%20%20icon%3D%22comment%22%0A%20%20size%3D%22xs%22%0A%3E%0A%3C%2Fsky-icon%3E%0A%3Csky-icon%0A%20%20icon%3D%22database%22%0A%20%20size%3D%223x%22%0A%3E%0A%3C%2Fsky-icon%3E%0A%3Csky-icon%0A%20%20fixedWidth%3D%22true%22%0A%20%20icon%3D%22spinner%22%0A%20%20size%3D%223x%22%0A%3E%0A%3C%2Fsky-icon%3E%0A%3Csky-icon%0A%20%20icon%3D%22trash%22%0A%20%20size%3D%22sm%22%0A%3E%0A%3C%2Fsky-icon%3E%0A%3Csky-icon%0A%20%20icon%3D%22users%22%0A%20%20size%3D%224x%22%0A%3E%0A%3C%2Fsky-icon%3E%0A%3Csky-icon%0A%20%20icon%3D%22user%22%0A%20%20size%3D%225x%22%0A%3E%0A%3C%2Fsky-icon%3E%0A%3Csky-icon%0A%20%20icon%3D%22sort%22%0A%20%20iconType%3D%22skyux%22%0A%20%20size%3D%225x%22%0A%3E%0A%3C%2Fsky-icon%3E%0A"
  },
  {
    "fileName": "icon-demo.component.ts",
    "filePath": "src/app/public/plugin-resources/code-examples/icon/icon-demo.component.ts",
    "rawContents": "import%20%7B%0A%20%20Component%0A%7D%20from%20'%40angular%2Fcore'%3B%0A%0A%40Component(%7B%0A%20%20selector%3A%20'app-icon-demo'%2C%0A%20%20templateUrl%3A%20'.%2Ficon-demo.component.html'%0A%7D)%0Aexport%20class%20IconDemoComponent%20%7B%20%7D%0A"
  },
  {
    "fileName": "icon-demo.module.ts",
    "filePath": "src/app/public/plugin-resources/code-examples/icon/icon-demo.module.ts",
    "rawContents": "%0Aimport%20%7B%0A%20%20NgModule%0A%7D%20from%20'%40angular%2Fcore'%3B%0A%0Aimport%20%7B%0A%20%20CommonModule%0A%7D%20from%20'%40angular%2Fcommon'%3B%0A%0Aimport%20%7B%0A%20%20SkyIconModule%0A%7D%20from%20'%40skyux%2Findicators'%3B%0A%0Aimport%20%7B%0A%20%20IconDemoComponent%0A%7D%20from%20'.%2Ficon-demo.component'%3B%0A%0A%40NgModule(%7B%0A%20%20imports%3A%20%5B%0A%20%20%20%20CommonModule%2C%0A%20%20%20%20SkyIconModule%0A%20%20%5D%2C%0A%20%20declarations%3A%20%5B%0A%20%20%20%20IconDemoComponent%0A%20%20%5D%2C%0A%20%20exports%3A%20%5B%0A%20%20%20%20IconDemoComponent%0A%20%20%5D%0A%7D)%0Aexport%20class%20IconDemoModule%20%7B%20%7D%0A"
  },
  {
    "fileName": "key-info-demo.component.html",
    "filePath": "src/app/public/plugin-resources/code-examples/key-info/basic/key-info-demo.component.html",
    "rawContents": "%3Csky-key-info%0A%20%20%5Blayout%5D%3D%22layout%22%0A%3E%0A%20%20%3Csky-key-info-value%3E%0A%20%20%20%20575%0A%20%20%3C%2Fsky-key-info-value%3E%0A%20%20%3Csky-key-info-label%3E%0A%20%20%20%20New%20members%0A%20%20%3C%2Fsky-key-info-label%3E%0A%3C%2Fsky-key-info%3E%0A"
  },
  {
    "fileName": "key-info-demo.component.ts",
    "filePath": "src/app/public/plugin-resources/code-examples/key-info/basic/key-info-demo.component.ts",
    "rawContents": "import%20%7B%0A%20%20Component%0A%7D%20from%20'%40angular%2Fcore'%3B%0A%0A%40Component(%7B%0A%20%20selector%3A%20'app-key-info-demo'%2C%0A%20%20templateUrl%3A%20'.%2Fkey-info-demo.component.html'%0A%7D)%0Aexport%20class%20KeyInfoDemoComponent%20%7B%0A%0A%20%20public%20layout%3A%20string%20%3D%20'vertical'%3B%0A%0A%7D%0A"
  },
  {
    "fileName": "key-info-demo.module.ts",
    "filePath": "src/app/public/plugin-resources/code-examples/key-info/basic/key-info-demo.module.ts",
    "rawContents": "import%20%7B%0A%20%20NgModule%0A%7D%20from%20'%40angular%2Fcore'%3B%0A%0Aimport%20%7B%0A%20%20CommonModule%0A%7D%20from%20'%40angular%2Fcommon'%3B%0A%0Aimport%20%7B%0A%20%20SkyKeyInfoModule%0A%7D%20from%20'%40skyux%2Findicators'%3B%0A%0Aimport%20%7B%0A%20%20KeyInfoDemoComponent%0A%7D%20from%20'.%2Fkey-info-demo.component'%3B%0A%0A%40NgModule(%7B%0A%20%20imports%3A%20%5B%0A%20%20%20%20CommonModule%2C%0A%20%20%20%20SkyKeyInfoModule%0A%20%20%5D%2C%0A%20%20declarations%3A%20%5B%0A%20%20%20%20KeyInfoDemoComponent%0A%20%20%5D%2C%0A%20%20exports%3A%20%5B%0A%20%20%20%20KeyInfoDemoComponent%0A%20%20%5D%0A%7D)%0Aexport%20class%20KeyInfoDemoModule%20%7B%20%7D%0A"
  },
  {
    "fileName": "label-demo.component.html",
    "filePath": "src/app/public/plugin-resources/code-examples/label/basic/label-demo.component.html",
    "rawContents": "%3Csky-label%0A%20%20class%3D%22sky-margin-inline-default%22%0A%20%20labelType%3D%22info%22%0A%3E%0A%20%20Info%20label%0A%3C%2Fsky-label%3E%0A%0A%3Csky-label%0A%20%20class%3D%22sky-margin-inline-default%22%0A%20%20labelType%3D%22success%22%0A%3E%0A%20%20Success%20label%0A%3C%2Fsky-label%3E%0A%0A%3Csky-label%0A%20%20class%3D%22sky-margin-inline-default%22%0A%20%20labelType%3D%22warning%22%0A%3E%0A%20%20Warning%20label%0A%3C%2Fsky-label%3E%0A%0A%3Csky-label%0A%20%20class%3D%22sky-margin-inline-default%22%0A%20%20labelType%3D%22danger%22%0A%3E%0A%20%20Danger%20label%0A%3C%2Fsky-label%3E%0A"
  },
  {
    "fileName": "label-demo.component.ts",
    "filePath": "src/app/public/plugin-resources/code-examples/label/basic/label-demo.component.ts",
    "rawContents": "import%20%7B%0A%20%20Component%0A%7D%20from%20'%40angular%2Fcore'%3B%0A%0A%40Component(%7B%0A%20%20selector%3A%20'app-label-demo'%2C%0A%20%20templateUrl%3A%20'.%2Flabel-demo.component.html'%0A%7D)%0Aexport%20class%20LabelDemoComponent%20%7B%20%7D%0A"
  },
  {
    "fileName": "label-demo.module.ts",
    "filePath": "src/app/public/plugin-resources/code-examples/label/basic/label-demo.module.ts",
    "rawContents": "import%20%7B%0A%20%20CommonModule%0A%7D%20from%20'%40angular%2Fcommon'%3B%0A%0Aimport%20%7B%0A%20%20NgModule%0A%7D%20from%20'%40angular%2Fcore'%3B%0A%0Aimport%20%7B%0A%20%20SkyLabelModule%0A%7D%20from%20'%40skyux%2Findicators'%3B%0A%0Aimport%20%7B%0A%20%20LabelDemoComponent%0A%7D%20from%20'.%2Flabel-demo.component'%3B%0A%0A%40NgModule(%7B%0A%20%20imports%3A%20%5B%0A%20%20%20%20CommonModule%2C%0A%20%20%20%20SkyLabelModule%0A%20%20%5D%2C%0A%20%20exports%3A%20%5B%0A%20%20%20%20LabelDemoComponent%0A%20%20%5D%2C%0A%20%20declarations%3A%20%5B%0A%20%20%20%20LabelDemoComponent%0A%20%20%5D%0A%7D)%0Aexport%20class%20LabelDemoModule%20%7B%20%7D%0A"
  },
  {
    "fileName": "status-indicator-demo.component.html",
    "filePath": "src/app/public/plugin-resources/code-examples/status-indicator/basic/status-indicator-demo.component.html",
    "rawContents": "%3Csky-status-indicator%0A%20%20descriptionType%3D%22none%22%0A%20%20indicatorType%3D%22danger%22%0A%3E%0A%20%20Danger%20status%20indicator%0A%3C%2Fsky-status-indicator%3E%0A%3Csky-status-indicator%0A%20%20descriptionType%3D%22important-info%22%0A%20%20indicatorType%3D%22info%22%0A%3E%0A%20%20Info%20status%20indicator%0A%3C%2Fsky-status-indicator%3E%0A%3Csky-status-indicator%0A%20%20descriptionType%3D%22none%22%0A%20%20indicatorType%3D%22success%22%0A%3E%0A%20%20Success%20status%20indicator%0A%3C%2Fsky-status-indicator%3E%0A%3Csky-status-indicator%0A%20%20descriptionType%3D%22none%22%0A%20%20indicatorType%3D%22warning%22%0A%3E%0A%20%20Warning%20status%20indicator%0A%3C%2Fsky-status-indicator%3E%0A"
  },
  {
    "fileName": "status-indicator-demo.component.ts",
    "filePath": "src/app/public/plugin-resources/code-examples/status-indicator/basic/status-indicator-demo.component.ts",
    "rawContents": "import%20%7B%0A%20%20Component%0A%7D%20from%20'%40angular%2Fcore'%3B%0A%0A%40Component(%7B%0A%20%20selector%3A%20'app-status-indicator-demo'%2C%0A%20%20templateUrl%3A%20'.%2Fstatus-indicator-demo.component.html'%0A%7D)%0Aexport%20class%20StatusIndicatorDemoComponent%20%7B%20%7D%0A"
  },
  {
    "fileName": "status-indicator-demo.module.ts",
    "filePath": "src/app/public/plugin-resources/code-examples/status-indicator/basic/status-indicator-demo.module.ts",
    "rawContents": "%0Aimport%20%7B%0A%20%20NgModule%0A%7D%20from%20'%40angular%2Fcore'%3B%0A%0Aimport%20%7B%0A%20%20CommonModule%0A%7D%20from%20'%40angular%2Fcommon'%3B%0A%0Aimport%20%7B%0A%20%20SkyStatusIndicatorModule%0A%7D%20from%20'%40skyux%2Findicators'%3B%0A%0Aimport%20%7B%0A%20%20StatusIndicatorDemoComponent%0A%7D%20from%20'.%2Fstatus-indicator-demo.component'%3B%0A%0A%40NgModule(%7B%0A%20%20imports%3A%20%5B%0A%20%20%20%20CommonModule%2C%0A%20%20%20%20SkyStatusIndicatorModule%0A%20%20%5D%2C%0A%20%20declarations%3A%20%5B%0A%20%20%20%20StatusIndicatorDemoComponent%0A%20%20%5D%2C%0A%20%20exports%3A%20%5B%0A%20%20%20%20StatusIndicatorDemoComponent%0A%20%20%5D%0A%7D)%0Aexport%20class%20StatusIndicatorDemoModule%20%7B%20%7D%0A"
  },
  {
    "fileName": "text-highlight-demo.component.html",
    "filePath": "src/app/public/plugin-resources/code-examples/text-highlight/basic/text-highlight-demo.component.html",
    "rawContents": "%3Cdiv%0A%20%20class%3D%22sky-form-group%22%0A%20%20style%3D%22width%3A200px%3B%22%0A%3E%0A%20%20%3Clabel%0A%20%20%20%20%5Bfor%5D%3D%22searchTermInput.id%22%0A%20%20%20%20class%3D%22sky-control-label%22%0A%20%20%3E%0A%20%20%20%20Text%20to%20highlight%0A%20%20%3C%2Flabel%3E%0A%20%20%3Cbr%3E%0A%20%20%3Cinput%0A%20%20%20%20class%3D%22sky-form-control%22%0A%20%20%20%20id%3D%22sky-demo-search-term%22%0A%20%20%20%20skyId%0A%20%20%20%20type%3D%22text%22%0A%20%20%20%20%5B(ngModel)%5D%3D%22searchTerm%22%0A%20%20%20%20%23searchTermInput%3D%22skyId%22%0A%20%20%3E%0A%3C%2Fdiv%3E%0A%0A%3Cdiv%0A%20%20class%3D%22sky-margin-stacked-default%22%0A%3E%0A%20%20%3Csky-checkbox%0A%20%20%20%20%5B(ngModel)%5D%3D%22showAdditionalContent%22%0A%20%20%3E%0A%20%20%20%20%3Csky-checkbox-label%3E%0A%20%20%20%20%20%20Display%20additional%20content%0A%20%20%20%20%3C%2Fsky-checkbox-label%3E%0A%20%20%3C%2Fsky-checkbox%3E%0A%3C%2Fdiv%3E%0A%0A%3Cdiv%0A%20%20%5BskyHighlight%5D%3D%22searchTerm%22%0A%3E%0A%20%20The%20text%20that%20you%20enter%20is%20highlighted%20here.%0A%20%20%3Cdiv%20*ngIf%3D%22showAdditionalContent%22%3E%0A%20%20%20%20This%20additional%20content%20is%20highlighted%20too!%0A%20%20%3C%2Fdiv%3E%0A%3C%2Fdiv%3E%0A"
  },
  {
    "fileName": "text-highlight-demo.component.ts",
    "filePath": "src/app/public/plugin-resources/code-examples/text-highlight/basic/text-highlight-demo.component.ts",
    "rawContents": "import%20%7B%0A%20%20Component%0A%7D%20from%20'%40angular%2Fcore'%3B%0A%0A%40Component(%7B%0A%20%20selector%3A%20'app-text-highlight-demo'%2C%0A%20%20templateUrl%3A%20'.%2Ftext-highlight-demo.component.html'%0A%7D)%0Aexport%20class%20TextHighlightDemoComponent%20%7B%0A%0A%20%20public%20searchTerm%3A%20string%3B%0A%0A%20%20public%20showAdditionalContent%3A%20boolean%20%3D%20false%3B%0A%0A%7D%0A"
  },
  {
    "fileName": "text-highlight-demo.module.ts",
    "filePath": "src/app/public/plugin-resources/code-examples/text-highlight/basic/text-highlight-demo.module.ts",
    "rawContents": "import%20%7B%0A%20%20CommonModule%0A%7D%20from%20'%40angular%2Fcommon'%3B%0A%0Aimport%20%7B%0A%20%20NgModule%0A%7D%20from%20'%40angular%2Fcore'%3B%0A%0Aimport%20%7B%0A%20%20FormsModule%0A%7D%20from%20'%40angular%2Fforms'%3B%0A%0Aimport%20%7B%0A%20%20SkyIdModule%0A%7D%20from%20'%40skyux%2Fcore'%3B%0A%0Aimport%20%7B%0A%20%20SkyCheckboxModule%0A%7D%20from%20'%40skyux%2Fforms'%3B%0A%0Aimport%20%7B%0A%20%20SkyTextHighlightModule%0A%7D%20from%20'%40skyux%2Findicators'%3B%0A%0Aimport%20%7B%0A%20%20TextHighlightDemoComponent%0A%7D%20from%20'.%2Ftext-highlight-demo.component'%3B%0A%0A%40NgModule(%7B%0A%20%20imports%3A%20%5B%0A%20%20%20%20CommonModule%2C%0A%20%20%20%20FormsModule%2C%0A%20%20%20%20SkyCheckboxModule%2C%0A%20%20%20%20SkyIdModule%2C%0A%20%20%20%20SkyTextHighlightModule%0A%20%20%5D%2C%0A%20%20exports%3A%20%5B%0A%20%20%20%20TextHighlightDemoComponent%0A%20%20%5D%2C%0A%20%20declarations%3A%20%5B%0A%20%20%20%20TextHighlightDemoComponent%0A%20%20%5D%0A%7D)%0Aexport%20class%20TextHighlightDemoModule%20%7B%20%7D%0A"
  },
  {
    "fileName": "tokens-demo.component.html",
    "filePath": "src/app/public/plugin-resources/code-examples/tokens/basic/tokens-demo.component.html",
    "rawContents": "%3Csky-tokens%0A%20%20%5B(tokens)%5D%3D%22colors%22%0A%3E%0A%3C%2Fsky-tokens%3E%0A"
  },
  {
    "fileName": "tokens-demo.component.ts",
    "filePath": "src/app/public/plugin-resources/code-examples/tokens/basic/tokens-demo.component.ts",
    "rawContents": "import%20%7B%0A%20%20Component%0A%7D%20from%20'%40angular%2Fcore'%3B%0A%0Aimport%20%7B%0A%20%20SkyToken%0A%7D%20from%20'%40skyux%2Findicators'%3B%0A%0A%40Component(%7B%0A%20%20selector%3A%20'app-tokens-demo'%2C%0A%20%20templateUrl%3A%20'.%2Ftokens-demo.component.html'%0A%7D)%0Aexport%20class%20TokensDemoComponent%20%20%7B%0A%0A%20%20public%20colors%3A%20SkyToken%5B%5D%3B%0A%0A%20%20private%20defaultColors%20%3D%20%5B%0A%20%20%20%20%7B%20name%3A%20'Red'%20%7D%2C%0A%20%20%20%20%7B%20name%3A%20'Black'%20%7D%2C%0A%20%20%20%20%7B%20name%3A%20'Blue'%20%7D%2C%0A%20%20%20%20%7B%20name%3A%20'Brown'%20%7D%2C%0A%20%20%20%20%7B%20name%3A%20'Green'%20%7D%2C%0A%20%20%20%20%7B%20name%3A%20'Orange'%20%7D%2C%0A%20%20%20%20%7B%20name%3A%20'Pink'%20%7D%2C%0A%20%20%20%20%7B%20name%3A%20'Purple'%20%7D%2C%0A%20%20%20%20%7B%20name%3A%20'Turquoise'%20%7D%2C%0A%20%20%20%20%7B%20name%3A%20'White'%20%7D%2C%0A%20%20%20%20%7B%20name%3A%20'Yellow'%20%7D%0A%20%20%5D%3B%0A%0A%20%20constructor()%20%7B%0A%20%20%20%20this.colors%20%3D%20this.getTokens(this.defaultColors)%3B%0A%20%20%7D%0A%0A%20%20private%20getTokens(data%3A%20any%5B%5D)%3A%20SkyToken%5B%5D%20%7B%0A%20%20%20%20return%20data.map((item%3A%20any)%20%3D%3E%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20value%3A%20item%0A%20%20%20%20%20%20%7D%20as%20SkyToken%3B%0A%20%20%20%20%7D)%3B%0A%20%20%7D%0A%7D%0A"
  },
  {
    "fileName": "tokens-demo.module.ts",
    "filePath": "src/app/public/plugin-resources/code-examples/tokens/basic/tokens-demo.module.ts",
    "rawContents": "import%20%7B%0A%20%20CommonModule%0A%7D%20from%20'%40angular%2Fcommon'%3B%0A%0Aimport%20%7B%0A%20%20NgModule%0A%7D%20from%20'%40angular%2Fcore'%3B%0A%0Aimport%20%7B%0A%20%20SkyTokensModule%0A%7D%20from%20'%40skyux%2Findicators'%3B%0A%0Aimport%20%7B%0A%20%20TokensDemoComponent%0A%7D%20from%20'.%2Ftokens-demo.component'%3B%0A%0A%40NgModule(%7B%0A%20%20imports%3A%20%5B%0A%20%20%20%20CommonModule%2C%0A%20%20%20%20SkyTokensModule%0A%20%20%5D%2C%0A%20%20exports%3A%20%5B%0A%20%20%20%20TokensDemoComponent%0A%20%20%5D%2C%0A%20%20declarations%3A%20%5B%0A%20%20%20%20TokensDemoComponent%0A%20%20%5D%0A%7D)%0Aexport%20class%20TokensDemoModule%20%7B%20%7D%0A"
  },
  {
    "fileName": "tokens-demo.component.html",
    "filePath": "src/app/public/plugin-resources/code-examples/tokens/custom/tokens-demo.component.html",
    "rawContents": "%3Cp%3E%0A%20%20These%20tokens%20define%20a%20custom%20property%20to%20display%20their%20values.%20When%20users%20select%20a%20token%2C%20it%20emits%20an%20event.%0A%3C%2Fp%3E%0A%0A%3Cp%3E%0A%20%20%3Csky-tokens%0A%20%20%20%20displayWith%3D%22label%22%0A%20%20%20%20%5BmessageStream%5D%3D%22tokensController%22%0A%20%20%20%20(focusIndexOverRange)%3D%22onFocusIndexOverRange()%22%0A%20%20%20%20(focusIndexUnderRange)%3D%22onFocusIndexUnderRange()%22%0A%20%20%20%20(tokenSelected)%3D%22onTokenSelected(%24event)%22%0A%20%20%20%20%5B(tokens)%5D%3D%22myTokens%22%0A%20%20%3E%0A%20%20%20%20(You%20may%20also%20include%20content%20inside%20the%20tokens%20component.)%0A%20%20%3C%2Fsky-tokens%3E%0A%3C%2Fp%3E%0A%0A%3Cp%3E%0A%20%20%3Cbutton%0A%20%20%20%20class%3D%22sky-btn%20sky-btn-default%20sky-margin-inline-default%22%0A%20%20%20%20type%3D%22button%22%0A%20%20%20%20(click)%3D%22changeTokens()%22%0A%20%20%3E%0A%20%20%20%20Change%20tokens%0A%20%20%3C%2Fbutton%3E%0A%0A%20%20%3Cbutton%0A%20%20%20%20class%3D%22sky-btn%20sky-btn-default%20sky-margin-inline-default%22%0A%20%20%20%20type%3D%22button%22%0A%20%20%20%20(click)%3D%22resetTokens()%22%0A%20%20%3E%0A%20%20%20%20Reset%20tokens%0A%20%20%3C%2Fbutton%3E%0A%0A%20%20%3Cbutton%0A%20%20%20%20class%3D%22sky-btn%20sky-btn-default%20sky-margin-inline-default%22%0A%20%20%20%20type%3D%22button%22%0A%20%20%20%20(click)%3D%22destroyTokens()%22%0A%20%20%3E%0A%20%20%20%20Destroy%20tokens%0A%20%20%3C%2Fbutton%3E%0A%20%20%3Cbutton%0A%20%20%20%20class%3D%22sky-btn%20sky-btn-default%20sky-margin-inline-default%22%0A%20%20%20%20(click)%3D%22focusLastToken()%22%0A%20%20%3E%0A%20%20%20%20Focus%20last%20token%0A%20%20%3C%2Fbutton%3E%0A%3C%2Fp%3E%0A"
  },
  {
    "fileName": "tokens-demo.component.ts",
    "filePath": "src/app/public/plugin-resources/code-examples/tokens/custom/tokens-demo.component.ts",
    "rawContents": "import%20%7B%0A%20%20Component%2C%0A%20%20OnDestroy%0A%7D%20from%20'%40angular%2Fcore'%3B%0A%0Aimport%20%7B%0A%20%20SkyToken%2C%0A%20%20SkyTokenSelectedEventArgs%2C%0A%20%20SkyTokensMessage%2C%0A%20%20SkyTokensMessageType%0A%7D%20from%20'%40skyux%2Findicators'%3B%0A%0Aimport%20%7B%0A%20%20Subject%0A%7D%20from%20'rxjs'%3B%0A%0A%40Component(%7B%0A%20%20selector%3A%20'app-tokens-demo'%2C%0A%20%20templateUrl%3A%20'.%2Ftokens-demo.component.html'%0A%7D)%0Aexport%20class%20TokensDemoComponent%20implements%20OnDestroy%20%7B%0A%0A%20%20public%20myTokens%3A%20SkyToken%5B%5D%3B%0A%0A%20%20private%20defaultTokens%20%3D%20%5B%0A%20%20%20%20%7B%20label%3A%20'Canada'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'Older%20than%2055'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'Employed'%20%7D%2C%0A%20%20%20%20%7B%20label%3A%20'Added%20before%202018'%20%7D%0A%20%20%5D%3B%0A%0A%20%20public%20tokensController%3A%20Subject%3CSkyTokensMessage%3E%3B%0A%0A%20%20constructor()%20%7B%0A%20%20%20%20this.myTokens%20%3D%20this.getTokens(this.defaultTokens)%3B%0A%20%20%7D%0A%0A%20%20public%20ngOnDestroy()%3A%20void%20%7B%0A%20%20%20%20if%20(this.tokensController)%20%7B%0A%20%20%20%20%20%20this.tokensController.complete()%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%0A%20%20public%20resetTokens()%3A%20void%20%7B%0A%20%20%20%20this.createTokens()%3B%0A%20%20%7D%0A%0A%20%20public%20changeTokens()%3A%20void%20%7B%0A%20%20%20%20this.myTokens%20%3D%20this.getTokens(%5B%0A%20%20%20%20%20%20%7B%20label%3A%20'Paid'%20%7D%2C%0A%20%20%20%20%20%20%7B%20label%3A%20'Pending'%20%7D%2C%0A%20%20%20%20%20%20%7B%20label%3A%20'Past%20due'%20%7D%0A%20%20%20%20%5D)%3B%0A%20%20%7D%0A%0A%20%20public%20destroyTokens()%3A%20void%20%7B%0A%20%20%20%20this.myTokens%20%3D%20undefined%3B%0A%20%20%7D%0A%0A%20%20public%20createTokens()%3A%20void%20%7B%0A%20%20%20%20this.myTokens%20%3D%20this.getTokens(this.defaultTokens)%3B%0A%20%20%7D%0A%0A%20%20public%20onTokenSelected(args%3A%20SkyTokenSelectedEventArgs)%3A%20void%20%7B%0A%20%20%20%20console.log('Token%20selected%3A'%2C%20args)%3B%0A%20%20%7D%0A%0A%20%20public%20onFocusIndexUnderRange()%3A%20void%20%7B%0A%20%20%20%20console.log('Focus%20index%20was%20less%20than%20zero.')%3B%0A%20%20%7D%0A%0A%20%20public%20onFocusIndexOverRange()%3A%20void%20%7B%0A%20%20%20%20console.log('Focus%20index%20was%20greater%20than%20the%20number%20of%20tokens.')%3B%0A%20%20%7D%0A%0A%20%20public%20focusLastToken()%3A%20void%20%7B%0A%20%20%20%20if%20(!this.tokensController)%20%7B%0A%20%20%20%20%20%20this.tokensController%20%3D%20new%20Subject%3CSkyTokensMessage%3E()%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20this.tokensController.next(%7B%0A%20%20%20%20%20%20type%3A%20SkyTokensMessageType.FocusLastToken%0A%20%20%20%20%7D)%3B%0A%20%20%7D%0A%0A%20%20private%20getTokens(data%3A%20any%5B%5D)%3A%20SkyToken%5B%5D%20%7B%0A%20%20%20%20return%20data.map((item%3A%20any)%20%3D%3E%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20value%3A%20item%0A%20%20%20%20%20%20%7D%20as%20SkyToken%3B%0A%20%20%20%20%7D)%3B%0A%20%20%7D%0A%7D%0A"
  },
  {
    "fileName": "tokens-demo.module.ts",
    "filePath": "src/app/public/plugin-resources/code-examples/tokens/custom/tokens-demo.module.ts",
    "rawContents": "import%20%7B%0A%20%20CommonModule%0A%7D%20from%20'%40angular%2Fcommon'%3B%0A%0Aimport%20%7B%0A%20%20NgModule%0A%7D%20from%20'%40angular%2Fcore'%3B%0A%0Aimport%20%7B%0A%20%20SkyTokensModule%0A%7D%20from%20'%40skyux%2Findicators'%3B%0A%0Aimport%20%7B%0A%20%20TokensDemoComponent%0A%7D%20from%20'.%2Ftokens-demo.component'%3B%0A%0A%40NgModule(%7B%0A%20%20imports%3A%20%5B%0A%20%20%20%20CommonModule%2C%0A%20%20%20%20SkyTokensModule%0A%20%20%5D%2C%0A%20%20exports%3A%20%5B%0A%20%20%20%20TokensDemoComponent%0A%20%20%5D%2C%0A%20%20declarations%3A%20%5B%0A%20%20%20%20TokensDemoComponent%0A%20%20%5D%0A%7D)%0Aexport%20class%20TokensDemoModule%20%7B%20%7D%0A"
  },
  {
    "fileName": "wait-demo.component.html",
    "filePath": "src/app/public/plugin-resources/code-examples/wait/element/wait-demo.component.html",
    "rawContents": "%3Cbutton%0A%20%20type%3D%22button%22%0A%20%20class%3D%22sky-btn%20sky-btn-default%22%0A%20%20(click)%3D%22isWaiting%20%3D%20!isWaiting%22%0A%3E%0A%20%20Toggle%20wait%0A%3C%2Fbutton%3E%0A%0A%3Cdiv%0A%20%20style%3D%22height%3A%20200px%3B%20width%3A%20200px%3B%20margin%3A%2010px%3B%22%0A%3E%0A%20%20The%20%3Ccode%3Esky-wait%3C%2Fcode%3E%20directive%20can%20apply%20to%20a%20large%20area.%0A%20%20%3Csky-wait%0A%20%20%20%20%5BisWaiting%5D%3D%22isWaiting%22%0A%20%20%3E%0A%20%20%3C%2Fsky-wait%3E%0A%3C%2Fdiv%3E%0A"
  },
  {
    "fileName": "wait-demo.component.ts",
    "filePath": "src/app/public/plugin-resources/code-examples/wait/element/wait-demo.component.ts",
    "rawContents": "import%20%7B%0A%20%20Component%0A%7D%20from%20'%40angular%2Fcore'%3B%0A%0A%40Component(%7B%0A%20%20selector%3A%20'app-wait-demo'%2C%0A%20%20templateUrl%3A%20'.%2Fwait-demo.component.html'%0A%7D)%0Aexport%20class%20WaitDemoComponent%20%7B%0A%0A%20%20public%20isWaiting%3A%20boolean%20%3D%20false%3B%0A%0A%7D%0A"
  },
  {
    "fileName": "wait-demo.module.ts",
    "filePath": "src/app/public/plugin-resources/code-examples/wait/element/wait-demo.module.ts",
    "rawContents": "import%20%7B%0A%20%20CommonModule%0A%7D%20from%20'%40angular%2Fcommon'%3B%0A%0Aimport%20%7B%0A%20%20NgModule%0A%7D%20from%20'%40angular%2Fcore'%3B%0A%0Aimport%20%7B%0A%20%20SkyWaitModule%0A%7D%20from%20'%40skyux%2Findicators'%3B%0A%0Aimport%20%7B%0A%20%20WaitDemoComponent%0A%7D%20from%20'.%2Fwait-demo.component'%3B%0A%0A%40NgModule(%7B%0A%20%20imports%3A%20%5B%0A%20%20%20%20CommonModule%2C%0A%20%20%20%20SkyWaitModule%0A%20%20%5D%2C%0A%20%20exports%3A%20%5B%0A%20%20%20%20WaitDemoComponent%0A%20%20%5D%2C%0A%20%20declarations%3A%20%5B%0A%20%20%20%20WaitDemoComponent%0A%20%20%5D%0A%7D)%0Aexport%20class%20WaitDemoModule%20%7B%20%7D%0A"
  },
  {
    "fileName": "wait-demo.component.html",
    "filePath": "src/app/public/plugin-resources/code-examples/wait/page/wait-demo.component.html",
    "rawContents": "%3Cbutton%0A%20%20type%3D%22button%22%0A%20%20class%3D%22sky-btn%20sky-btn-default%20sky-margin-inline-default%22%0A%20%20(click)%3D%22showPageWait(true)%22%0A%3E%0A%20%20Show%20page%20wait%0A%3C%2Fbutton%3E%0A%0A%3Cbutton%0A%20%20type%3D%22button%22%0A%20%20class%3D%22sky-btn%20sky-btn-default%20sky-margin-inline-default%22%0A%20%20(click)%3D%22showPageWait(false)%22%0A%3E%0A%20%20Show%20non-blocking%20page%20wait%0A%3C%2Fbutton%3E%0A"
  },
  {
    "fileName": "wait-demo.component.ts",
    "filePath": "src/app/public/plugin-resources/code-examples/wait/page/wait-demo.component.ts",
    "rawContents": "import%20%7B%0A%20%20Component%0A%7D%20from%20'%40angular%2Fcore'%3B%0A%0Aimport%20%7B%0A%20%20SkyWaitService%0A%7D%20from%20'%40skyux%2Findicators'%3B%0A%0A%40Component(%7B%0A%20%20selector%3A%20'app-wait-demo'%2C%0A%20%20templateUrl%3A%20'.%2Fwait-demo.component.html'%0A%7D)%0Aexport%20class%20WaitDemoComponent%20%7B%0A%0A%20%20public%20isWaiting%20%3D%20false%3B%0A%0A%20%20constructor(%0A%20%20%20%20private%20waitSvc%3A%20SkyWaitService%0A%20%20)%20%7B%20%7D%0A%0A%20%20public%20showPageWait(isBlocking%3A%20boolean)%3A%20void%20%7B%0A%20%20%20%20if%20(isBlocking)%20%7B%0A%20%20%20%20%20%20this.waitSvc.beginBlockingPageWait()%3B%0A%20%20%20%20%20%20setTimeout(()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20this.waitSvc.endBlockingPageWait()%3B%0A%20%20%20%20%20%20%7D%2C%202000)%3B%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20this.waitSvc.beginNonBlockingPageWait()%3B%0A%20%20%20%20%20%20setTimeout(()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20this.waitSvc.endNonBlockingPageWait()%3B%0A%20%20%20%20%20%20%7D%2C%202000)%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%0A%7D%0A"
  },
  {
    "fileName": "wait-demo.module.ts",
    "filePath": "src/app/public/plugin-resources/code-examples/wait/page/wait-demo.module.ts",
    "rawContents": "import%20%7B%0A%20%20CommonModule%0A%7D%20from%20'%40angular%2Fcommon'%3B%0A%0Aimport%20%7B%0A%20%20NgModule%0A%7D%20from%20'%40angular%2Fcore'%3B%0A%0Aimport%20%7B%0A%20%20SkyWaitModule%0A%7D%20from%20'%40skyux%2Findicators'%3B%0A%0Aimport%20%7B%0A%20%20WaitDemoComponent%0A%7D%20from%20'.%2Fwait-demo.component'%3B%0A%0A%40NgModule(%7B%0A%20%20imports%3A%20%5B%0A%20%20%20%20CommonModule%2C%0A%20%20%20%20SkyWaitModule%0A%20%20%5D%2C%0A%20%20exports%3A%20%5B%0A%20%20%20%20WaitDemoComponent%0A%20%20%5D%2C%0A%20%20declarations%3A%20%5B%0A%20%20%20%20WaitDemoComponent%0A%20%20%5D%0A%7D)%0Aexport%20class%20WaitDemoModule%20%7B%20%7D%0A"
  }
];
}

export class SkyDocsTypeDefinitionsImplService {
  public readonly anchorIds: {[_: string]: string} = undefined;
  public readonly typeDefinitions: any[] = undefined;
}

import {
  NgModule
} from '@angular/core';

import {
  SkyIdModule
} from '@skyux/core';

import {
  SkyDocsToolsModule,
  SkyDocsToolsOptions
} from '@skyux/docs-tools';

import {
  SkyCheckboxModule
} from '@skyux/forms';

import {
  SkyAppLinkModule
} from '@skyux/router';

import {
  SkyThemeModule
} from '@skyux/theme';

import {
  SkyCodeModule
} from '@blackbaud/skyux-lib-code-block';

import {
  SkyAlertModule,
  SkyChevronModule,
  SkyHelpInlineModule,
  SkyIconModule,
  SkyKeyInfoModule,
  SkyLabelModule,
  SkyStatusIndicatorModule,
  SkyTextHighlightModule,
  SkyTokensModule,
  SkyWaitModule
} from './public/public_api';

@NgModule({
  exports: [
    SkyAlertModule,
    SkyAppLinkModule,
    SkyCheckboxModule,
    SkyChevronModule,
    SkyCodeModule,
    SkyDocsToolsModule,
    SkyHelpInlineModule,
    SkyIdModule,
    SkyIconModule,
    SkyKeyInfoModule,
    SkyLabelModule,
    SkyStatusIndicatorModule,
    SkyTextHighlightModule,
    SkyThemeModule,
    SkyTokensModule,
    SkyWaitModule
  ],
  providers: [
    {
      provide: SkyDocsSourceCodeProvider,
      useClass: SkyDocsSourceCodeImplService
    },
    {
      provide: SkyDocsTypeDefinitionsProvider,
      useClass: SkyDocsTypeDefinitionsImplService
    },
    {
      provide: SkyDocsToolsOptions,
      useValue: {
        gitRepoUrl: 'https://github.com/blackbaud/skyux-indicators',
        packageName: '@skyux/indicators'
      }
    }
  ]
})
export class AppExtrasModule { }

