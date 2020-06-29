import {
  Input,
  Component
} from '@angular/core';

@Component({
  selector: 'sky-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class SkyTooltipComponent {
  @Input()
  public label: string;
}
