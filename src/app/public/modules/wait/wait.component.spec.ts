import {
  async,
  TestBed,
  ComponentFixture,
  tick,
  fakeAsync
} from '@angular/core/testing';

import {
  SkyLibResourcesService
} from '@skyux/i18n';
import {
  SkyLibResourcesTestService
} from '@skyux/i18n/testing';
import {
  expect,
  SkyAppTestUtility
} from '@skyux-sdk/testing';

import {
  SkyWaitTestComponent
} from './fixtures/wait.component.fixture';

import {
  SkyWaitFixturesModule
} from './fixtures/wait-fixtures.module';

import {
  SkyWaitComponent
} from './wait.component';

describe('Wait component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        SkyWaitFixturesModule
      ],
      providers: [
        {
          provide: SkyLibResourcesService,
          useClass: SkyLibResourcesTestService
        }
      ]
    });
  });

  it('should show the wait element when isWaiting is set to true', async(() => {
    const fixture = TestBed.createComponent(SkyWaitComponent);

    fixture.detectChanges();

    let el = fixture.nativeElement;
    expect(el.querySelector('.sky-wait')).toBeNull();

    fixture.componentInstance.isWaiting = true;
    fixture.detectChanges();

    expect(el.querySelector('.sky-wait')).not.toBeNull();

    fixture.whenStable().then(() => {
      expect(fixture.nativeElement).toBeAccessible();
    });
  }));

  it('should set relative position on the wait component parent element', () => {
     const fixture = TestBed.createComponent(SkyWaitTestComponent);

    fixture.detectChanges();

    let el = fixture.nativeElement;

    fixture.componentInstance.isWaiting = true;
    fixture.detectChanges();
    expect(el.querySelector('.sky-wait-test-component').style.position).toBe('relative');
    expect(el.querySelector('.sky-wait-mask-loading-blocking')).not.toBeNull();

    fixture.componentInstance.isWaiting = false;
    fixture.detectChanges();
    expect(el.querySelector('.sky-wait-test-component').style.position).toBe('');
  });

  it('should set the appropriate class when wait component fullPage is set to true', () => {
    const fixture = TestBed.createComponent(SkyWaitTestComponent);

    fixture.detectChanges();

    let el = fixture.nativeElement;

    fixture.componentInstance.isFullPage = true;
    fixture.componentInstance.isWaiting = true;
    fixture.detectChanges();
    expect(el.querySelector('.sky-wait-mask-loading-fixed')).not.toBeNull();
    expect(el.querySelector('.sky-wait-test-component').style.position).toBe('');

    fixture.componentInstance.isWaiting = false;
    fixture.detectChanges();
    expect(el.querySelector('.sky-wait-test-component').style.position).toBe('');
    expect(el.querySelector('.sky-wait')).toBeNull();

    fixture.componentInstance.isWaiting = true;
    fixture.componentInstance.isFullPage = false;
    fixture.detectChanges();
    expect(el.querySelector('.sky-wait-mask-loading-fixed')).toBeNull();
    expect(el.querySelector('.sky-wait-test-component').style.position).toBe('relative');
  });

  it('should set the appropriate class when nonBlocking is set to true', () => {
    const fixture = TestBed.createComponent(SkyWaitTestComponent);

    fixture.detectChanges();

    let el = fixture.nativeElement;

    fixture.componentInstance.isNonBlocking = true;
    fixture.componentInstance.isWaiting = true;
    fixture.detectChanges();
    expect(el.querySelector('.sky-wait-mask-loading-non-blocking')).not.toBeNull();

    fixture.componentInstance.isNonBlocking = true;
    fixture.detectChanges();
    expect(el.querySelector('.sky-wait-mask-loading-blocking')).toBeNull();
  });

  it('should propagate tab navigation forward and backward avoiding waited element', fakeAsync(() => {
    let fixture = TestBed.createComponent(SkyWaitTestComponent);
    fixture.detectChanges();

    fixture.componentInstance.isFullPage = false;
    fixture.componentInstance.isWaiting = true;
    fixture.detectChanges();

    let anchor0: any = document.body.querySelector('#anchor-0');
    let anchor1: any = document.body.querySelector('#anchor-1');
    let anchor2: any = document.body.querySelector('#anchor-2');
    anchor1.focus();

    SkyAppTestUtility.fireDomEvent(document.body, 'keydown', {
      keyboardEventInit: { key: 'Tab' }
    });
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    expect(document.activeElement).toBe(anchor2);

    anchor2.focus();
    SkyAppTestUtility.fireDomEvent(document.body, 'keydown', {
      keyboardEventInit: { key: 'Tab', shiftKey: true }
    });
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    expect(document.activeElement).toBe(anchor1);

    fixture.componentInstance.showAnchor2 = false;
    anchor1.focus();
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    SkyAppTestUtility.fireDomEvent(document.body, 'keydown', {
      keyboardEventInit: { key: 'Tab', shiftKey: false }
    });

    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    expect(document.activeElement).toBe(anchor0);

    fixture.componentInstance.showAnchor0 = false;
    fixture.componentInstance.showAnchor2 = false;
    anchor1.focus();
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    SkyAppTestUtility.fireDomEvent(document.body, 'keydown', {
      keyboardEventInit: { key: 'Tab', shiftKey: false }
    });

    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    expect(document.activeElement).toBe(document.body);

    fixture.componentInstance.isWaiting = false;
    fixture.detectChanges();
    tick();
    fixture.detectChanges();

    anchor1.focus();
    SkyAppTestUtility.fireDomEvent(document.body, 'keydown', {
      keyboardEventInit: { key: 'Tab' }
    });
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    expect(document.activeElement).toBe(anchor1);
  }));

  it('should set aria-busy on document body when fullPage is true', async(() => {
    const fixture = TestBed.createComponent(SkyWaitTestComponent);

    fixture.detectChanges();

    fixture.componentInstance.isFullPage = true;
    fixture.componentInstance.isWaiting = true;
    fixture.detectChanges();
    expect(document.body.getAttribute('aria-busy')).toBe('true');

    fixture.whenStable().then(() => {
      expect(fixture.nativeElement).toBeAccessible(() => {
        fixture.componentInstance.isWaiting = false;
        fixture.detectChanges();
        expect(document.body.getAttribute('aria-busy')).toBeNull();
      });
    });
  }));

  it('should set aria-busy on containing div when fullPage is set to false', () => {
    const fixture = TestBed.createComponent(SkyWaitTestComponent);

    fixture.detectChanges();

    let el = fixture.nativeElement;
    fixture.componentInstance.isWaiting = true;
    fixture.detectChanges();
    expect(el.querySelector('.sky-wait-test-component').getAttribute('aria-busy')).toBe('true');

    fixture.componentInstance.isWaiting = false;
    fixture.detectChanges();
    expect(el.querySelector('.sky-wait-test-component').getAttribute('aria-busy')).toBeNull();
  });

  let testlistenerCreated = (fixture: ComponentFixture<SkyWaitTestComponent>) => {
    fixture.detectChanges();

    let waitComponent: any = fixture.componentInstance.waitComponent;
    let adapter: any = waitComponent.adapterService;
    expect(waitComponent.id in adapter.parentListeners).toBeTruthy();
    expect(Object.keys(adapter.parentListeners).length).toBe(1);

    fixture.componentInstance.isWaiting = false;
    fixture.detectChanges();
    expect(waitComponent.id in adapter.parentListeners).toBeFalsy();
    expect(Object.keys(adapter.parentListeners).length).toBe(0);
  };

  it('should create listener on document body when fullPage is true', () => {
    let fixture = TestBed.createComponent(SkyWaitTestComponent);
    fixture.detectChanges();

    fixture.componentInstance.isFullPage = true;
    fixture.componentInstance.isWaiting = true;
    testlistenerCreated(fixture);
  });

  it('should create listener on containing div when fullPage is set to false', () => {
    let fixture = TestBed.createComponent(SkyWaitTestComponent);
    fixture.detectChanges();

    fixture.componentInstance.isWaiting = true;
    testlistenerCreated(fixture);
  });

  function getAriaLabel(): string {
    return document.body.querySelector('.sky-wait-mask').getAttribute('aria-label');
  }

  it('should use inputted aria-label', async(() => {
    const fixture = TestBed.createComponent(SkyWaitTestComponent);

    fixture.componentInstance.ariaLabel = 'test label';
    fixture.componentInstance.isWaiting = true;
    fixture.componentInstance.isNonBlocking = false;
    fixture.detectChanges();

    const ariaLabel = getAriaLabel();
    expect(ariaLabel).toBe('test label');
  }));

  it('should set aria-label on document body when fullPage is true and is blocking',
    async(() => {
      const fixture = TestBed.createComponent(SkyWaitTestComponent);

      fixture.componentInstance.isFullPage = true;
      fixture.componentInstance.isWaiting = true;
      fixture.componentInstance.isNonBlocking = false;
      fixture.detectChanges();

      const ariaLabel = getAriaLabel();
      expect(ariaLabel).toBe('Page loading. Please wait.');
    }));

  it('should set aria-label on document body when fullPage is true and is not blocking',
    async(() => {
      const fixture = TestBed.createComponent(SkyWaitTestComponent);

      fixture.componentInstance.isFullPage = true;
      fixture.componentInstance.isWaiting = true;
      fixture.componentInstance.isNonBlocking = true;
      fixture.detectChanges();

      const ariaLabel = getAriaLabel();
      expect(ariaLabel).toBe('Page loading.');
    }));

  it('should set aria-label on containing div when fullPage is set to false and is blocking',
    async(() => {
      const fixture = TestBed.createComponent(SkyWaitTestComponent);

      fixture.componentInstance.isFullPage = false;
      fixture.componentInstance.isWaiting = true;
      fixture.componentInstance.isNonBlocking = false;
      fixture.detectChanges();

      const ariaLabel = getAriaLabel();
      expect(ariaLabel).toBe('Loading. Please wait.');
    }));

  it('should set aria-label on containing div when fullPage is set to false and is not blocking',
    async(() => {
      const fixture = TestBed.createComponent(SkyWaitTestComponent);

      fixture.componentInstance.isFullPage = false;
      fixture.componentInstance.isWaiting = true;
      fixture.componentInstance.isNonBlocking = true;
      fixture.detectChanges();

      const ariaLabel = getAriaLabel();
      expect(ariaLabel).toBe('Loading.');
    }));

  it('should not use default aria-label when one is provided', async(() => {
    const fixture = TestBed.createComponent(SkyWaitTestComponent);

    fixture.componentInstance.isFullPage = false;
    fixture.componentInstance.isWaiting = true;
    fixture.componentInstance.isNonBlocking = false;
    fixture.componentInstance.ariaLabel = 'Waiting on the page to load.';
    fixture.detectChanges();

    const ariaLabel = getAriaLabel();
    expect(ariaLabel).toBe('Waiting on the page to load.');
  }));
});
