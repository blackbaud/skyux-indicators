import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick
} from '@angular/core/testing';

import {
  expect
} from '@skyux-sdk/testing';

import {
  SkyTooltipModule
} from './tooltip.module';

import {
  TooltipFixtureComponent
} from './fixtures/tooltip.fixture.component';

import {
  CommonModule
} from '@angular/common';

describe('Tooltips', () => {
  let fixture: ComponentFixture<TooltipFixtureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        SkyTooltipModule
      ],
      declarations: [
        TooltipFixtureComponent
      ]
    });

    fixture = TestBed.createComponent(TooltipFixtureComponent);
  });

  function detectChanges(): void {
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
  }

  // Sure wish there was a way to trigger the css hoverstate to unit test the opposite
  it('should hide tooltip if not hovering', fakeAsync(() => {
    detectChanges();
    const tooltip = fixture.nativeElement.querySelector('.sky-tooltip');
    expect(tooltip).not.toBeVisible();
  }));

  it('should use inputted label', fakeAsync(() => {
    const expectedLabel = 'Supreme label of the finite iron river';
    fixture.componentInstance.label = expectedLabel;
    detectChanges();

    const tooltipContent = fixture.nativeElement.querySelector('.sky-tooltip-content');
    expect(tooltipContent).toHaveText(expectedLabel);
  }));
});
