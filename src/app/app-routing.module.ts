import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CanDeactivateGuard} from './services/can-deactivate-guard.service'
const routes: Routes = [{path:'', redirectTo:'/home',pathMatch:'full'},
{path:'home',component:HomeComponent,canDeactivate:[CanDeactivateGuard]},
{path:'about',component:AboutComponent,canDeactivate:[CanDeactivateGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
