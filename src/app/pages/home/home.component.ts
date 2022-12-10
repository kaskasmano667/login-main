import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HackModel } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
import {  } from "module";
import Swal from 'sweetalert2';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  hacks: HackModel[] = [];
  cargando = false;

  constructor(
    private auth:AuthService,
    private router:Router,
    private hackServices: FirebaseService
  ) { }

 

  salir(){
        this.auth.logout();
        this.router.navigateByUrl('/login')
  }

  ngOnInit() {

    this.cargando = true;
    this.hackServices.getHacks()
      .subscribe( (resp:any) => {
        this.hacks = resp;
        this.cargando = false;
      });

  }

  borrarHeroe( hack: HackModel, i: number ) {

    Swal.fire({
      title: '¿Está seguro?',
      text: `Está seguro que desea borrar a ${ hack.nombre }`,
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then( resp => {

      if ( resp.value ) {
        this.hacks.splice(i, 1);
        this.hackServices.borrarHack( hack.id ).subscribe();
      }

    });



  }

}
