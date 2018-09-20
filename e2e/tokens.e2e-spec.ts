import {
  expect,
  SkyHostBrowser
} from '@skyux-sdk/e2e';

describe('Tokens', () => {
  it('should match previous screenshot', (done) => {
    SkyHostBrowser.get('demos/tokens');
    SkyHostBrowser.setWindowBreakpoint('lg');
    expect('.sky-tokens-demo').toMatchBaselineScreenshot(done);
  });

  it('should match previous screenshot (screen: xs)', (done) => {
    SkyHostBrowser.get('demos/tokens');
    SkyHostBrowser.setWindowBreakpoint('xs');
    expect('.sky-tokens-demo').toMatchBaselineScreenshot(done);
  });
});
