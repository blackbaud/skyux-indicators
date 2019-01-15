import {
  expect,
  SkyHostBrowser
} from '@skyux-sdk/e2e';

describe('Tokens', () => {
  beforeEach(() => {
    SkyHostBrowser.get('visual/tokens');
  });

  it('should match previous screenshot', (done) => {
    SkyHostBrowser.setWindowBreakpoint('lg');
    expect('.sky-tokens-demo').toMatchBaselineScreenshot(done, {
      screenshotName: 'tokens-lg'
    });
  });

  it('should match previous screenshot (screen: xs)', (done) => {
    SkyHostBrowser.setWindowBreakpoint('xs');
    expect('.sky-tokens-demo').toMatchBaselineScreenshot(done, {
      screenshotName: 'tokens-xs'
    });
  });
});
