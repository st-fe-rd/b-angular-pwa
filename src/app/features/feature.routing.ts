import { Routes } from '@angular/router';
import { FeatureComponent } from './feature.component';
import { AuthGuard } from '../core/service/auth/auth-guard';
import { homeRoutes } from './home/home.routing';
import { postRoutes } from './post/post.routing';
import { postDetailRoutes } from './post-detail/post-detail.routing';
import { filterRoutes } from './filter/filter.routing';
import { searchPageRoutes } from './search-page/search-page.routing';


export const featureRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: FeatureComponent,
    canActivate: [AuthGuard]
  }
];
