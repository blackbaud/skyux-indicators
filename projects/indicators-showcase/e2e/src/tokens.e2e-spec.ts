import { browser, by, element, Key } from 'protractor';

import { expect, SkyHostBrowser, SkyVisualThemeSelector } from '@skyux-sdk/e2e';

describe('Tokens', () => {
  const firstTokenSelector = '.sky-token-dismissable';
  const firstTokenCloseBtnSelector =
    '.sky-token-dismissable .sky-token-btn-close';

  let currentTheme: string;
  let currentThemeMode: string;

  async function selectTheme(theme: string, mode: string): Promise<void> {
    currentTheme = theme;
    currentThemeMode = mode;

    return SkyVisualThemeSelector.selectTheme(theme, mode);
  }

  function getScreenshotName(name: string): string {
    if (currentTheme) {
      name += '-' + currentTheme;
    }

    if (currentThemeMode) {
      name += '-' + currentThemeMode;
    }

    return name;
  }

  async function hoverElement(selector: string): Promise<void> {
    await browser
      .actions()
      .mouseMove(element(by.css(selector)))
      .perform();
  }

  async function mouseDownElement(selector: string): Promise<void> {
    await browser
      .actions()
      .mouseDown(element(by.css(selector)))
      .perform();
  }

  async function focusToken(selector: string): Promise<void> {
    const el = await element(by.css(selector));
    await el.click();

    // Move the cursor so the hover state isn't activated.
    await SkyHostBrowser.moveCursorOffScreen();
  }

  async function focusTokenCloseBtn(selector: string): Promise<void> {
    await focusToken(selector);

    const el = await browser.driver.switchTo().activeElement();
    await el.sendKeys(Key.TAB);
  }

  function runTests(): void {
    it('should match previous screenshot', async (done) => {
      await expect('.sky-tokens-demo').toMatchBaselineScreenshot(done, {
        screenshotName: getScreenshotName('tokens-lg'),
      });
    });

    // Token states
    it('should match previous screenshot when token is hovered', async (done) => {
      await hoverElement(firstTokenSelector);

      await expect('.sky-tokens-demo').toMatchBaselineScreenshot(done, {
        screenshotName: getScreenshotName('tokens-hover'),
      });
    });

    it('should match previous screenshot when token is active', async (done) => {
      await mouseDownElement(firstTokenSelector);

      await expect('.sky-tokens-demo').toMatchBaselineScreenshot(done, {
        screenshotName: getScreenshotName('tokens-active'),
      });
    });

    it('should match previous screenshot when token is focused', async (done) => {
      await focusToken(firstTokenSelector);

      await expect('.sky-tokens-demo').toMatchBaselineScreenshot(done, {
        screenshotName: getScreenshotName('tokens-focus'),
      });
    });

    it('should match previous screenshot when token close button is hovered', async (done) => {
      await hoverElement(firstTokenCloseBtnSelector);

      await expect('.sky-tokens-demo').toMatchBaselineScreenshot(done, {
        screenshotName: getScreenshotName('tokens-close-hover'),
      });
    });

    it('should match previous screenshot when token close button is active', async (done) => {
      await mouseDownElement(firstTokenCloseBtnSelector);

      await expect('.sky-tokens-demo').toMatchBaselineScreenshot(done, {
        screenshotName: getScreenshotName('tokens-close-active'),
      });
    });
    it('should match previous screenshot when token close button is focused', async (done) => {
      await focusTokenCloseBtn(firstTokenSelector);

      await expect('.sky-tokens-demo').toMatchBaselineScreenshot(done, {
        screenshotName: getScreenshotName('tokens-close-focus'),
      });
    });

    it('should match previous screenshot (screen: xs)', async (done) => {
      await SkyHostBrowser.setWindowBreakpoint('xs');

      await expect('.sky-tokens-demo').toMatchBaselineScreenshot(done, {
        screenshotName: getScreenshotName('tokens-xs'),
      });
    });
  }

  beforeEach(async () => {
    currentTheme = undefined;
    currentThemeMode = undefined;

    await SkyHostBrowser.get('visual/tokens');
    await SkyHostBrowser.setWindowBreakpoint('lg');
  });

  runTests();

  describe('when modern theme', () => {
    beforeEach(async () => {
      await selectTheme('modern', 'light');
    });

    runTests();
  });

  describe('when modern theme in dark mode', () => {
    beforeEach(async () => {
      await selectTheme('modern', 'dark');
    });

    runTests();
  });
});
