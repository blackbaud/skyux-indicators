import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'sky-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class SkyLabelComponent {
  @Input()
  public get labelType(): string {
    return this._labelType || 'info';
  }
  public set labelType(value: string) {
    this._labelType = value;
  }

  private _labelType: string;
}
