import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {User} from '../model/user'
import {UserService} from '../service/user.service'
import { Temporal } from '../model/temporal';


@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {

  constructor(private userService:UserService) {  }

  ngOnInit(): void {
    this.CheckUser();
    const loginsec=document.querySelector('.login-section')
    const loginlink=document.querySelector('.login-link')
    const register=document.querySelector('.Register-link')
    register?.addEventListener('click',()=>{
    loginsec?.classList.add('active')
   })
    loginlink?.addEventListener('click',()=>{
    loginsec?.classList.remove('active')
   })
   

  }

  CheckUser(){
    let x = localStorage.getItem("User");
    let y = localStorage.getItem("Restaurant");
    if(x!=null || y!=null){
      window.location.replace("http://localhost:4200/home");
    }
  }

  formLogin = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,]),
  });

  formRegister = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required]),
    telefono: new FormControl('',[Validators.required]),
    nombre: new FormControl('',[Validators.required])
  });

  sendR():any{
      var new_user = new User();
        new_user.email= this.formRegister.value.email
        new_user.password= this.formRegister.value.password
        new_user.nombre= this.formRegister.value.nombre
        new_user.telefono= this.formRegister.value.telefono
      
      this.userService.createUser(new_user).subscribe(res => {
        if (res) {
          window.location.replace("http://localhost:4200/login");
          this.formRegister.reset()
        }else{
          window.alert("ya existe un usuario con este correo")
        }
      })
      
  }

  sendL():any{
    let email = this.formLogin.value.email
    let password = this.formLogin.value.password

    this.userService.authenticate(email, password).subscribe(res => {
      let usuarioTemporal = res as Temporal
      console.log(usuarioTemporal)
      if (usuarioTemporal) {
        localStorage.setItem('User', JSON.stringify(usuarioTemporal));
        window.location.replace("http://localhost:4200/home");
      }else{
        console.log("no existe el correo digitado");
      }
    })
    this.formLogin.reset()
  }



  
}
