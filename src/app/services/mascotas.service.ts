import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Mascota } from "../components/mascotas-listar/mascotas-listar.component";

@Injectable({
  providedIn: "root"
})
export class MascotasService {
  baseUrl: String = "http://localhost:8090/mascotas";

  public getMascotas() {
    return this.httpClient.get<Array<Mascota>>(`${this.baseUrl}`);
  }

  public addMascota(mascota: Mascota) {
    return this.httpClient.post<Mascota>(`${this.baseUrl}`, mascota);
  }

  public getMascota(id:number){
    return this.httpClient.get<Mascota>(`${this.baseUrl}/${id}`);
  }

  public editMascota(mascota: Mascota){
    return this.httpClient.put<Mascota>(`${this.baseUrl}`,mascota);
  }

  constructor(private httpClient: HttpClient) {}
}
