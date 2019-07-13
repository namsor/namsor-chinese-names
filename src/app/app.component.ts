import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'namsor-chinese-names';

  constructor(private translate: TranslateService) {
    // detect browser language
    let language = environment.LANG_ENGLISH;
    translate.addLangs([environment.LANG_CHINESE, environment.LANG_ENGLISH]);
    if (navigator.language !== undefined) {
      if (navigator.language.substr(0, 2) === 'zh' ) {
        language = environment.LANG_CHINESE;
      }
    }
    translate.setDefaultLang(language);
  }
}
