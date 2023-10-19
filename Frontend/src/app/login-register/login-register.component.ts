import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  
   const loginlink=document.querySelector('.login-link')
     const loginsec=document.querySelector('.login-section')
    const register=document.querySelector('.Register-link')
    register?.addEventListener('click',()=>{
    loginsec?.classList.add('active')
   })
    loginlink?.addEventListener('click',()=>{
    loginsec?.classList.remove('active')
   })



    
  }
  
}
