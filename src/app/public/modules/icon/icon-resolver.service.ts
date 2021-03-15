import {
  Injectable
} from '@angular/core';

import {
  SkyThemeIconManifestGlyph,
  SkyThemeIconManifestService
} from '@skyux/theme';

import {
  SkyIconVariant
} from './icon-variant';

@Injectable()
export class SkyIconResolverService {

  private glyphMap = new Map<string, SkyThemeIconManifestGlyph>();

  constructor(manifestSvc: SkyThemeIconManifestService) {
    // Map the icons by name for more efficient lookup.
    for (const glyph of manifestSvc.getManifest().glyphs) {
      this.glyphMap.set(glyph.name, glyph);
    }
  }

  public resolveIcon(iconName: string, variant?: SkyIconVariant): string {
    if (variant === SkyIconVariant.Solid) {
      const solidIconName = `${iconName}-solid`;

      if (this.glyphMap.has(solidIconName)) {
        return solidIconName;
      }
    }

    if (
      variant === SkyIconVariant.Line ||
        // Default to the line variant if a non-variant doesn't exist, even if no
        // variant was specified.
        !this.glyphMap.has(iconName)
    ) {
      const lineIconName = `${iconName}-line`;

      if (this.glyphMap.has(lineIconName)) {
        return lineIconName;
      }
    }

    // An icon either exists with the specified name, or no non-variant or line variant
    // was found. Return the icon name as-is.
    return iconName;
  }

}
