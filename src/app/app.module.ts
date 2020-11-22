import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,ChangeDetectorRef} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimerComponent } from './components/timer/timer.component';
import { HomeComponent } from './components/home/home.component';
import {TimeService} from './services/time.service';
import { AboutComponent } from './components/about/about.component'
@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    HomeComponent,
    AboutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  //providers: [TimeService ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
