import {
  expect,
  SkyHostBrowser
} from '@skyux-sdk/e2e';

import {
  browser, element, by
} from 'protractor';

describe('Help inline', () => {
  it('should match previous screenshot', (done) => {
    SkyHostBrowser.get('demos/help-inline');
    SkyHostBrowser.setWindowBreakpoint('lg');
    expect('.sky-help-inline-demo').toMatchBaselineScreenshot(done);
  });

  it('should match previous screenshot (screen: xs)', (done) => {
    SkyHostBrowser.get('demos/help-inline');
    SkyHostBrowser.setWindowBreakpoint('xs');

    // Hover over the button.
    browser
      .actions()
      .mouseMove(element(by.css('.sky-help-inline')))
      .perform();

    expect('.sky-help-inline-demo').toMatchBaselineScreenshot(done);
  });
});
