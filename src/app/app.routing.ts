import {RouterModule, Routes} from '@angular/router';

const APP_ROUTING: Routes = [
  {
    path: '', loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'auth', loadChildren: './auth/auth.module#AuthModule'
  },
];

export const routing = RouterModule.forRoot(APP_ROUTING);
