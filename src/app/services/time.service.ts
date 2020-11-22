import { Entry, TimeSpan } from './../components/timer/timer.component';
import { Injectable } from '@angular/core';
import { Component, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Subject, interval } from 'rxjs';
import { NgModule } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { CompileShallowModuleMetadata } from '@angular/compiler';

@Injectable(
  {providedIn: 'root'}
)
export class TimeService {
  // constructor(private changeDetector: ChangeDetectorRef) {

  // }

  aboutTimes = [];
  homeTimes = []
  addTime(t:number,param:string){
    switch(param)
       {case 'about':
           { this.aboutTimes.push(t);
             break;
           }
         case 'home' :
          {
            this.homeTimes.push(t);
            break;
           }   
         default :{
           console.log("Wrong time page parameter");
           break;
         } 
         console.log(this.aboutTimes)
      
      }


  }




 
}



// entries: Entry[] = [ ]
//   //   [{ id: 'yesterday', created: new Date(new Date().getTime() - (24 * 1000 * 60 * 60) ) },
//   //   { id: '1 hour ago', created: new Date(new Date().getTime() - (1000 * 60 * 60) ) },
//   //   { id: '1 minute ago', created: new Date(new Date().getTime() - (1000 * 60) ) }
//   // ];
//   newId: string;
  
//   private destroyed$ = new Subject();

//   sngOnInit() {
//     this.newId = 'first';
//     this.addEntry();
    
//     interval(1000).subscribe(() => {
//       if (!this.changeDetector['destroyed']) {
//         this.changeDetector.detectChanges();
//       }
//     });

//     this.changeDetector.detectChanges();
//   }

//   sngOnDestroy() {
//     this.destroyed$.next();
//     this.destroyed$.complete();
//   }
  
//   addEntry() {
//     this.entries.push({
//       created: new Date(),
//       id: this.newId
//     });
//     this.newId = '';
//     // my next line
//     return this.entries;
//   }

//   getElapsedTime(entry: Entry): TimeSpan {        
//     let totalSeconds = Math.floor((new Date().getTime() - entry.created.getTime()) / 1000);
    
//     let hours = 0;
//     let minutes = 0;
//     let seconds = 0;

//     if (totalSeconds >= 3600) {
//       hours = Math.floor(totalSeconds / 3600);      
//       totalSeconds -= 3600 * hours;      
//     }

//     if (totalSeconds >= 60) {
//       minutes = Math.floor(totalSeconds / 60);
//       totalSeconds -= 60 * minutes;
//     }

//     seconds = totalSeconds;
    
//     return {
//       hours: hours,
//       minutes: minutes,
//       seconds: seconds
//     };
//   }


