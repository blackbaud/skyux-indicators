import {
  expect,
  SkyHostBrowser
} from '@skyux-sdk/e2e';

describe('Text highlight', () => {
  beforeEach(() => {
    SkyHostBrowser.get('visual/text-highlight');
  });

  it('should match previous screenshot', (done) => {
    SkyHostBrowser.setWindowBreakpoint('lg');
    expect('.sky-text-highlight-demo').toMatchBaselineScreenshot(done, {
      screenshotName: 'text-highlight-lg'
    });
  });

  it('should match previous screenshot (screen: xs)', (done) => {
    SkyHostBrowser.setWindowBreakpoint('xs');
    expect('.sky-text-highlight-demo').toMatchBaselineScreenshot(done, {
      screenshotName: 'text-highlight-xs'
    });
  });
});
