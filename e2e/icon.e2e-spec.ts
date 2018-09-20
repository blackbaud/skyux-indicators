import {
  expect,
  SkyHostBrowser
} from '@skyux-sdk/e2e';

describe('Icon', () => {
  it('should match previous screenshot', (done) => {
    SkyHostBrowser.get('demos/icon');
    SkyHostBrowser.setWindowBreakpoint('lg');
    expect('.sky-icon-demo').toMatchBaselineScreenshot(done);
  });

  it('should match previous screenshot (screen: xs)', (done) => {
    SkyHostBrowser.get('demos/icon');
    SkyHostBrowser.setWindowBreakpoint('xs');
    expect('.sky-icon-demo').toMatchBaselineScreenshot(done);
  });
});
