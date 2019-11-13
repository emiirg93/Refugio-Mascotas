import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, FormBuilder } from "@angular/forms";
import { MascotasService } from 'src/app/services/mascotas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mascotas-agregar',
  templateUrl: './mascotas-agregar.component.html',
  styleUrls: ['./mascotas-agregar.component.css']
})
export class MascotasAgregarComponent implements OnInit {


  agregarMascota = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern("[a-zA-ZñÑ]+")]],
    tipo: ['', [Validators.required, Validators.pattern("[a-zA-ZñÑ]+")]],
    edad: ['', [Validators.required, this.validarEdad]],
    descripcion: ['', [Validators.required]]
  });


  constructor(private fb: FormBuilder, private mascotaServices: MascotasService, private router: Router) { }

  onSubmit() {
    this.mascotaServices
      .addMascota(this.agregarMascota.value)
      .subscribe(data => this.router.navigate(['/mascotas']));
  }

  validarEdad(control: AbstractControl): boolean {
    if (control.value < 0 && control.value > 120) {
      return true;
    }

    return null;
  }


  ngOnInit() {

  }

}
