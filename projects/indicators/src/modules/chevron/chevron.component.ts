import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'sky-chevron',
  styleUrls: ['./chevron.component.scss'],
  templateUrl: './chevron.component.html',
})
export class SkyChevronComponent {
  @Input()
  public ariaControls: string;

  @Input()
  public ariaLabel: string;

  @Input()
  public set direction(value: string) {
    /* istanbul ignore else */
    if (value != this._direction) {
      this._direction = value;
      /* istanbul ignore else */
      if (value === 'up') {
        this.ariaExpanded = true;
      } else if (this.direction === 'down') {
        this.ariaExpanded = false;
      }
    }
  }

  public get direction(): string {
    return this._direction || 'up';
  }

  @Input()
  public disabled = false;

  @Output()
  public directionChange = new EventEmitter<string>();

  public ariaExpanded: boolean;

  private _direction: string;

  public chevronClick(event: Event): void {
    event.stopPropagation();
    this.direction = this.direction === 'up' ? 'down' : 'up';
    this.directionChange.emit(this.direction);
  }
}
