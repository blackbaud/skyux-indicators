import {
  expect,
  SkyHostBrowser
} from '@skyux-sdk/e2e';

describe('Key info', () => {
  it('should match previous screenshot', (done) => {
    SkyHostBrowser.get('visual/key-info');
    SkyHostBrowser.setWindowBreakpoint('lg');
    expect('.sky-key-info-visual').toMatchBaselineScreenshot(done);
  });

  it('should match previous screenshot (screen: xs)', (done) => {
    SkyHostBrowser.get('visual/key-info');
    SkyHostBrowser.setWindowBreakpoint('xs');
    expect('.sky-key-info-visual').toMatchBaselineScreenshot(done);
  });
});
