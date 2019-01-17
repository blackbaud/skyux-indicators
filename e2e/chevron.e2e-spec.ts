import {
  expect,
  SkyHostBrowser
} from '@skyux-sdk/e2e';

describe('Chevron', () => {
  beforeEach(() => {
    SkyHostBrowser.get('visual/chevron');
  });

  it('should match previous screenshot', (done) => {
    SkyHostBrowser.setWindowBreakpoint('lg');
    expect('.sky-chevron-demo').toMatchBaselineScreenshot(done, {
      screenshotName: 'chevron-lg'
    });
  });

  it('should match previous screenshot (screen: xs)', (done) => {
    SkyHostBrowser.setWindowBreakpoint('xs');
    expect('.sky-chevron-demo').toMatchBaselineScreenshot(done, {
      screenshotName: 'chevron-xs'
    });
  });
});
