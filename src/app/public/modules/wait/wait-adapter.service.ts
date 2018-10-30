import {
  ElementRef,
  Injectable,
  Renderer,
  OnDestroy
} from '@angular/core';

import {
  SkyWaitComponent
} from './wait.component';

@Injectable()
export class SkyWaitAdapterService implements OnDestroy {
  private parentListeners: {[key: string]: Function} = {};

  constructor(
    private renderer: Renderer
  ) { }

  public ngOnDestroy() {
    for (let key of Object.keys(this.parentListeners)) {
      this.parentListeners[key]();
      delete this.parentListeners[key];
    }
  }

  public setWaitBounds(waitEl: ElementRef) {
    this.renderer.setElementStyle(waitEl.nativeElement.parentElement, 'position', 'relative');
  }

  public removeWaitBounds(waitEl: ElementRef) {
    this.renderer.setElementStyle(waitEl.nativeElement.parentElement, 'position', undefined);
  }

  public setBusyState(
    waitEl: ElementRef,
    isFullPage: boolean,
    isWaiting: boolean,
    isNonBlocking = false,
    waitCmp: SkyWaitComponent = undefined
  ): void {
    let busyEl = isFullPage ? document.body : waitEl.nativeElement.parentElement;
    let state = isWaiting ? 'true' : undefined;

    if (!(waitCmp && isNonBlocking)) {
      this.renderer.setElementAttribute(busyEl, 'aria-busy', state);

      // Remove focus from page when full page blocking wait
      if (isFullPage || busyEl.contains(document.activeElement)) {
        this.clearDocumentFocus();
      }

      if (isWaiting) {
        // Prevent tab navigation within the waited page
        let endListenerFunc = this.renderer.listen(document.body, 'keydown', (event: KeyboardEvent) => {
          if (event.key.toLowerCase() === 'tab') {
            event.preventDefault();
            event.stopPropagation();
            event.stopImmediatePropagation();
            if (!waitCmp.isFullPage) {
              // Propagate tab navigation if attempted into waited element
              this.focusNextElement(busyEl, event.shiftKey);
            } else {
              this.clearDocumentFocus();
            }
          }
        });
        this.parentListeners[waitCmp.id] = endListenerFunc;
      } else if (waitCmp.id in this.parentListeners) {
        // Clean up existing listener
        this.parentListeners[waitCmp.id]();
        delete this.parentListeners[waitCmp.id];
      }
    }
  }

  private focusNextElement(parentElement: any, shiftKey: boolean): void {
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
    while (focussable[curIndex] && parentElement.contains(focussable[curIndex])) {
      curIndex += modifier;
    }

    if (focussable[curIndex] && !parentElement.contains(focussable[curIndex])) {
      focussable[curIndex].focus();
    } else {
      // Try wrapping the navigation
      curIndex = modifier > 0 ? 0 : focussable.length - 1;
      while (
        curIndex !== startingIndex &&
        focussable[curIndex] &&
        parentElement.contains(focussable[curIndex])
      ) {
        curIndex += modifier;
      }

      /* istanbul ignore else */
      /* sanity check */
      if (focussable[curIndex] && !parentElement.contains(focussable[curIndex])) {
        focussable[curIndex].focus();
      } else {
        // No valid target, wipe focus
        this.clearDocumentFocus();
      }
    }
  }

  private clearDocumentFocus() {
    if (document.activeElement && (document.activeElement as any).blur) {
      (document.activeElement as any).blur();
    }
    document.body.focus();
  }
}
