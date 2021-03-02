import {
  Injectable
} from '@angular/core';

import {
  HttpClient
} from '@angular/common/http';

import {
  Observable
} from 'rxjs';

import {
  SkyIconDocsIconManifest
} from './icon-manifest';

@Injectable()
export class SkyIconDocsManifestService {

  constructor(private http: HttpClient) { }

  public getSkyUxIconManifest(): Observable<SkyIconDocsIconManifest> {
    return this.http.get<SkyIconDocsIconManifest>(
      'https://sky.blackbaudcdn.net/static/skyux-icons/4.0.0-beta.2/assets/manifest.json'
    );
  }

}
