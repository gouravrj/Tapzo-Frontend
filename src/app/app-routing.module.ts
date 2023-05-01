import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ListComponent } from './bike/list/list.component';
import { EditComponent } from './bike/edit/edit.component';
import { AuthGuardService } from './auth-guard.service';
import { AddComponent } from './bike/add/add.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { RazerpayComponent } from './razerpay/razerpay.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"save",component:AddComponent},
  {path:"user-login",component:UserLoginComponent},
  {path:"user-register",component:UserRegisterComponent},
  {path:"home-user/showbikes", component:HomeUserComponent},
  {path:"bike/book/:price",component:RazerpayComponent},

  {path:"bike/list",component:ListComponent,canActivate:[AuthGuardService]},
  {path:"bike/edit/:id",component:EditComponent,canActivate:[AuthGuardService]},

  {path:"**",component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
