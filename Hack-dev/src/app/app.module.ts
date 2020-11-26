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
import { MatSliderModule } from '@angular/material/slider';

import {CanDeactivateGuard} from './services/can-deactivate-guard.service';
import { AngularFirestore, AngularFirestoreModule } from "@angular/fire/firestore";

import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { Custom404Component } from './pages/custom404/custom404.component';
// import { DashboardComponent } from './pages/dashboard/dashboard.component';
// import { AddProfessorComponent } from './components/add-professor/add-professor.component';
// import { NavbarComponent } from './components/navbar/navbar.component';
// import { ClassDetailsComponent } from './pages/class-details/class-details.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

// import { FlexLayoutModule } from '@angular/flex-layout';

import { HttpClientModule } from '@angular/common/http';

// import { ChartsModule } from 'ng2-charts';
// import { DetailsComponent } from './pages/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TimerComponent,
    HomeComponent,
    AboutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatGridListModule,
    MatToolbarModule,
    MatTooltipModule,
    // FlexLayoutModule,
    HttpClientModule,
    // ChartsModule,
  ],
  //providers: [TimeService ],
  providers:[CanDeactivateGuard,TimeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
