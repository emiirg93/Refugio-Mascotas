import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-inicio",
  templateUrl: "./inicio.component.html",
  styleUrls: ["./inicio.component.css"]
})
export class InicioComponent implements OnInit {
  variable: boolean = false;

  constructor() {}

  cambiarEstado() {
    if(this.variable == false){
      this.variable = true;
    }else{
      this.variable = false;
    }
  }

  ngOnInit() {}
}
