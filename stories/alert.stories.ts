import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { SkyAlertModule } from 'projects/indicators/src/public-api';
import { SkyAlertComponent } from 'projects/indicators/src/modules/alert/alert.component';

export default {
  title: 'Alert',
  component: SkyAlertComponent,
  decorators: [
    moduleMetadata({
      imports: [SkyAlertModule],
    }),
  ],
} as Meta;

const Template: Story<SkyAlertComponent> = (args: SkyAlertComponent) => ({
  props: args,
  template: '<sky-alert>This is an alert message.</sky-alert>',
});

export const info = Template.bind({});

info.args = {
  alertType: 'info',
  closable: true,
};
