import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CategoryComponent} from './category.component';

const cardsRouting: Routes = [
  {
    path: '', data: {
      title: 'All Categories',
      urls: [{title: 'Dashboard', url: '/'}, {title: 'Categories'}]
    },
    component: CategoryComponent
  }
];

@NgModule({
  declarations: [
    CategoryComponent
  ],
  imports: [
    RouterModule.forChild(cardsRouting)
  ]
})
export class CategoryModule {}
