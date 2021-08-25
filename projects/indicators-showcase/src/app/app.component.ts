import { Component, Renderer2 } from '@angular/core';
import { SkyTheme, SkyThemeMode, SkyThemeService, SkyThemeSettings } from '@skyux/theme';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  constructor(
    renderer: Renderer2,
    themeService: SkyThemeService
  ) {
    themeService.init(
      document.body,
      renderer,
      new SkyThemeSettings(
        SkyTheme.presets['default'],
        SkyThemeMode.presets.light
      )
    );
  }
}
