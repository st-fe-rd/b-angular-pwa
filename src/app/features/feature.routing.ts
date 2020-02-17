import { Routes } from '@angular/router';
import { AuthGuard } from 'app/core/service/auth/auth-guard';

export const featureRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () => import('./feature.module').then(m => m.FeatureModule)
  }
];
