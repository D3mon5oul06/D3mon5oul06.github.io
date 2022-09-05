import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educacion : Array<any> = [] ;
  constructor() { }

  ngOnInit(): void {


  let escuela1 = {
    Nombre: "Escuela Primaria Nicolas Bravo",
    Ubicacion: "Coscomatepec, Ver",
    Promedio: "Promedio: "+9.0,
    Anios_estudio: "Añios de estudio: "+6
};

let escuela2 = {
  Nombre: "Escuela Secundaria Tecnica Agropecuaria No 39",
  Ubicacion: "Coscomatepec, Ver",
  Promedio: "Promedio: "+ 8.0,
  Anios_estudio: "Añios de estudio: "+3
};

let escuela3 = {
  Nombre: "Centro de Bachillerato Tecnologico Agropecuario No 99",
  Ubicacion: "Coscomatepec, Ver",
  Promedio: "Promedio: "+9.0,
  Anios_estudio: "Añios de estudio: "+3
};

let escuela4 = {
  Nombre: "Universidad Veracruzana",
  Ubicacion: "Ixtac, Ver.",
  Promedio: "Promedio: "+9,
  Anios_estudio: "Añios de estudio: "+4
};

this.educacion.push(escuela1);
this.educacion.push(escuela2);
this.educacion.push(escuela3);
this.educacion.push(escuela4);

}
}