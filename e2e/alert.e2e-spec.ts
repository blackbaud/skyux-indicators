import {
  expect,
  SkyHostBrowser
} from '@skyux-sdk/e2e';

describe('Alert', () => {
  it('should match previous screenshot', (done) => {
    SkyHostBrowser.get('visual/alert');
    SkyHostBrowser.setWindowBreakpoint('lg');
    expect('.sky-alert-visual').toMatchBaselineScreenshot(done, {
      screenshotName: 'alert-lg'
    });
  });

  it('should match previous screenshot (screen: xs)', (done) => {
    SkyHostBrowser.get('visual/alert');
    SkyHostBrowser.setWindowBreakpoint('xs');
    expect('.sky-alert-visual').toMatchBaselineScreenshot(done, {
      screenshotName: 'alert-xs'
    });
  });
});
