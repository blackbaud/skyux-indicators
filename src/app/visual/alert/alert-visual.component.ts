import {
  Component
} from '@angular/core';

import {
  SkyThemeSettings
} from '@skyux/theme';

@Component({
  selector: 'sky-alert-visual',
  templateUrl: './alert-visual.component.html'
})
export class AlertVisualComponent {
  public alertCloseable = true;

  public themeSettings: SkyThemeSettings;

  public themeSettingsChange(themeSettings: SkyThemeSettings) {
    this.themeSettings = themeSettings;
  }
}
