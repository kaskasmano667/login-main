import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Hack_Interface } from '../../interfaces/hack-interface';

import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private auth:AuthService,
    private router:Router,
    private hackServices: FirebaseService) { }

  ngOnInit(): void {
    
  }
  termino:string ='';
  
  hayError:boolean = false;


  salir(){
    this.auth.logout();
    this.router.navigateByUrl('/login')
}

  subir(){

    this.router.navigateByUrl('/Hack/nuevo')
  }

  home(){

    this.router.navigateByUrl('home')
  }

  
}
