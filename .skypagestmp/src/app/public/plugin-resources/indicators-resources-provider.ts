
import {
  Injectable
} from '@angular/core';

import {
  getStringForLocale,
  SkyAppLocaleInfo,
  SkyLibResourcesProvider
} from '@skyux/i18n';

@Injectable()
export class SkyIndicatorsResourcesProvider implements SkyLibResourcesProvider {
  private resources: any = {"EN-US":{"skyux_alert_close":"Close the alert","skyux_chevron_collapse":"Collapse","skyux_chevron_expand":"Expand","skyux_help_inline_button_title":"Show help content","skyux_status_indicator_sr_completed":"Completed:","skyux_status_indicator_sr_error":"Error:","skyux_status_indicator_sr_important_info":"Important information:","skyux_status_indicator_sr_warning":"Warning:","skyux_tokens_dismiss_button_title":"Remove item","skyux_wait_aria_alt_text":"Loading.","skyux_wait_blocking_aria_alt_text":"Loading. Please wait.","skyux_wait_page_aria_alt_text":"Page loading.","skyux_wait_page_blocking_aria_alt_text":"Page loading. Please wait."}};

  public getString(localeInfo: SkyAppLocaleInfo, name: string): string {
    return getStringForLocale(this.resources, localeInfo.locale, name);
  }
}
