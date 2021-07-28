import {
  expect,
  SkyHostBrowser
} from '@skyux-sdk/e2e';

import {
  browser,
  by,
  element
} from 'protractor';

describe('Help inline', () => {
  beforeEach(() => {
    SkyHostBrowser.get('visual/help-inline');
  });

  it('should match previous screenshot', (done) => {
    SkyHostBrowser.setWindowBreakpoint('lg');
    expect('.sky-help-inline-demo').toMatchBaselineScreenshot(done, {
      screenshotName: 'help-inline-lg'
    });
  });

  it('should match previous screenshot (screen: xs)', (done) => {
    SkyHostBrowser.setWindowBreakpoint('xs');

    // Hover over the button.
    browser
      .actions()
      .mouseMove(element(by.css('.sky-help-inline')))
      .perform();

    expect('.sky-help-inline-demo').toMatchBaselineScreenshot(done, {
      screenshotName: 'help-inline-hover-xs'
    });
  });
});
