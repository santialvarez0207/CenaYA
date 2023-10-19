import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend';
  name:String = "";
  user:string = "";

  idUser:string = "";
  idRestaurant:string = "";

  constructor(){

  }

  ngOnInit(): void {
      this.CheckUser()
      console.log(this.idUser, "hola")
      this.CheckRestaurant()
      
  }

  CheckUser(){
    let x = localStorage.getItem("User");

    if(x!=null){
      let User = JSON.parse(x);
      this.idUser = User.id;
      if(User){
        this.name = User.name;
        let element = document.getElementById("User");
        element!.style.display = "flex";
        let elementLogin = document.getElementById("Log-in");
        elementLogin!.style.display="none";
      }
    }
  }
  CheckRestaurant(){
    let x = localStorage.getItem("Restaurant");

    if(x!=null){
      let Restaurant = JSON.parse(x);
      this.idRestaurant = Restaurant.id;
      if(Restaurant){
        this.user = Restaurant.name;
        let element = document.getElementById("Restaurant");
        element!.style.display = "flex";
        let elementLogin = document.getElementById("Log-in");
        elementLogin!.style.display="none";
      }
    }
  }


  CloseSession(){
    localStorage.removeItem("User");
    localStorage.removeItem("Restaurant");
    window.location.replace("http://localhost:4200/home");
  }

}