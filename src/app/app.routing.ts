import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';

const APP_ROUTING: Routes = [
  {
    path: '', redirectTo: '/cards', pathMatch: 'full'
  },
  {
    path: 'cards', component: AppComponent
  }
];

export const routing = RouterModule.forRoot(APP_ROUTING);
