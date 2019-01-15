import {
  expect,
  SkyHostBrowser
} from '@skyux-sdk/e2e';

describe('Icon', () => {
  beforeEach(() => {
    SkyHostBrowser.get('visual/icon');
  });

  it('should match previous screenshot', (done) => {
    SkyHostBrowser.setWindowBreakpoint('lg');
    expect('.sky-icon-demo').toMatchBaselineScreenshot(done, {
      screenshotName: 'icon-lg'
    });
  });

  it('should match previous screenshot (screen: xs)', (done) => {
    SkyHostBrowser.setWindowBreakpoint('xs');
    expect('.sky-icon-demo').toMatchBaselineScreenshot(done, {
      screenshotName: 'icon-xs'
    });
  });
});
