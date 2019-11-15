import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ClarityModule } from "@clr/angular";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { InicioComponent } from "./components/inicio/inicio.component";
import { MascotasListarComponent } from "./components/mascotas-listar/mascotas-listar.component";
import { HttpClientModule } from "@angular/common/http";
import { MascotasService } from "./services/mascotas.service";
import { MascotasAgregarComponent } from "./components/mascotas-agregar/mascotas-agregar.component";

import { ReactiveFormsModule } from "@angular/forms";
import { CapitalizadoPipe } from "./pipes/capitalizado.pipe";
import { MascotaEditarComponent } from "./components/mascota-editar/mascota-editar.component";
import { LoadingComponent } from './components/loading/loading.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MascotasListarComponent,
    MascotasAgregarComponent,
    CapitalizadoPipe,
    MascotaEditarComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SweetAlert2Module
  ],
  providers: [MascotasService],
  bootstrap: [AppComponent]
})
export class AppModule {}
