import {
  expect,
  SkyHostBrowser
} from '@skyux-sdk/e2e';

describe('Text highlight', () => {
  it('should match previous screenshot', (done) => {
    SkyHostBrowser.get('visual/text-highlight');
    SkyHostBrowser.setWindowBreakpoint('lg');
    expect('.sky-text-highlight-demo').toMatchBaselineScreenshot(done);
  });

  it('should match previous screenshot (screen: xs)', (done) => {
    SkyHostBrowser.get('visual/text-highlight');
    SkyHostBrowser.setWindowBreakpoint('xs');
    expect('.sky-text-highlight-demo').toMatchBaselineScreenshot(done);
  });
});
