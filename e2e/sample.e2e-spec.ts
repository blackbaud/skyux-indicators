import {
  expect,
  SkyHostBrowser
} from '@skyux-sdk/e2e';

describe('Sample', () => {
  it('should match previous screenshot', (done) => {
    SkyHostBrowser.get('demos/sample');
    expect('.sky-sample-demo').toMatchBaselineScreenshot(done);
  });

  it('should match previous screenshot (screen: xs)', (done) => {
    SkyHostBrowser.get('demos/sample');
    SkyHostBrowser.setWindowBreakpoint('xs');
    expect('.sky-sample-demo').toMatchBaselineScreenshot(done);
  });
});
