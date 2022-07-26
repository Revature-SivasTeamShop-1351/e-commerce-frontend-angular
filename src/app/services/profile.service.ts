import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';



const profUrl= `${environment.baseUrl}/api/users`;

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http : HttpClient) { }


    //getUsers () : Observable<User[]> {
        //return this.http.get<User[]>(`${profUrl}/api/users`);
    //}

    getUser (id : any) : Observable<User> {
        return this.http.get<User>(`${profUrl}/${id}`);
    }

    updateUser (id : any, firstName : string, email : string, lastName : string) : Observable<User> {
      const profUser = {id:id, firstName: firstName, lastName: lastName, email:email}
        return this.http.put<User>(`${profUrl}/update/${id}`, profUser);
          
    }

}