import { Component, OnInit } from '@angular/core';
import { MascotasService } from 'src/app/services/mascotas.service';

@Component({
  selector: 'app-mascotas-listar',
  templateUrl: './mascotas-listar.component.html',
  styleUrls: ['./mascotas-listar.component.css']
})
export class MascotasListarComponent implements OnInit {

  mascotas:Array<Mascota>=[];

  constructor(private mascotasService:MascotasService) { }

  ngOnInit() {
    this.mascotasService.getMascotas().subscribe((data)=>{
      this.mascotas = data;
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
