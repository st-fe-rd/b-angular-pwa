import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './core/service/auth/auth-guard';

const routes: Routes = [
  {
    path: 'auth',
    canActivate: [AuthGuard],
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () => import('./features/feature.module').then(m => m.FeatureModule)
  }
];

@NgModule({
  imports: [
  RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled'
    })
  ],
  exports: [RouterModule],
  providers: [AuthGuard]
})

export class AppRoutingModule { }
