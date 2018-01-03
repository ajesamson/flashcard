import {NgModule} from '@angular/core';
import {AuthComponent} from './auth.component';
import {authRoute} from './auth.routing';
import {LoginComponent} from './login/login.component';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent
  ],
  imports: [
    authRoute
  ]
})
export class AuthModule {}
