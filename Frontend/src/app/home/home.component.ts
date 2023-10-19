import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../service/restaurant.service';
import { Restaurant } from '../model/restaurant';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Cards:Restaurant[] = [];

  constructor(private restaurantService:RestaurantService) { 
    this.restaurantService.getRestaurants().subscribe(( res ) => { this.Cards = res as Restaurant[]});
  }

  ngOnInit(): void {
    
  }

}
