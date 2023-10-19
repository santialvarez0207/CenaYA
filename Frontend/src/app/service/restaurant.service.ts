import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Restaurant } from '../model/restaurant'; 

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private apiUrl = 'http://localhost:3000/api/restaurant'; // Asegúrate de que la URL sea la correcta para tu API de restaurantes

  constructor(private http: HttpClient) {}

  authenticate(email: string, password: string) {
    const params = new HttpParams()
      .set('email', email)
      .set('password', password);
    console.log(params);
    return this.http.get<Restaurant>(this.apiUrl + '/check', { params });
  }

  createRestaurant(restaurant: Restaurant) {
    return this.http.post<boolean>(this.apiUrl, restaurant);
  }

  getRestaurant(id: string) {
    return this.http.get<Restaurant>(this.apiUrl + `/${id}`);
  }
  getRestaurants() {
    return this.http.get<Restaurant[]>(this.apiUrl);
  }

  updateRestaurant(restaurant: Restaurant) {
    return this.http.put(this.apiUrl + `/${restaurant._id}`, restaurant);
  }
}