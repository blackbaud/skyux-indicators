import { expect, SkyHostBrowser } from '@skyux-sdk/e2e';

import { by, element } from 'protractor';

describe('Wait', () => {
  beforeEach(async () => {
    await SkyHostBrowser.get('visual/wait');
    await SkyHostBrowser.setWindowBreakpoint('lg');
  });

  it('should display wait on parent', async (done) => {
    await element(by.css('.sky-test-wait')).click();
    await expect('.sky-wait-demo-parent').toMatchBaselineScreenshot(done, {
      screenshotName: 'wait-parent',
    });
  });

  it('should display wait on parent to block absolute item', async (done) => {
    await element(by.css('.sky-test-wait')).click();
    await SkyHostBrowser.scrollTo('.sky-wait-demo-absolute');
    await expect('.sky-wait-demo-absolute').toMatchBaselineScreenshot(done, {
      screenshotName: 'wait-parent-absolute',
    });
  });

  it('should display wait behind parent with modal z-index', async (done) => {
    await element(by.css('.sky-test-wait')).click();
    await SkyHostBrowser.scrollTo('.sky-wait-demo-absolute-behind');
    await expect('.sky-wait-demo-absolute-behind').toMatchBaselineScreenshot(
      done,
      {
        screenshotName: 'wait-parent-behind',
      }
    );
  });

  it('should display non-blocking wait on parent', async (done) => {
    await element(by.css('.sky-test-non-blocking')).click();
    await element(by.css('.sky-test-wait')).click();
    await expect('.sky-wait-demo-parent').toMatchBaselineScreenshot(done, {
      screenshotName: 'wait-parent-non-blocking',
    });
  });

  it('should display wait on full page', async (done) => {
    await element(by.css('.sky-test-full-page')).click();
    await expect('.sky-wait-demo').toMatchBaselineScreenshot(done, {
      screenshotName: 'wait-full-page',
    });
  });

  it('should display non-blocking wait on full page', async (done) => {
    await element(by.css('.sky-test-non-blocking')).click();
    await element(by.css('.sky-test-full-page')).click();
    await expect('.sky-wait-demo').toMatchBaselineScreenshot(done, {
      screenshotName: 'wait-full-page-non-block',
    });
  });
});
