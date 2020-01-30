import {
  Component
} from '@angular/core';

import {
  SkyDocsDemoControlPanelChange,
  SkyDocsDemoControlPanelRadioChoice
} from '@skyux/docs-tools';

@Component({
  selector: 'app-alert-docs',
  templateUrl: './alert-docs.component.html'
})
export class AlertDocsComponent {
  public typeChoices: SkyDocsDemoControlPanelRadioChoice[] = [
    { value: 'danger', label: 'Danger' },
    { value: 'info', label: 'Info' },
    { value: 'success', label: 'Success' },
    { value: 'warning', label: 'Warning' }
  ];

  public demoSettings: any = {};

  public onDemoSelectionChange(change: SkyDocsDemoControlPanelChange): void {
    this.demoSettings.closed = false;

    if (change.closable !== undefined) {
      this.demoSettings.closable = change.closable;
    }
    if (change.alertType) {
      this.demoSettings.type = change.alertType;
    }
  }
}