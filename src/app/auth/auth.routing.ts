import { Routes } from '@angular/router';
import { AuthGuard } from 'app/core/service/auth/auth-guard';

export const authRoutes: Routes = [
  {
    path: 'auth',
    canActivate: [AuthGuard],
    loadChildren: () => import('./auth.module').then(m => m.AuthModule)
  },
];
