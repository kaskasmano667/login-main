import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HackModel } from 'src/app/models/usuario.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevohack',
  templateUrl: './nuevohack.component.html',
  styleUrls: ['./nuevohack.component.css']
})
export class NuevohackComponent implements OnInit {

  
    nuevoHack:HackModel = new HackModel();

    constructor(private hackServices: FirebaseService,
    private route: ActivatedRoute) { }

 
  ngOnInit() {

    const id = ''+this.route.snapshot.paramMap.get('id');

    if ( id !== 'nuevo' ) {

      this.hackServices.getHack( id )
      .subscribe( (resp: any) => {
        this.nuevoHack = resp;
        this.nuevoHack.id = id;
      });

    }

  }

  agregar( form: NgForm){
    console.log('se va agregar')
    //this.hackServices.crearHack( this.nuevoHack );

    if ( form.invalid ) {
      console.log('Formulario no válido');
      return;
    }

    Swal.fire({
      title: 'Espere',
      text: 'Guardando información',
      icon: 'info',
      allowOutsideClick: false,
      showConfirmButton:false,
    });
    Swal.showLoading(Swal.getDenyButton());


    let peticion: Observable<any>;

    if ( this.nuevoHack.id ) {
      peticion = this.hackServices.actualizarHack( this.nuevoHack );
    } else {
      peticion = this.hackServices.crearHack( this.nuevoHack );
     
    }

    peticion.subscribe( resp => {

      Swal.fire({
        title: this.nuevoHack.nombre,
        text: 'Se actualizó correctamente',
        icon: 'success'
      });

    });



  }

}
