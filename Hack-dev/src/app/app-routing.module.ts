import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component'
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CanDeactivateGuard} from './services/can-deactivate-guard.service';
import {
  AngularFireAuthGuard,
  redirectUnauthorizedTo,
  redirectLoggedInTo,
} from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToDashboard = () => redirectLoggedInTo(['']);

const routes: Routes = [

{ path:'', redirectTo:'/home',pathMatch:'full' },
{path:'home',component:HomeComponent,canDeactivate:[CanDeactivateGuard]},
{path:'about',component:AboutComponent},
{ path: 'login',component: LoginComponent, canActivate: [AngularFireAuthGuard],data: { authGuardPipe: redirectLoggedInToDashboard },},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
