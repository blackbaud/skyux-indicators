import {
  ElementRef,
  Injectable,
  Renderer,
  OnDestroy
} from '@angular/core';

@Injectable()
export class SkyWaitAdapterService implements OnDestroy {
  private static activeListener: Function;
  private static isPageWaitActive = false;
  private static busyElements: {[key: string]: any} = {};

  constructor(
    private renderer: Renderer
  ) { }

  public ngOnDestroy(): void {
    SkyWaitAdapterService.clearListener();
  }

  public setWaitBounds(waitEl: ElementRef): void {
    this.renderer.setElementStyle(waitEl.nativeElement.parentElement, 'position', 'relative');
  }

  public removeWaitBounds(waitEl: ElementRef): void {
    this.renderer.setElementStyle(waitEl.nativeElement.parentElement, 'position', undefined);
  }

  public setBusyState(
    waitEl: ElementRef,
    isFullPage: boolean,
    isWaiting: boolean,
    isNonBlocking = false,
    id: string = ''
  ): void {
    let busyEl = isFullPage ? document.body : waitEl.nativeElement.parentElement;
    let state = isWaiting ? 'true' : undefined;

    if (!isNonBlocking) {
      this.renderer.setElementAttribute(busyEl, 'aria-busy', state);

      if (isWaiting) {
        // Remove focus from page when full page blocking wait
        if (isFullPage || busyEl.contains(document.activeElement)) {
          this.clearDocumentFocus();
        }

        if (isFullPage) {
          SkyWaitAdapterService.isPageWaitActive = true;
        } else {
          SkyWaitAdapterService.busyElements[id] = busyEl;
        }

        if (!SkyWaitAdapterService.activeListener) {
          // Prevent tab navigation within the waited page
          let endListenerFunc = this.renderer.listen(document.body, 'keydown', (event: KeyboardEvent) => {
            if (event.key.toLowerCase() === 'tab') {
              event.preventDefault();
              event.stopPropagation();
              event.stopImmediatePropagation();

              if (SkyWaitAdapterService.isPageWaitActive) {
                this.clearDocumentFocus();
              } else {
                // Propagate tab navigation if attempted into waited element
                this.focusNextElement(event.shiftKey);
              }
            }
          });
          SkyWaitAdapterService.activeListener = endListenerFunc;
        }
      } else {
        if (isFullPage) {
          SkyWaitAdapterService.isPageWaitActive = false;
        } else if (id in SkyWaitAdapterService.busyElements) {
          delete SkyWaitAdapterService.busyElements[id];
        }

        // Clear the listener if we are done waiting all elements
        if (Object.keys(SkyWaitAdapterService.busyElements).length === 0 && !SkyWaitAdapterService.isPageWaitActive) {
          SkyWaitAdapterService.clearListener();
        }
      }
    }
  }

  private focusNextElement(shiftKey: boolean): void {
    // Select all possible focussable elements
    let focussableElements =
      'a[href], ' +
      'area[href], ' +
      'input:not([disabled]):not([tabindex=\'-1\']), ' +
      'button:not([disabled]):not([tabindex=\'-1\']), ' +
      'select:not([disabled]):not([tabindex=\'-1\']), ' +
      'textarea:not([disabled]):not([tabindex=\'-1\']), ' +
      'iframe, object, embed, ' +
      '*[tabindex]:not([tabindex=\'-1\']), ' +
      '*[contenteditable=true]';
     let focussable = Array.prototype.filter.call(document.body.querySelectorAll(focussableElements),
      (element: any) => {
        return element.offsetWidth > 0 || element.offsetHeight > 0 || element === document.activeElement;
      });
     // If shift tab, go in the other direction
    let modifier = shiftKey ? -1 : 1;

    // Find the next navigable element that isn't waiting
    let startingIndex = focussable.indexOf(document.activeElement);
    let curIndex = startingIndex + modifier;
    while (focussable[curIndex] && this.isElementBusy(focussable[curIndex])) {
      curIndex += modifier;
    }

    if (focussable[curIndex] && !this.isElementBusy(focussable[curIndex])) {
      focussable[curIndex].focus();
    } else {
      // Try wrapping the navigation
      curIndex = modifier > 0 ? 0 : focussable.length - 1;
      while (
        curIndex !== startingIndex &&
        focussable[curIndex] &&
        this.isElementBusy(focussable[curIndex])
      ) {
        curIndex += modifier;
      }

      /* istanbul ignore else */
      /* sanity check */
      if (focussable[curIndex] && !this.isElementBusy(focussable[curIndex])) {
        focussable[curIndex].focus();
      } else {
        // No valid target, wipe focus
        this.clearDocumentFocus();
      }
    }
  }

  private isElementBusy(element: any) {
    for (let key of Object.keys(SkyWaitAdapterService.busyElements)) {
      const parentElement = SkyWaitAdapterService.busyElements[key];
      if (parentElement.contains(element)) {
        return true;
      }
    }
    return false;
  }

  private clearDocumentFocus(): void {
    if (document.activeElement && (document.activeElement as any).blur) {
      (document.activeElement as any).blur();
    }
    document.body.focus();
  }

  private static clearListener(): void {
    if (SkyWaitAdapterService.activeListener) {
      SkyWaitAdapterService.activeListener();
      SkyWaitAdapterService.activeListener = undefined;
    }

    this.isPageWaitActive = false;
    for (let key of Object.keys(SkyWaitAdapterService.busyElements)) {
      delete SkyWaitAdapterService.busyElements[key];
    }
  }
}
