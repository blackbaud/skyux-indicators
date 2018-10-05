import {
  expect,
  SkyHostBrowser
} from '@skyux-sdk/e2e';

import {
  by,
  element
} from 'protractor';

describe('Wait', () => {
  it('should display wait on parent', (done) => {
    SkyHostBrowser.get('visual/wait');
    SkyHostBrowser.setWindowBreakpoint('lg');
    element(by.css('.sky-test-wait')).click();
    expect('.sky-wait-demo-parent').toMatchBaselineScreenshot(done);
  });

  it('should display wait on parent to block absolute item', (done) => {
    SkyHostBrowser.get('visual/wait');
    SkyHostBrowser.setWindowBreakpoint('lg');
    element(by.css('.sky-test-wait')).click();
    SkyHostBrowser.scrollTo('.sky-wait-demo-absolute');
    expect('.sky-wait-demo-absolute').toMatchBaselineScreenshot(done);
  });

  it('should display wait behind parent with modal z-index', (done) => {
    SkyHostBrowser.get('visual/wait');
    SkyHostBrowser.setWindowBreakpoint('lg');
    element(by.css('.sky-test-wait')).click();
    SkyHostBrowser.scrollTo('.sky-wait-demo-absolute-behind');
    expect('.sky-wait-demo-absolute-behind').toMatchBaselineScreenshot(done);
  });

  it('should display non-blocking wait on parent', (done) => {
    SkyHostBrowser.get('visual/wait');
    SkyHostBrowser.setWindowBreakpoint('lg');
    element(by.css('.sky-test-non-blocking')).click();
    element(by.css('.sky-test-wait')).click();
    expect('.sky-wait-demo-parent').toMatchBaselineScreenshot(done, {
      screenshotName: 'sky-wait-demo-parent-non-blocking'
    });
  });

  it('should display wait on full page', (done) => {
    SkyHostBrowser.get('visual/wait');
    SkyHostBrowser.setWindowBreakpoint('lg');
    element(by.css('.sky-test-full-page')).click();
    element(by.css('.sky-test-wait')).click();
    expect('.sky-wait-demo').toMatchBaselineScreenshot(done, {
      screenshotName: 'sky-wait-demo-full-page'
    });
  });

  it('should display non-blocking wait on full page', (done) => {
    SkyHostBrowser.get('visual/wait');
    SkyHostBrowser.setWindowBreakpoint('lg');
    element(by.css('.sky-test-full-page')).click();
    element(by.css('.sky-test-non-blocking')).click();
    element(by.css('.sky-test-wait')).click();
    expect('.sky-wait-demo').toMatchBaselineScreenshot(done, {
      screenshotName: 'sky-wait-demo-full-page-non-block'
    });
  });
});
