import { Component, OnInit, OnDestroy } from '@angular/core';
import { I18nService } from './core/service/i18n/i18n.service';
import { filter } from 'rxjs/operators';
import { AuthService } from './core/service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';


// Define list language for app
I18nService.SUPPORTED_LANGUAGES = [
  { code: 'ja', title: 'Japanese' },
  { code: 'en', title: 'English' },
  { code: 'vi', title: 'Vietnamese' }
];

// Set type active for current language
I18nService.ACTIVE_TYPE = 'selected';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  title: 'app';
  selectedFile: null;
  noBackHeader: any = [];
  deviceInfo: any;
  isHeaderShow: Boolean = true;

  constructor(
    public i18n: I18nService,
    private auth: AuthService,
    private router: Router, 
    private activatedRoute: ActivatedRoute,
  ) { 
    this.noBackHeader = [
      /\/home/,
      /\/auth\/login/
    ]
  }

  ngOnInit() {
  }

}
