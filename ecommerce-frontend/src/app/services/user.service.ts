import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../common/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl: string = 'http://localhost:8085/api/v1/users';

  constructor(private httpClient:HttpClient) { }

  getUserById(id:number):Observable<User>{
    //return this.httpClient.get<User>(this.apiUrl+'/'+id);
    return this.httpClient.get<User>(`${this.apiUrl}/${id}`);
  }

}
