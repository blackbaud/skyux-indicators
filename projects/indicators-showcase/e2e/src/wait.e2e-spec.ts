import {
  expect,
  SkyHostBrowser
} from '@skyux-sdk/e2e';

import {
  by,
  element
} from 'protractor';

describe('Wait', () => {
  beforeEach(() => {
    SkyHostBrowser.get('visual/wait');
    SkyHostBrowser.setWindowBreakpoint('lg');
  });

  it('should display wait on parent', (done) => {
    element(by.css('.sky-test-wait')).click();
    expect('.sky-wait-demo-parent').toMatchBaselineScreenshot(done, {
      screenshotName: 'wait-parent'
    });
  });

  it('should display wait on parent to block absolute item', (done) => {
    element(by.css('.sky-test-wait')).click();
    SkyHostBrowser.scrollTo('.sky-wait-demo-absolute');
    expect('.sky-wait-demo-absolute').toMatchBaselineScreenshot(done, {
      screenshotName: 'wait-parent-absolute'
    });
  });

  it('should display wait behind parent with modal z-index', (done) => {
    element(by.css('.sky-test-wait')).click();
    SkyHostBrowser.scrollTo('.sky-wait-demo-absolute-behind');
    expect('.sky-wait-demo-absolute-behind').toMatchBaselineScreenshot(done, {
      screenshotName: 'wait-parent-behind'
    });
  });

  it('should display non-blocking wait on parent', (done) => {
    element(by.css('.sky-test-non-blocking')).click();
    element(by.css('.sky-test-wait')).click();
    expect('.sky-wait-demo-parent').toMatchBaselineScreenshot(done, {
      screenshotName: 'wait-parent-non-blocking'
    });
  });

  it('should display wait on full page', (done) => {
    element(by.css('.sky-test-full-page')).click();
    expect('.sky-wait-demo').toMatchBaselineScreenshot(done, {
      screenshotName: 'wait-full-page'
    });
  });

  it('should display non-blocking wait on full page', (done) => {
    element(by.css('.sky-test-non-blocking')).click();
    element(by.css('.sky-test-full-page')).click();
    expect('.sky-wait-demo').toMatchBaselineScreenshot(done, {
      screenshotName: 'wait-full-page-non-block'
    });
  });
});
