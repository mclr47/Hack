import { TimeService } from './../../services/time.service';
import {  OnInit, OnDestroy,Input ,Output, EventEmitter} from '@angular/core';
import { Component, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Subject, interval } from 'rxjs';
import { NgModule } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {NavComponent} from '../header/nav/nav.component';
import { AngularFirestore } from '@angular/fire/firestore';
import {TimefireService} from '../../services/timefire.service';
export interface Entry {
  created: Date;
  id: string;
}

export interface TimeSpan {
  hours: number;
  minutes: number;
  seconds: number;
}


@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
//export class TimerComponent implements OnInit {
  export class TimerComponent{
  constructor(private changeDetector: ChangeDetectorRef, private  tservice:TimeService,
   private timeFire:TimefireService) {
    
  }

  entries: Entry[] = [ ]
  //   [{ id: 'yesterday', created: new Date(new Date().getTime() - (24 * 1000 * 60 * 60) ) },
  //   { id: '1 hour ago', created: new Date(new Date().getTime() - (1000 * 60 * 60) ) },
  //   { id: '1 minute ago', created: new Date(new Date().getTime() - (1000 * 60) ) }
  // ];
  @Input() public newId: string;
  private created:Date = new Date();
  private destroyed$ = new Subject();
  //private currentPage$= new Subject;
  @Output() timeCounterSec = new EventEmitter<number>()
  ngOnInit() {
    //this.currentPage$=this.newId;
    // this.newId = 'first';
    this.addEntry();
    
    interval(1000).subscribe(() => {
      if (!this.changeDetector['destroyed']) {
        this.changeDetector.detectChanges();
      }
    });

    this.changeDetector.detectChanges();
    //added here
    console.log("from ngOnInit ~~~~~~")
    console.log(this.newId);
    console.log(this.entries[0].id);
  }
   returnCurrentPage()
   {return this.newId;}
  //  target.ngOnDestroy = () => {
  ngOnDestroy() {
    
    console.log("from ngOnDestroy")
    //console.log("this newId : ",this.returnCurrentPage());
    console.log(this.newId.valueOf());
    console.log("created : ",this.created);
    console.log(this.returnCurrentPage());
    //this.tservice.addTime(7,'about');
    //this.timeCounterSec.emit( Math.floor((new Date().getTime() -this.entries[this.entries.length-1].created.getTime())/1000))
    //console.log( Math.floor((new Date().getTime() -this.entries[this.entries.length-1].created.getTime())/1000))
    this.tservice.addTime(this.getelapsedTimeSeconds(),this.entries[0].id);
    this.timeFire.addTimePageToFire(this.getelapsedTimeSeconds(),this.entries[0].id);
    this.timeFire.addTimeFire(this.getelapsedTimeSeconds());

    this.timeFire.getPageTimeFire(this.entries[0].id);
    // this.timeFire.addTimePageToFire( this.getelapsedTimeSeconds(),this.newId);
    console.log(this.getelapsedTimeSeconds());
    console.log(this.tservice.aboutTimes);
//console.log(this.getElapsedTime)
  //the avearage time
  const ave =this.timeFire.getPageAverageFire(this.entries[0].id);
    this.destroyed$.next();
    this.destroyed$.complete();
  }
  
  addEntry() {
    this.entries.push({
      created: new Date(),
      id: this.newId
    });
    this.newId = '';
    // my next line
    return this.entries;
  }

  getElapsedTime(entry: Entry): TimeSpan {        
    let totalSeconds = Math.floor((new Date().getTime() - entry.created.getTime()) / 1000);
    //console.log(typeof totalSeconds);
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    if (totalSeconds >= 3600) {
      hours = Math.floor(totalSeconds / 3600);      
      totalSeconds -= 3600 * hours;      
    }

    if (totalSeconds >= 60) {
      minutes = Math.floor(totalSeconds / 60);
      totalSeconds -= 60 * minutes;
    }

    seconds = totalSeconds;
    
    return {
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  }
 // getelapsedTimeSeconds(entry: Entry){
    getelapsedTimeSeconds(){ 
    //let totalSeconds = Math.floor((new Date().getTime() - entry.created.getTime()) / 1000);
    let totalSeconds = Math.floor((new Date().getTime() -this.entries[this.entries.length-1].created.getTime())/1000);
      return totalSeconds;
     
  }
}

  
  


