import {
  Component
} from '@angular/core';

import {
  SkyThemeService,
  SkyThemeSettings
} from '@skyux/theme';

@Component({
  selector: 'sky-alert-visual',
  templateUrl: './alert-visual.component.html'
})
export class AlertVisualComponent {
  public alertCloseable = true;

  public themeSettings: SkyThemeSettings;

  constructor(private themeSvc: SkyThemeService) { }

  public themeSettingsChange(themeSettings: SkyThemeSettings): void {
    this.themeSvc.setTheme(themeSettings);
  }

}
