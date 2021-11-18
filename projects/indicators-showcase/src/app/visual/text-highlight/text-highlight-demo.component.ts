import { Component } from '@angular/core';

@Component({
  selector: 'sky-text-highlight-demo',
  templateUrl: './text-highlight-demo.component.html',
})
export class SkyTextHighlightDemoComponent {
  public arrayOfSearchTerms = ['Åland', 'Aland'];
  public normalSearchTerm: string;
  public blankSearchTerm = '';
  public notMatchedSearchTerm = 'xnotmatched';
}
