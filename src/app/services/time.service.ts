import { Entry, TimeSpan } from './../components/timer/timer.component';
import { Injectable } from '@angular/core';
import { Component, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Subject, interval } from 'rxjs';
import { NgModule } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { CompileShallowModuleMetadata } from '@angular/compiler';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
//import {Storage} from '@ionic/storage';
@Injectable(
  {providedIn: 'root'}
)
export class TimeService {
  // constructor(private changeDetector: ChangeDetectorRef) {

  // }
  data :[];
  aboutTimes = [];
  homeTimes = [];
  constructor(){
    this.aboutTimes = localStorage.getItem("about") !== null
       ?JSON.parse(localStorage.getItem("about")):[];
       this.homeTimes = localStorage.getItem("about") !== null
       ?JSON.parse(localStorage.getItem("about")):[];   
    this.homeTimes = localStorage.getItem("home") !== null
       ?JSON.parse(localStorage.getItem("home")):[];
       this.homeTimes = localStorage.getItem("home") !== null
       ?JSON.parse(localStorage.getItem("home")):[];       
  }
   getData(page:string)
    {
      return localStorage.getItem(page) !== null 
             ?JSON.parse(localStorage.getItem(page)) :[]
    }
    setData(page:string,data:number[] )
    {  
       localStorage.setItem(page,JSON.stringify( data));
    }
  addTime(val:number,pageName:string){
    if(val>=0)
    { //switch (pageName)
      // {case  "about" :
       if(pageName==="about")  { 
           this.aboutTimes =this.getData("about"); 
           this.aboutTimes.push(val);
          console.log("about array : ") 
          console.log(this.aboutTimes);
          localStorage.setItem("about",JSON.stringify(this.aboutTimes)); 
          this.aboutTimes = this. getData("about");
         // break;
         }
       // case "home" :
        else if(pageName ==="home")
          { this.homeTimes=this.getData("home")
            this.homeTimes.push(val);
            console.log("home array : ");
            console.log(this.homeTimes);
            localStorage.setItem("home",JSON.stringify(this.homeTimes)); 
            this.homeTimes = this.getData("home");
         // break;
          } 
           
          //default :
          //else
          // {
          //   console.log("not on the page ")
          // }
       
    }
    else{
      alert("No valid time to be inserted");
      
    }
  }
  
  
}




  // addTime(t:number,param:string){
  //   switch(param)
  //      {case 'about':
  //          { this.aboutTimes.push(t);
  //            break;
  //          }
  //        case 'home' :
  //         {
  //           this.homeTimes.push(t);
  //           break;
  //          }   
  //        default :{
  //          console.log("Wrong time page parameter");
  //          break;
  //        } 
  //        console.log(this.aboutTimes)
      
  //     }


  




 



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


