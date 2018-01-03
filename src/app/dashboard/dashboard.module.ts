import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard.component';

const route: Routes = [
  {
    path: '', data: {
      title: 'Dashboard',
      urls: [{title: 'Dashboard', url: '/'}, {title: 'Starter page'}]
    },
    component: DashboardComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(route)
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule {}
