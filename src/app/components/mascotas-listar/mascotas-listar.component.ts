import { Component, OnInit } from '@angular/core';
import { MascotasService } from 'src/app/services/mascotas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mascotas-listar',
  templateUrl: './mascotas-listar.component.html',
  styleUrls: ['./mascotas-listar.component.css']
})
export class MascotasListarComponent implements OnInit {

  mascotas:Array<Mascota>=[];
  
  constructor(private mascotasService:MascotasService , private router:Router) { }

  eliminar(id:number){
    this.mascotasService.deleteMascota(id)
    .subscribe(data => {
      this.mascotasService.getMascotas().subscribe(info => this.mascotas = info["mascotas"]);
    });
  }

  ngOnInit() {
    this.mascotasService.getMascotas().subscribe((data)=>{
      this.mascotas= data["mascotas"];
    })
  }

}

export interface Mascota{
  id:number,
  nombre:string,
  tipo:string,
  edad:number,
  descripcion:string
}
