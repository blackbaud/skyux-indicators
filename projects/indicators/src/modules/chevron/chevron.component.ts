import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'sky-chevron',
  styleUrls: ['./chevron.component.scss'],
  templateUrl: './chevron.component.html'
})
export class SkyChevronComponent {

  @Output()
  public directionChange = new EventEmitter<string>();

  @Input()
  public direction = 'up';

  @Input()
  public disabled = false;

  public chevronClick(event: Event): void {
    event.stopPropagation();
    this.direction = this.direction === 'up' ? 'down' : 'up';
    this.directionChange.emit(this.direction);
  }

}
