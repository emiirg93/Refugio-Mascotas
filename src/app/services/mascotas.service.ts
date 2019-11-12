import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Mascota } from "../components/mascotas-listar/mascotas-listar.component"

@Injectable({
  providedIn: "root"
})
export class MascotasService {

  baseUrl:String = "http://localhost:8090/mascotas";

  public getMascotas() {
    return this.httpClient.get<Array<Mascota>>(`${this.baseUrl}`);
  }
  
  constructor(private httpClient: HttpClient) {}

  
}


