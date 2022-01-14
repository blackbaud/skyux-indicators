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
  public direction = 'up';

  @Input()
  public disabled = false;

  @Output()
  public directionChange = new EventEmitter<string>();

  public ariaExpanded(): boolean | undefined {
    if (this.direction === 'up') {
      return true;
    } else if (this.direction === 'down') {
      return false;
    }
  }

  public chevronClick(event: Event): void {
    event.stopPropagation();
    this.direction = this.direction === 'up' ? 'down' : 'up';
    this.directionChange.emit(this.direction);
  }
}
