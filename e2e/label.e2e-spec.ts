import {
  expect,
  SkyHostBrowser
} from '@skyux-sdk/e2e';

describe('Label', () => {
  beforeEach(() => {
    SkyHostBrowser.get('visual/label');
  });

  it('should match previous screenshot', (done) => {
    SkyHostBrowser.setWindowBreakpoint('lg');
    expect('.sky-label-demo').toMatchBaselineScreenshot(done, {
      screenshotName: 'label-lg'
    });
  });

  it('should match previous screenshot (screen: xs)', (done) => {
    SkyHostBrowser.setWindowBreakpoint('xs');
    expect('.sky-label-demo').toMatchBaselineScreenshot(done, {
      screenshotName: 'label-xs'
    });
  });
});
