import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {homeRouting} from './home.routing';
import {HomeComponent} from './home.component';
import {NavigationComponent} from '../shared/navigation/navigation.component';
import {SidebarComponent} from '../shared/sidebar/sidebar.component';
import {BreadcrumbComponent} from '../shared/breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavigationComponent,
    SidebarComponent,
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    homeRouting
  ],
  providers: []
})
export class HomeModule {}
