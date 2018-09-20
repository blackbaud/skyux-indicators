import {
  expect,
  SkyHostBrowser
} from '@skyux-sdk/e2e';

describe('Label', () => {
  it('should match previous screenshot', (done) => {
    SkyHostBrowser.get('demos/label');
    SkyHostBrowser.setWindowBreakpoint('lg');
    expect('.sky-label-demo').toMatchBaselineScreenshot(done);
  });

  it('should match previous screenshot (screen: xs)', (done) => {
    SkyHostBrowser.get('demos/label');
    SkyHostBrowser.setWindowBreakpoint('xs');
    expect('.sky-label-demo').toMatchBaselineScreenshot(done);
  });
});
