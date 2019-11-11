import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './components/inicio/inicio.component';
import { MascotasListarComponent } from './components/mascotas-listar/mascotas-listar.component';
import { HttpClientModule } from '@angular/common/http';
import { MascotasService } from './services/mascotas.service';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MascotasListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [MascotasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
