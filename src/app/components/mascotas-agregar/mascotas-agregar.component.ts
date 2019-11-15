import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from "@angular/forms";
import { MascotasService } from 'src/app/services/mascotas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mascotas-agregar',
  templateUrl: './mascotas-agregar.component.html',
  styleUrls: ['./mascotas-agregar.component.css']
})
export class MascotasAgregarComponent implements OnInit {


  agregarMascota = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern("[a-zA-ZñÑ ]+")]],
    tipo: ['', [Validators.required, Validators.pattern("[a-zA-ZñÑ ]+")]],
    edad: ['', [Validators.required,Validators.pattern("^[0-9]$|^[0-9][0-9]$|^[0-9][0-9][0-9]$"), Validators.max(120),Validators.min(1)]],
    descripcion: ['', [Validators.required]]
  });


  constructor(private fb: FormBuilder, private mascotaServices: MascotasService, private router: Router) { }

  onSubmit() {
    this.mascotaServices
      .addMascota(this.agregarMascota.value)
      .subscribe(data => this.router.navigate(['/mascotas']));
  }

  reset($event){
    $event.preventDefault();
    this.agregarMascota.reset();
  }

  volver($event){
    $event.preventDefault();
    this.router.navigate(["/mascotas"]);
  }

  ngOnInit() {

  }

}
