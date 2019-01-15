import {
  expect,
  SkyHostBrowser
} from '@skyux-sdk/e2e';

describe('Key info', () => {
  beforeEach(() => {
    SkyHostBrowser.get('visual/key-info');
  });

  it('should match previous screenshot', (done) => {
    SkyHostBrowser.setWindowBreakpoint('lg');
    expect('.sky-key-info-visual').toMatchBaselineScreenshot(done, {
      screenshotName: 'key-info-lg'
    });
  });

  it('should match previous screenshot (screen: xs)', (done) => {
    SkyHostBrowser.setWindowBreakpoint('xs');
    expect('.sky-key-info-visual').toMatchBaselineScreenshot(done, {
      screenshotName: 'key-info-xs'
    });
  });
});
