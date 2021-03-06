import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { InicioComponent } from "./components/inicio/inicio.component";
import { MascotasListarComponent } from "./components/mascotas-listar/mascotas-listar.component";
import { MascotasAgregarComponent } from "./components/mascotas-agregar/mascotas-agregar.component";
import { MascotaEditarComponent } from './components/mascota-editar/mascota-editar.component';

const routes: Routes = [
  { path: "", redirectTo: "/inicio", pathMatch: "full" },
  { path: "inicio", component: InicioComponent },
  { path: "mascotas", component: MascotasListarComponent },
  { path: "agregar", component: MascotasAgregarComponent },
  { path: "editar/:id", component: MascotaEditarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
