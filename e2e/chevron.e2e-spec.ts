import {
  expect,
  SkyHostBrowser
} from '@skyux-sdk/e2e';

describe('Chevron', () => {
  it('should match previous screenshot', (done) => {
    SkyHostBrowser.get('visual/chevron');
    SkyHostBrowser.setWindowBreakpoint('lg');
    expect('.sky-chevron-demo').toMatchBaselineScreenshot(done);
  });

  it('should match previous screenshot (screen: xs)', (done) => {
    SkyHostBrowser.get('visual/chevron');
    SkyHostBrowser.setWindowBreakpoint('xs');
    expect('.sky-chevron-demo').toMatchBaselineScreenshot(done);
  });
});
