import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

const authUrl= `${environment.baseUrl}/profile`;

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  loadProfileById(id: number):Observable<User>{
    return this.http.get<User>(authUrl+id);
  }

  updateProfile(firstName:string, lastName:string, email:string):Observable<User>{
    const capsule={firstName:firstName, lastName:lastName, email:email}
    return this.http.put<User>(`${authUrl}/update`, capsule);
  }
}