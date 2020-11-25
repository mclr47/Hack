import { ChangeComponent } from 'src/app/services/can-deactivate-guard.service';
import { NavComponent } from './../header/nav/nav.component';
import { ChangeDetectorRef, ChangeDetectionStrategy, ViewChild, ViewContainerRef } from '@angular/core';
import { TimeService } from './../../services/time.service';
import { Component, OnInit,OnDestroy ,AfterViewInit,Input,Output} from '@angular/core';
import   {TimerComponent,Entry,TimeSpan} from '../timer/timer.component'
import { Subject, interval } from 'rxjs';
import { NgModule } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class HomeComponent implements OnInit,OnDestroy ,ChangeComponent{
  homet:Entry[];
  timeTracker:TimerComponent;
  timeSpan:TimeSpan;
  ts:TimeService;
  timer:TimerComponent;
  newId: string="home";
  
  //@ViewChild("app-timer") homeTime : TimerComponent;
  @ViewChild("app-timer") homeTime : ViewContainerRef;
  @ViewChild(TimerComponent) tComp :TimerComponent;
  // constructor(thome:TimerComponent) {this.homet=thome.addEntry();
  //   this.timeTracker=thome;
  // }
// constructor(private thome: TimeService){
//   this.tService=thome;
//   this.homet=this.tService.entries;
// }
 //constructor(private  tservice:TimeService){this.tService=this.tservice}
 constructor(){}
  // ngOnInit(): void {
  //   //this.tService.sngOnInit();
  //   this.timer.tngOnInit()
   
  // }
  // onAfterViewInit{
  //   this.homeTime.tn
  // }
  // ngOnDestroy() {
  //   //this.tService.sngOnDestroy();
  //   this.timer.tngOnDestroy()
  // }

  // hgetElapsedTime(entry: Entry):TimeSpan{
  //   // const hTimeSpan:TimeSpan = this.tService.getElapsedTime(entry);
  //   // return hTimeSpan;
  //   const hTimeSpan :TimeSpan = this.timer.getElapsedTime(entry);
  //   return hTimeSpan

  // }
//console.log(tService.abou )
  ngOnInit(){}
  ngOnDestroy(){console.log("Home destroyed !!!")}
  canDeactivate(): (Observable<boolean> | Promise<boolean> |boolean){
    // this.ts.addTime(this.tComp.getelapsedTimeSeconds(),this.newId);
     return true;
     return true;
   }

}
