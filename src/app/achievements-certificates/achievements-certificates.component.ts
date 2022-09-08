import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-achievements-certificates',
  templateUrl: './achievements-certificates.component.html',
  styleUrls: ['./achievements-certificates.component.css']
})
export class AchievementsCertificatesComponent implements OnInit {
  Achievements : Array<any> = [] ;
  constructor() { }

  ngOnInit(): void {

    let logro1 = {
      Nombre_logro: "Obtencion certificacion de tecnico agropecuario con enfoque a carpinteria.",
      Descripcion: "Mediante una certificacion de educacion tecnica de una duracion de 3 años se obtuvieron dichos conocimientos",
      Anos_experiencia: "Años de experiencia: "+3
    };

    let logro2 = {
      Nombre_logro: "Obtencion certificacion de tecnico agropecuario",
      Descripcion: "Mediante una certificacion de educacion tecnica desarrollando habilidades del campo agropecuario y procesamiento de alimentos se obtuvo una certificacion.",
      Anos_experiencia: "Años de experiencia: "+3
    };

    let logro3 = {
      Nombre_logro: "Obtencion certificacion de ingles basico",
      Descripcion: "Durante el periodo semestral 2020-2022 se acredito el dominio de ingles de nivel basico.",
      Anos_experiencia: "Años de experiencia: "+2
    };

    this.Achievements.push(logro1);
    this.Achievements.push(logro2);
    this.Achievements.push(logro3);
}
}
