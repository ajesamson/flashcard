import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './login/login.component';

const AUTH_ROUTING: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent }
];

export const authRoute = RouterModule.forChild(AUTH_ROUTING);
