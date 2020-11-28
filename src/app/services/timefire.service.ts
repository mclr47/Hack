import { Injectable, ɵALLOW_MULTIPLE_PLATFORMS } from '@angular/core';
import { Entry, TimeSpan } from './../components/timer/timer.component';

import { Component, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Subject, interval } from 'rxjs';
import { NgModule } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { CompileShallowModuleMetadata } from '@angular/compiler';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { map, switchMap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { rejects } from 'assert';

import firebase from 'firebase/app';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class TimefireService {
    timeArr :  Observable<any[]>;
    firestoreDb = firebase.firestore();
    
     // this.items = firestore.collection('items').valueChanges();
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  constructor(private db: AngularFirestore){
     this.timeArr = db.collection('alltimes').stateChanges();
  }
   

  addTimeFire(t){
    const timeCollection = this.db.collection('alltimes').add({t})
      .then((docRef) => console.log('time spent id is : ', docRef.id))
      .catch((error) => console.error('there was an error writing time to the database : ', error));

    // firestoreDb.collection(`users/${user.uid}/songs`);
    // songsCollection.add(song)
    //     .then((docRef) => console.log('Song document Id: ',docRef.id))
    //     .catch((error) => console.error('There was an error while writing sound/song to the console' , error) );

  }

  addTimePageToFire(t,page:string){
        
    const timeCollection = this.db.collection(page).add({t})
      .then((docRef) => console.log('time spent id is... : ', docRef.id))
      .catch((error) => console.error('there was an error writing time to the database : ', error));

    // firestoreDb.collection(`users/${user.uid}/songs`);
    // songsCollection.add(song)
    //     .then((docRef) => console.log('Song document Id: ',docRef.id))
    //     .catch((error) => console.error('There was an error while writing sound/song to the console' , error) );

  }
    //   
  async getPageTimeFire(page)
   { //const pageTimes : AngularFirestoreCollection<number>= this.db.collection(`page/${page.uid}/t`);
   const pageTimesCollection = this.firestoreDb.collection(`${page}/${page.uid}/t`);
   //const pageTimesCollection = this.db.collection(`page/${page.uid}/t`);
   console.log("from .....getPageTimeFire(page)........");
    // console.log(this.firestoreDb.collection('about/2tcxzsV5gpODdbzE9UFN/t')); 
    //const ttt= await this.firestoreDb.collection('about/2tcxzsV5gpODdbzE9UFN/t');
    const tt =(await this.firestoreDb.collection('about').doc('2tcxzsV5gpODdbzE9UFN').get()).data();
    console.log("************ tt  **********************");
    
    console.log ( tt['t'] ) ;
    console.log("************ tt  **********************");
    const timesOfPage = [];
    //const ttt= await this.firestoreDb.collection('about').get();
    const ttt= await this.firestoreDb.collection(page).get();
    
    console.log("********** ttt ****** ");
     ttt.docs.map((doc) => {/*{doc.id}*/ doc.data()['t'] ;
               console.log(doc.data()['t']); 
                console.log(typeof(doc.data()['t']));
                timesOfPage.push(doc.data()['t']);  });
     console.log(timesOfPage) ;           
     console.log ("***end******* ttt ***end******** ")
    //ttt.get().then((val) =>{ val.forEach((elem)=>{console.log(elem.data())}) });
    console.log("from ....@ 2....getPageTimeFire(page)....@ 2...."); 
      pageTimesCollection.get()
      .then((querrySnapshot) =>{
        querrySnapshot.forEach((time) =>{
          console.log("from .....getPageTimeFire(page)........");
           console.log(time.data);
           console.log("from ....@ 2....getPageTimeFire(page)....@ 2....");
        }
      );
      }); 
      console.log('the %%%% typeof timeOfPage')  ;
      console.log(typeof(timesOfPage))
      console.log(typeof(Object.entries(timesOfPage)));
      console.log(typeof(Object.values(timesOfPage)));
      timesOfPage.reduce((a,b)=>(a+b))/timesOfPage.length;
      return timesOfPage; 
        
  }
  async getPageAverageFire(page) {
    const timesOfPage = [];
    const ttt= await this.firestoreDb.collection(page).get();
    ttt.docs.map((doc) => {/*{doc.id}*/ doc.data()['t'] ;
               console.log(doc.data()['t']); 
                console.log(typeof(doc.data()['t']));
                timesOfPage.push(doc.data()['t']);  });
         console.log("!!!!!!The average is ......!!!!!!");
         console.log((timesOfPage.reduce((a,b)=>(a+b))/timesOfPage.length).toFixed(2) );      
        return (timesOfPage.reduce((a,b)=>(a+b))/timesOfPage.length).toFixed(2);        
      // return this.getPageTimeFire(page).reduce((a,b)=>(a+b))/this.getPageTimeFire(page).lenght
   
   }
 }
//
// const songs=[];
            
            // const songsCollection = firestoreDb.collection(`users/${user.uid}/songs`);
            // songsCollection.get()
            // .then((querySnapshot) => {
            //   querySnapshot.forEach((doc)=>{
            //       console.log('Song/sound document:', doc.data());
            //       const songData = { ...doc.data(),id:doc.id};
            //       //songs.push(doc.data());
            //       songs.push(songData);
            //       //console.log('Song/sound document:', doc.data());
            //       //console.log(JSON.stringify( songs));
            //   });
            //   console.log("From firebase repo");
            //   console.dir(songs);
            //   resolve(songs);
            //   console.log("From firebase repo");
            //   console.dir(songs);
            // });


   //
  //  getAvePageTimeFire(page) {
  //    let timeArray = this.
  //    //this.getPageTimeFire(page);
  //      JSON.stringify(timeArray);
  //  } 
  

// }


// @Injectable({
//   providedIn: 'root',
// })
// export class DataService {
//   professorCollection: AngularFirestoreCollection<Professor>;
//   professors: Observable<Professor[]>;

//   constructor(
//     private db: AngularFirestore,
//     private http: HttpClient,
//     private authService: AuthService,
//     private afAuth: AngularFireAuth
//   ) {
//     this.afAuth.currentUser.then((user) => {
//       this.professorCollection = this.db.collection<Professor>(
//         'professors',
//         (ref) => ref.where('trackedBy', 'array-contains', user.uid)
//       );
//       this.professors = this.professorCollection.valueChanges();

//       this.professors.forEach((professor) => {
//         console.log(professor);
//       });
//     });
//   }

//   getProfessors(userID): Observable<Professor[]> {
//     return this.db
//       .collection<Professor>('professors', (ref) =>
//         ref.where('trackedBy', 'array-contains', userID)
//       )
//       .valueChanges()
//       .pipe(
//         map((professors) => {
//           return professors.sort((profA, profB) => {
//             return profA.name > profB.name ? 1 : -1;
//           });
//         })
//       );
//   }

//   async getCurrentUserUID() {
//     return (await this.afAuth.currentUser).uid;
//   }

//   getClasses(professorId: string): Observable<ClassData[]> {
//     return this.db
//       .collection('professors')
//       .doc(professorId)
//       .collection<ClassData>('classes')
//       .valueChanges();
//   }

//   getProfessorDetails(professorId: string): Observable<Professor> {
//     return this.db
//       .collection('professors')
//       .doc<Professor>(professorId)
//       .valueChanges();
//   }

//   addProfessorData(professorName: string): Promise<string> {
//     return new Promise<string>(async (resolve, reject) => {
//       const url =
//         'https://us-central1-gradedistributionappf20.cloudfunctions.net/GetGPA';

//       this.afAuth.currentUser.then((user) => {
//         if (user) {
//           const data = {
//             prof: professorName,
//             user_id: user.uid,
//           };

//           this.http.post<AddProfessorDataResponse>(url, data).subscribe(
//             (res) => {
//               resolve(
//                 `Added ${res.classesAdded} classes for ${this.prettifyName(
//                   professorName
//                 )}`
//               );
//             },
//             () => {
//               reject(
//                 `An error occured while adding classes for ${this.prettifyName(
//                   professorName
//                 )}`
//               );
//             }
//           );
//         } else {
//           reject('Unable to Authenticate');
//         }
//       });
//     });
//   }

//   getClassDetails(professorId: string, classId: string): Observable<ClassData> {
//     return this.db
//       .collection('professors')
//       .doc<Professor>(professorId)
//       .collection('classes')
//       .doc<ClassData>(classId)
//       .valueChanges();
//   }
//   prettifyName(name: string) {
//     const parts = name.split(',');
//     if (parts.length === 1) {
//       return parts[0];
//     }
//     if (parts.length === 2) {
//       return parts[0] + ', ' + parts[1];
//     }

//     let prettifiedName = parts[0] + ',';

//     for (let i = 1; i < parts.length; i++) {
//       prettifiedName += ' ' + parts[i];
//     }
//     return prettifiedName;
//   }
// }
