import {
  expect,
  SkyHostBrowser,
  SkyVisualThemeSelector
} from '@skyux-sdk/e2e';

describe('Alert', () => {

  beforeEach(async () => {
    await SkyHostBrowser.get('visual/alert');
  });

  async function selectTheme(theme: string, mode: string): Promise<void> {
    return SkyVisualThemeSelector.selectTheme(theme, mode);
  }

  it('should match previous screenshot', async (done) => {
    await SkyHostBrowser.setWindowBreakpoint('lg');

    expect('.sky-alert-visual').toMatchBaselineScreenshot(done, {
      screenshotName: 'alert-lg'
    });
  });

  it('should match previous screenshot (screen: xs)', async (done) => {
    await SkyHostBrowser.setWindowBreakpoint('xs');

    expect('.sky-alert-visual').toMatchBaselineScreenshot(done, {
      screenshotName: 'alert-xs'
    });
  });

  describe('when modern theme', () => {

    beforeEach(async () => {
      await selectTheme('modern', 'light');
    });

    it('should match previous screenshot', async (done) => {
      await SkyHostBrowser.setWindowBreakpoint('lg');

      expect('.sky-alert-visual').toMatchBaselineScreenshot(done, {
        screenshotName: 'alert-lg-theme-modern'
      });
    });

    describe('in dark mode', () => {

      beforeEach(async () => {
        await selectTheme('modern', 'dark');
      });

      it('should match previous screenshot', async (done) => {
        await SkyHostBrowser.setWindowBreakpoint('lg');

        expect('.sky-alert-visual').toMatchBaselineScreenshot(done, {
          screenshotName: 'alert-lg-theme-modern-dark'
        });
      });

    });

  });

});
