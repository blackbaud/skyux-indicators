import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {
  expect
} from '@skyux-sdk/testing';

import {
  StatusIndicatorTestComponent
} from './fixtures/status-indicator.component.fixture';

import {
  SkyStatusIndicatorModule
} from './status-indicator.module';

describe('Status indicator component', () => {

  function validateIconWrapperClass(
    statusIndicatorEl: HTMLElement,
    indicatorType: string
  ): void {
    const iconWrapperEl = statusIndicatorEl.querySelector('.sky-status-indicator-icon');

    expect(iconWrapperEl).toHaveCssClass(`sky-status-indicator-icon-${indicatorType || 'warning'}`);
  }

  function validateIcon(
    fixture: ComponentFixture<StatusIndicatorTestComponent>,
    indicatorType: string,
    expectedIcon: string
  ): void {
    fixture.componentInstance.indicatorType = indicatorType;

    fixture.detectChanges();

    const statusIndicatorEl = fixture.nativeElement.querySelector('.sky-status-indicator');

    validateIconWrapperClass(statusIndicatorEl, indicatorType);

    const iconEl = statusIndicatorEl.querySelector('.sky-icon');

    expect(iconEl).toHaveCssClass(`fa-${expectedIcon}`);
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        StatusIndicatorTestComponent
      ],
      imports: [
        SkyStatusIndicatorModule
      ]
    });
  });

  it('should display the expected text', () => {
    const fixture = TestBed.createComponent(StatusIndicatorTestComponent);

    fixture.detectChanges();

    const statusIndicatorEl = fixture.nativeElement.querySelector('.sky-status-indicator');

    const messageEl = statusIndicatorEl.querySelector('.sky-status-indicator-message');

    expect(messageEl).toHaveText('Indicator text');
  });

  it('should display the expected icon', () => {
    const fixture = TestBed.createComponent(StatusIndicatorTestComponent);

    validateIcon(fixture, undefined, 'warning');

    validateIcon(fixture, 'danger', 'warning');
    validateIcon(fixture, 'info', 'info-circle');
    validateIcon(fixture, 'success', 'check-circle');
    validateIcon(fixture, 'warning', 'warning');
  });

  describe('when modern theme', () => {

    function validateIconStack(
      fixture: ComponentFixture<StatusIndicatorTestComponent>,
      indicatorType: string,
      expectedBaseIcon: string,
      expectedTopIcon: string
    ): void {
      fixture.componentInstance.indicatorType = indicatorType;

      fixture.detectChanges();

      const statusIndicatorEl = fixture.nativeElement.querySelector('.sky-status-indicator');

      validateIconWrapperClass(statusIndicatorEl, indicatorType);

      const iconStackEl = statusIndicatorEl.querySelector('.sky-icon-stack');

      const baseIconEl = iconStackEl.querySelector('.fa-stack-2x');
      const topIconEl = iconStackEl.querySelector('.fa-stack-1x');

      expect(baseIconEl).toHaveCssClass(`sky-i-${expectedBaseIcon}`);
      expect(topIconEl).toHaveCssClass(`sky-i-${expectedTopIcon}`);
    }

    it('should display the expected icon', () => {
      const fixture = TestBed.createComponent(StatusIndicatorTestComponent);

      validateIconStack(fixture, undefined, 'triangle-solid', 'exclamation');

      validateIconStack(fixture, 'danger', 'triangle-solid', 'exclamation');
      validateIconStack(fixture, 'info', 'circle-solid', 'help-i');
      validateIconStack(fixture, 'success', 'circle-solid', 'check');
      validateIconStack(fixture, 'warning', 'triangle-solid', 'exclamation');
    });

  });

});
