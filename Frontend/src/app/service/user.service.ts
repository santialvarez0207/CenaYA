import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user'; 
import { Temporal } from '../model/temporal';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/api/user'; // Asegúrate de que la URL sea la correcta para tu API de usuarios

  constructor(private http: HttpClient) {}

  authenticate(email: string, password: string) {
    return this.http.get<Temporal>(this.apiUrl + '/check', {
      params: { email, password }
    });
  }

  createUser(user: User) {
    return this.http.post<boolean>(this.apiUrl, user);
  }

  getUser(id: string) {
    return this.http.get<User>(this.apiUrl + `/${id}`);
  }

  updateUser(user: User) {
    return this.http.put(this.apiUrl + `/${user._id}`, user);
  }
}
