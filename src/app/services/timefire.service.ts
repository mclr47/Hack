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
@Injectable({
  providedIn: 'root'
})
export class TimefireService {
    timeArr :  Observable<any[]>;
    
     // this.items = firestore.collection('items').valueChanges();
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  constructor(private db: AngularFirestore){
     this.timeArr = db.collection('alltimes').stateChanges();
  }
   

  addTimeFire(t:number){
    const timeCollection = this.db.collection('alltimes').add(t)
      .then((docRef) => console.log('time spent id is : ', docRef.id))
      .catch((error) => console.error('there was an error writing time to the database : ', error));

    // firestoreDb.collection(`users/${user.uid}/songs`);
    // songsCollection.add(song)
    //     .then((docRef) => console.log('Song document Id: ',docRef.id))
    //     .catch((error) => console.error('There was an error while writing sound/song to the console' , error) );

  }
    //    
  

}


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
