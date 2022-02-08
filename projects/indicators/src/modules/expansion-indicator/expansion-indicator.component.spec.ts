import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expectAsync } from '@skyux-sdk/testing';
import { SkyThemeService } from '@skyux/theme';
import { SkyChevronModule } from '../chevron/chevron.module';
import { SkyExpansionIndicatorComponent } from './expansion-indicator.component';

describe('Expansion indicator component', () => {
  let fixture: ComponentFixture<SkyExpansionIndicatorComponent>;

  //#region helpers
  function getChevronEl(): HTMLElement {
    return fixture.nativeElement.querySelector('.sky-expansion-indicator');
  }
  //#endregion

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SkyChevronModule],
      providers: [SkyThemeService],
    });

    fixture = TestBed.createComponent(SkyExpansionIndicatorComponent);
    fixture.detectChanges();
  });

  it('should not be a focusable element', () => {
    const chevronWrapperEl = getChevronEl();
    chevronWrapperEl.focus();

    expect(document.activeElement).not.toEqual(chevronWrapperEl);
  });

  it('should set aria-hidden to true', () => {
    const chevronWrapperEl = getChevronEl();

    expect(chevronWrapperEl.getAttribute('aria-hidden')).toBe('true');
  });

  it('should pass accessibility', async () => {
    await fixture.whenStable();
    await expectAsync(fixture.nativeElement).toBeAccessible();
  });
});
