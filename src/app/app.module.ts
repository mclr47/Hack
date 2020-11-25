import { CanDeactivate } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,ChangeDetectorRef} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimerComponent } from './components/timer/timer.component';
import { HomeComponent } from './components/home/home.component';
import {TimeService} from './services/time.service';
import { AboutComponent } from './components/about/about.component';
import {CanDeactivateGuard} from './services/can-deactivate-guard.service';
import { NavComponent } from './components/header/nav/nav.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    HomeComponent,
    AboutComponent,
    NavComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule
  ],
  //providers: [TimeService ],
  providers:[CanDeactivateGuard,TimeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
