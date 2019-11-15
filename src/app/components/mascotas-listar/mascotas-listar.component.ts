import { Component, OnInit } from "@angular/core";
import { MascotasService } from "src/app/services/mascotas.service";
import { Router } from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: "app-mascotas-listar",
  templateUrl: "./mascotas-listar.component.html",
  styleUrls: ["./mascotas-listar.component.css"]
})
export class MascotasListarComponent implements OnInit {
  mascotas: Array<Mascota> = [];
  loading: boolean;
  variable: boolean = false;

  constructor(
    private mascotasService: MascotasService,
    private router: Router
  ) {}

  eliminar(id: number) {
    Swal.fire({
      title: "Esta seguro de eliminar esta informacion?",
      text:
        "Una vez eliminado, no va a poder contar con los datos de la mascota",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0077b8",
      cancelButtonColor: "#e02200",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Confirmar",
      width: 400
    }).then(result => {
      if (result.value) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Eliminado",
          showConfirmButton: false,
          timer: 1500
        });
        this.mascotasService.deleteMascota(id).subscribe(data => {
          this.mascotasService
            .getMascotas()
            .subscribe(info => (this.mascotas = info["mascotas"]));
        });
      }
    });
  }

  ngOnInit() {
    this.loading = true;
    this.mascotasService.getMascotas().subscribe(data => {
      this.mascotas = data["mascotas"];
      this.loading = false;
    });
  }
}

export interface Mascota {
  id: number;
  nombre: string;
  tipo: string;
  edad: number;
  descripcion: string;
}
