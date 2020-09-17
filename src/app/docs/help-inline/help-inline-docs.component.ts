import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-help-inline-docs',
  templateUrl: './help-inline-docs.component.html'
})
export class HelpInlineDocsComponent {

  public onActionClick(): void {
    alert('Help inline button clicked!');
  }

}
