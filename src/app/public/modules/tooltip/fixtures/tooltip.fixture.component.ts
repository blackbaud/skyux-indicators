import {
  Component
} from '@angular/core';

@Component({
  selector: 'test-sky-tooltip',
  templateUrl: './tooltip.fixture.component.html'
})
export class TooltipFixtureComponent {
  public label: string = 'Best label';
  public disabled: boolean = false;
}
