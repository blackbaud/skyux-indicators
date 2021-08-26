import {
  expect,
  SkyHostBrowser
} from '@skyux-sdk/e2e';

describe('Icon', () => {
  beforeEach(async () => {
    await SkyHostBrowser.get('visual/icon');
  });

  it('should match previous screenshot', async (done) => {
    await SkyHostBrowser.setWindowBreakpoint('lg');
    await expect('.sky-icon-demo').toMatchBaselineScreenshot(done, {
      screenshotName: 'icon-lg'
    });
  });

  it('should match previous screenshot (screen: xs)', async (done) => {
    await SkyHostBrowser.setWindowBreakpoint('xs');
    await expect('.sky-icon-demo').toMatchBaselineScreenshot(done, {
      screenshotName: 'icon-xs'
    });
  });

  it('should match previous variant screenshot', async (done) => {
    await SkyHostBrowser.setWindowBreakpoint('lg');
    await expect('.sky-icon-demo-variant').toMatchBaselineScreenshot(done, {
      screenshotName: 'icon-variant-lg'
    });
  });

  it('should match previous variant screenshot (screen: xs)', async (done) => {
    await SkyHostBrowser.setWindowBreakpoint('xs');
    await expect('.sky-icon-demo-variant').toMatchBaselineScreenshot(done, {
      screenshotName: 'icon-variant-xs'
    });
  });
});
