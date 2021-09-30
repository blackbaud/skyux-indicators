import {
  SkyHostBrowserBreakpoint
} from '@skyux-sdk/e2e/host-browser/host-browser-breakpoint';

import {
  expect,
  SkyHostBrowser,
  SkyVisualThemeSelector
} from '@skyux-sdk/e2e';

describe('Chevron', () => {

  //#region helpers
  let browserSize: SkyHostBrowserBreakpoint;
  let currentTheme: string;
  let currentThemeMode: string;

  async function selectTheme(theme: string, mode: string): Promise<void> {
    currentTheme = theme;
    currentThemeMode = mode;

    return SkyVisualThemeSelector.selectTheme(theme, mode);
  }

  async function setBrowserSize(size: SkyHostBrowserBreakpoint): Promise<void> {
    browserSize = size;

    return SkyHostBrowser.setWindowBreakpoint(size);
  }

  function getScreenshotName(name: string): string {
    if (browserSize) {
      name += '-' + browserSize;
    }

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
      await expect('#sky-chevron-demo').toMatchBaselineScreenshot(done, {
        screenshotName: getScreenshotName('chevron')
      });
    });
  }
  //#endregion

  describe('(size: lg)', () => {
    beforeEach( async() => {
      currentTheme = undefined;
      currentThemeMode = undefined;
      await SkyHostBrowser.get('visual/chevron');
      await setBrowserSize('lg');
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

  describe('(size: xs)', () => {
    beforeEach( async() => {
      currentTheme = undefined;
      currentThemeMode = undefined;
      await SkyHostBrowser.get('visual/chevron');
      await setBrowserSize('xs');
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
});
