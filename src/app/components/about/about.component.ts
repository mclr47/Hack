import { ChangeDetectorRef, ChangeDetectionStrategy, ViewChild, ViewContainerRef, } from '@angular/core';
import { TimeService } from './../../services/time.service';
import { Component, OnInit,OnDestroy ,AfterViewInit} from '@angular/core';
import   {TimerComponent,Entry,TimeSpan} from '../timer/timer.component'
import { Subject, interval } from 'rxjs';
import { NgModule } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { time } from 'console';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit,OnDestroy {
  @ViewChild(TimerComponent) tComp :TimerComponent;
  newId:string="about";
  ts:TimeService
  // constructor(timeService:TimeService) { 
  //   this.ts=timeService;
  // }


  ngOnInit(): void {
  }
  ngOnDestroy():void{
  // //  this.tComp.getelapsedTimeSeconds; 
  //  const currtime= this.ts.addTime(this.tComp.getelapsedTimeSeconds,'about' );
  //  console.log(currtime)
  //  console.log(this.ts.aboutTimes);
  }

}
