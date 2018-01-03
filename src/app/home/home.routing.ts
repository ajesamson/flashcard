import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';


const HOME_ROUTING: Routes = [
  {
    path: '', redirectTo: '/dashboard', pathMatch: 'full'
  },
  {
    path: 'dashboard', component: HomeComponent, loadChildren: '../dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'cards', component: HomeComponent, loadChildren: '../cards/cards.module#CardsModule'
  },
  {
    path: 'category', component: HomeComponent, loadChildren: '../category/category.module#CategoryModule'
  }
];

export const homeRouting = RouterModule.forChild(HOME_ROUTING);
