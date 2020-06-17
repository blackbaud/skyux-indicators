import {
  expect,
  SkyHostBrowser,
  SkyVisualThemeSelector
} from '@skyux-sdk/e2e';

describe('Status indicator', () => {
  let currentTheme: string;
  let currentThemeMode: string;

  async function selectTheme(theme: string, mode: string): Promise<void> {
    currentTheme = theme;
    currentThemeMode = mode;

    return SkyVisualThemeSelector.selectTheme(theme, mode);
  }

  function getScreenshotName(name: string): string {
    if (currentTheme) {
      name += '-' + currentTheme;
    }

    if (currentThemeMode) {
      name += '-' + currentThemeMode;
    }

    return name;
  }

  async function validateBasic(done: DoneFn): Promise<void> {
    expect('.sky-status-indicator-visual').toMatchBaselineScreenshot(done, {
      screenshotName: getScreenshotName('status-indicator-lg')
    });
  }

  beforeEach(async () => {
    await SkyHostBrowser.get('visual/status-indicator');
    await SkyHostBrowser.setWindowBreakpoint('lg');
  });

  it('should match previous screenshot', (done) => {
    validateBasic(done);
  });

  describe('when modern theme', () => {

    beforeEach(async () => {
      await selectTheme('modern', 'light');
    });

    it('should match previous screenshot', (done) => {
      validateBasic(done);
    });

  });

  describe('when modern theme in dark mode', () => {

    beforeEach(async () => {
      await selectTheme('modern', 'dark');
    });

    it('should match previous screenshot', (done) => {
      validateBasic(done);
    });

  });

});
