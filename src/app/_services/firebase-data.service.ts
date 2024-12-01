import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { CV }  from '../_models/CV' ;
@Injectable({
  providedIn: 'root'
})
export class FirebaseDataService {
  constructor(private db: AngularFireDatabase) {}

  // Fetch data from a specified path
  getData(path: string): Observable<CV> {
    return this.db.object(path).valueChanges() as Observable<CV> ;
  }

}