import {
  expect,
  SkyHostBrowser
} from '@skyux-sdk/e2e';

import {
  browser,
  by,
  element
} from 'protractor';

describe('Tooltips', () => {
  beforeEach(() => {
    SkyHostBrowser.get('visual/tooltip');
  });

  it('should match previous no hover screenshot', (done) => {
    SkyHostBrowser.setWindowBreakpoint('lg');
    expect('.sky-tooltip-demo').toMatchBaselineScreenshot(done, {
      screenshotName: 'tooltip-no-hover-lg'
    });
  });

  it('should match previous hover screenshot', (done) => {
    SkyHostBrowser.setWindowBreakpoint('lg');

    // Hover over the element.
    browser
      .actions()
      .mouseMove(element(by.css('.sky-tooltip-container')))
      .perform();

    expect('.sky-tooltip-demo').toMatchBaselineScreenshot(done, {
      screenshotName: 'tooltip-hover-lg'
    });
  });

  it('should match previous no hover screenshot (screen: xs)', (done) => {
    SkyHostBrowser.setWindowBreakpoint('xs');
    expect('.sky-tooltip-demo').toMatchBaselineScreenshot(done, {
      screenshotName: 'tooltip-no-hover-xs'
    });
  });

  it('should match previous hover screenshot (screen: xs)', (done) => {
    SkyHostBrowser.setWindowBreakpoint('xs');

    // Hover over the element.
    browser
      .actions()
      .mouseMove(element(by.css('.sky-tooltip-container')))
      .perform();

    expect('.sky-tooltip-demo').toMatchBaselineScreenshot(done, {
      screenshotName: 'tooltip-hover-xs'
    });
  });
});
