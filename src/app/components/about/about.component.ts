import { CanDeactivate } from '@angular/router';
import { ChangeDetectorRef, ChangeDetectionStrategy, ViewChild, ViewContainerRef, } from '@angular/core';
import { TimeService } from './../../services/time.service';
import { Component, OnInit,OnDestroy ,AfterViewInit} from '@angular/core';
import   {TimerComponent,Entry,TimeSpan} from '../timer/timer.component'
import { Subject, interval } from 'rxjs';
import { NgModule } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ChangeComponent } from 'src/app/services/can-deactivate-guard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit,OnDestroy,AfterViewInit,ChangeComponent {
  @ViewChild(TimerComponent) tComp :TimerComponent;
  newId:string="about";
  ts:TimeService;
  startTime:Entry;
  elapsedtime:number;
  // constructor(timeService:TimeService) { 
  //   this.ts=timeService;
  // }
  constructor(){}
//   public assignElapsedTime(input: number){
//     this.variable = input;
// }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    this.startTime ={
      created: new Date(),
      id: this.newId
    };
    //this.ts.addTime(this.tComp.getelapsedTimeSeconds(this.startTime),this.newId);
    //this.elapsedtime = this.ts.aboutTimes[this.a];
    //console.log(typeof (this.ts.addTime(this.tComp.getelapsedTimeSeconds(this.startTime),this.newId)))
  }
  //console.log(typeof elapsedtime);

  ngOnDestroy():void{
    //this.ts.addTime(this.tComp.getelapsedTimeSeconds(this.startTime),this.newId);
   //this.tComp.getelapsedTimeSeconds; 
   //const currtime= this.ts.addTime(this.tComp.getelapsedTimeSeconds(this.startTime),this.newId);
   //this.elapsedtime = this.ts.aboutTimes[this.ts.aboutTimes.length-1];
     /////this.elapsedtime = this.tComp.getelapasedTimeSeconds();
   //(this.elapsedtime)= "$event";
   console.log("About??")
  //  console.log(this.ts.aboutTimes);
  //  console.log(this.ts.aboutTimes);
   /////console.log(this.elapsedtime);
  }
  canDeactivate(): (Observable<boolean> | Promise<boolean> |boolean){
   this.ts.addTime(this.tComp.getelapasedTimeSeconds());
    return true;
    return true;
  }
  

}
