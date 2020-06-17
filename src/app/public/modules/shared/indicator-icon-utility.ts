import { SkyIndicatorIcon } from './indicator-icon';

export  class SkyIndicatorIconUtility {

  public static getIconsForType(indicatorType: string): SkyIndicatorIcon {
    let icon: string;
    let baseIcon: string;
    let topIcon: string;

    // tslint:disable-next-line: switch-default
    switch (indicatorType) {
      case 'danger':
      case 'warning':
        icon = 'warning';
        baseIcon = 'triangle-solid';
        topIcon = 'exclamation';
        break;
      case 'info':
        icon = 'info-circle';
        baseIcon = 'circle-solid';
        topIcon = 'help-i';
        break;
      case 'success':
        icon = 'check-circle';
        baseIcon = 'circle-solid';
        topIcon = 'check';
        break;
    }

    return {
      defaultThemeIcon: icon,
      modernThemeBaseIcon: {
        icon: baseIcon,
        iconType: 'skyux'
      },
      modernThemeTopIcon: {
        icon: topIcon,
        iconType: 'skyux'
      }
    };
  }
}
