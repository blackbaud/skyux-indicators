import {
  Component
} from '@angular/core';

import {
  SkyToken
} from '@skyux/indicators';

@Component({
  selector: 'sky-tokens-demo',
  templateUrl: './tokens-demo.component.html'
})
export class TokensDemoComponent  {

  public colors: SkyToken[];

  private defaultColors = [
    { name: 'Red' },
    { name: 'Black' },
    { name: 'Blue' },
    { name: 'Brown' },
    { name: 'Green' },
    { name: 'Orange' },
    { name: 'Pink' },
    { name: 'Purple' },
    { name: 'Turquoise' },
    { name: 'White' },
    { name: 'Yellow' }
  ];

  constructor() {
    this.colors = this.parseTokens(this.defaultColors);
  }

  private parseTokens(data: any[]): SkyToken[] {
    return data.map((item: any) => {
      return {
        value: item
      } as SkyToken;
    });
  }
}
