import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CardsComponent} from './cards.component';

const cardsRouting: Routes = [
  {
    path: '', data: {
      title: 'All Cards',
      urls: [{title: 'Dashboard', url: '/'}, {title: 'Cards'}]
    },
    component: CardsComponent
  }
];

@NgModule({
  declarations: [
    CardsComponent
  ],
  imports: [
    RouterModule.forChild(cardsRouting)
  ]
})
export class CardsModule {}
