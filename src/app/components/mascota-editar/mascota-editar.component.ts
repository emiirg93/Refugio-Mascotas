import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { MascotasService } from "src/app/services/mascotas.service";
import { Mascota } from "../mascotas-listar/mascotas-listar.component";

@Component({
  selector: "app-mascota-editar",
  templateUrl: "./mascota-editar.component.html",
  styleUrls: ["./mascota-editar.component.css"]
})
export class MascotaEditarComponent implements OnInit {

  mascota:Mascota;

  editarMascota = this.fb.group({
    id: [""],
    nombre: [
      "",
      [Validators.required, Validators.pattern("[a-zA-ZñÑ ]+")]
    ],
    tipo: [
      "",
      [Validators.required, Validators.pattern("[a-zA-ZñÑ ]+")]
    ],
    edad: [
      "",
      [
        Validators.required,
        Validators.pattern("^[0-9]$|^[0-9][0-9]$|^[0-9][0-9][0-9]$"),
        Validators.max(120),
        Validators.min(1)
      ]
    ],
    descripcion: ["", [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private mascotaServices: MascotasService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe(params => {
     this.mascotaServices.getMascota(params["id"])
     .subscribe(data =>{
       this.mascota = data ;
       this.editarMascota.setValue(this.mascota);
     });
    });
  }

  ngOnInit() {}

  volver($event) {
    $event.preventDefault();
    this.router.navigate(["/mascotas"]);
  }
  onSubmit() {
    this.mascotaServices.editMascota(this.editarMascota.value)
    .subscribe(data => this.router.navigate(['/mascotas']));
  }
}