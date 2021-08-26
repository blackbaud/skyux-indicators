import {
  expect,
  SkyHostBrowser,
  SkyVisualThemeSelector
} from '@skyux-sdk/e2e';

describe('Label', () => {
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

  function runTests(): void {
    it('should match previous screenshot', async (done) => {
      await SkyHostBrowser.setWindowBreakpoint('lg');

      await expect('.sky-label-demo').toMatchBaselineScreenshot(done, {
        screenshotName: getScreenshotName('label-lg')
      });
    });

    it('should match previous screenshot (screen: xs)', async (done) => {
      await SkyHostBrowser.setWindowBreakpoint('xs');

      await expect('.sky-label-demo').toMatchBaselineScreenshot(done, {
        screenshotName: getScreenshotName('label-xs')
      });
    });
  }

  beforeEach(async () => {
    currentTheme = undefined;
    currentThemeMode = undefined;

    await SkyHostBrowser.get('visual/label');
  });

  runTests();

  describe('when modern theme', () => {
    beforeEach(async () => {
      await selectTheme('modern', 'light');
    });

    runTests();
  });

  describe('when modern theme in dark mode', () => {
    beforeEach(async () => {
      await selectTheme('modern', 'dark');
    });

    runTests();
  });
});
