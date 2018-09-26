import { Component } from '@angular/core';

@Component({
    selector: 'sky-text-highlight-component',
    templateUrl: 'text-highlight.component.fixture.html'
})

export class SkyTextHighlightTestComponent {
  public searchTerm: string;
  public showAdditionalContent: boolean = false;
  public innerText1: string = 'Here is some test text.';
  public innerText2: string = 'Here is additional text that was previously hidden in src\\app.';
}
