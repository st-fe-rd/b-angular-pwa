import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { AuthService } from '../service/auth/auth.service';
import { I18N_PROVIDERS } from '../service/i18n/i18n.service';
import { AuthGuard } from '../service/auth/auth-guard';
import { API_PROVIDERS } from '../service/api/api.service';
import { TokenInterceptorService } from '../service/auth/token-interceptor.service';

import { HTTP_INTERCEPTORS } from '@angular/common/http';

const AUTH_PROVIDERS = [
  AuthService,
  AuthGuard
];

@NgModule({
  imports: [],
  declarations: [],
  exports: []
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        AUTH_PROVIDERS,
        I18N_PROVIDERS,
        API_PROVIDERS,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: TokenInterceptorService,
          multi: true
        }
      ]
    };
  }

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
