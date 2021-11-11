import { expect, SkyHostBrowser, SkyVisualThemeSelector } from '@skyux-sdk/e2e';

describe('Icon stack', () => {
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
    await SkyHostBrowser.setWindowBreakpoint('lg');

    await expect('.sky-icon-stack-demo').toMatchBaselineScreenshot(done, {
      screenshotName: getScreenshotName('icon-stack-lg'),
    });
  }

  async function validateBasicXs(done: DoneFn): Promise<void> {
    await SkyHostBrowser.setWindowBreakpoint('xs');

    await expect('.sky-icon-stack-demo').toMatchBaselineScreenshot(done, {
      screenshotName: getScreenshotName('icon-stack-xs'),
    });
  }

  beforeEach(async () => {
    await SkyHostBrowser.get('visual/icon-stack');
  });

  it('should match previous screenshot', async (done) => {
    await validateBasic(done);
  });

  it('should match previous screenshot (screen: xs)', async (done) => {
    await validateBasicXs(done);
  });

  describe('when modern theme', () => {
    beforeEach(async () => {
      await selectTheme('modern', 'light');
    });

    it('should match previous screenshot', async (done) => {
      await validateBasic(done);
    });

    it('should match previous screenshot (screen: xs)', async (done) => {
      await validateBasicXs(done);
    });
  });

  describe('when modern theme in dark mode', () => {
    beforeEach(async () => {
      await selectTheme('modern', 'dark');
    });

    it('should match previous screenshot', async (done) => {
      await validateBasic(done);
    });

    it('should match previous screenshot (screen: xs)', async (done) => {
      await validateBasicXs(done);
    });
  });
});
