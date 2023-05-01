import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component'
import { FormsModule } from '@angular/forms';
import { ListComponent } from './bike/list/list.component';
import { AddComponent } from './bike/add/add.component';
import { EditComponent } from './bike/edit/edit.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { UserShowBikesComponent } from './user-show-bikes/user-show-bikes.component';
import { RazerpayComponent } from './razerpay/razerpay.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PagenotfoundComponent,
    ListComponent,
    AddComponent,
    EditComponent,
    UserLoginComponent,
    UserRegisterComponent,
    HomeUserComponent,
    UserShowBikesComponent,
    RazerpayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
