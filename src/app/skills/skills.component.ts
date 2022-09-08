import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills : Array<any> = [] ;
  constructor() { }

  ngOnInit(): void {

    let habilidad1 = {
      Nombre_Habilidad: "Python",
      Descripcion: "Tengo conocimiento basico del uso de Python",
      Anos_experiencia: "Años de experiencia: "+1,
      PorcentajeDominio: "Porcentaje de dominio de dicha habilidad: "+70+"%"
    };

  let habilidad2 = {
    Nombre_Habilidad: "Java",
    Descripcion: "Tengo conocimiento basico del uso de Java",
    Anos_experiencia: "Años de experiencia: "+2,
    PorcentajeDominio: "Porcentaje de dominio de dicha habilidad: "+60+"%"
  };

  let habilidad3 = {
  Nombre_Habilidad: "JavaScript",
  Descripcion: "Tengo conocimiento basico del uso de JavaScript",
  Anos_experiencia: "Años de experiencia: "+1,
  PorcentajeDominio: "Porcentaje de dominio de dicha habilidad: "+70+"%"
  };

  let habilidad4 = {
  Nombre_Habilidad: "HTML",
  Descripcion: "Tengo conocimiento basico del uso de HTML",
  Anos_experiencia: "Años de experiencia: "+1,
  PorcentajeDominio: "Porcentaje de dominio de dicha habilidad: "+70+"%"
  };

  let habilidad5 = {
  Nombre_Habilidad: "CSS",
  Descripcion: "Tengo conocimiento basico del uso de CSS",
  Anos_experiencia: "Años de experiencia: "+1,
  PorcentajeDominio: "Porcentaje de dominio de dicha habilidad: "+70+"%"
  };

  let habilidad6 = {
  Nombre_Habilidad: "C",
  Descripcion: "Tengo conocimiento basico del uso de C",
  Anos_experiencia: "Años de experiencia: "+1,
  PorcentajeDominio: "Porcentaje de dominio de dicha habilidad: "+60+"%"
  };

    this.skills.push(habilidad1);
    this.skills.push(habilidad2);
    this.skills.push(habilidad3);
    this.skills.push(habilidad4);
    this.skills.push(habilidad5);
    this.skills.push(habilidad6);

}
}
