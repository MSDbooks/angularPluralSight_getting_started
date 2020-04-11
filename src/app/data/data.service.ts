import { Injectable } from '@angular/core';
import { UserSettings } from './user-settings';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public postUserSettingsForm(userSettings: UserSettings): Observable<any> {

    return this.http.post('https://putsreq.com/1hIQIrIukhkFmakgZeG8', userSettings);
  //  return of(userSettings);

  }

  public postII(userSettings: UserSettings){
    console.log(userSettings);
  }
}
