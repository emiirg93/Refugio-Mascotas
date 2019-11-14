import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Mascota } from "../components/mascotas-listar/mascotas-listar.component";

@Injectable({
  providedIn: "root"
})
export class MascotasService {
  baseUrl: String = "https://mascota-backend.herokuapp.com/api";

  public getMascotas() {
    return this.httpClient.get<Array<Mascota>>(`${this.baseUrl}/mascotas`);
  }

  public addMascota(mascota: Mascota) {
    return this.httpClient.post<Mascota>(`${this.baseUrl}/mascota/add`, mascota);
  }

  public getMascota(id:number){
    return this.httpClient.get<Mascota>(`${this.baseUrl}/mascota/${id}`);
  }

  public editMascota(mascota: Mascota){
    return this.httpClient.put<Mascota>(`${this.baseUrl}/mascota/edit`,mascota);
  }

  public deleteMascota(id: number){
    return this.httpClient.delete<Mascota>(`${this.baseUrl}/mascota/delete/${id}`);
  }

  constructor(private httpClient: HttpClient) {}
}
