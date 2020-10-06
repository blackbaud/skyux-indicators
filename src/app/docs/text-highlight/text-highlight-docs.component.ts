import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-text-highlight-docs',
  templateUrl: './text-highlight-docs.component.html'
})
export class TextHighlightDocsComponent {

  public searchTerm: string;

  public showAdditionalContent: boolean = false;

}
