import { core } from '@angular/compiler';
import { Component, OnInit, ɵChangeDetectorStatus } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  timeArr :  Observable<any[]>;
   
  // npm install --save igniteui-angular-core
  // npm install --save igniteui-angular-charts 
  // https://www.infragistic.com



  // this.items = firestore.collection('items').valueChanges();
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
constructor(private db: AngularFirestore){
  this.timeArr = db.collection('alltimes').stateChanges();
 // this.timeArr.
}


  ngOnInit(): void {
  }

}
