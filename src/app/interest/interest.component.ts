import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.css']
})
export class InterestComponent implements OnInit {
  Gustos : Array<any> = [] ;
  constructor() { }

  ngOnInit(): void {

    let Interes1 = {
      Nombre_gusto: "Videojuegos",
      Descripcion_gusto: "Soy un un gran aficionado a los videojuegos desde que tengo memoria.",
      Tiempo_gusto: "Me gustan los videojuegos desde que tengo "+4+" años."
      };

      let Interes2= {
        Nombre_gusto: "Anime y caricaturas",
        Descripcion_gusto: "Me encanta ver el formato de la animacion por que me parece una gran forma de contar historias y plasmar ideas.",
        Tiempo_gusto: "Me gusta ver caricaturas  desde que tengo "+6+" años."
        };

        let Interes3= {
          Nombre_gusto: "Lucha libre y MMA",
          Descripcion_gusto: "Me parecen deportes divertidos de ver y de practicar asi como tambien pueden generar una gran pasion y competitividad.",
          Tiempo_gusto: "Me gustan ver estos deportes desde que tengo "+8+" años."
          };

          let Interes4= {
            Nombre_gusto: "Comics",
            Descripcion_gusto: "Me gusta leer pero el coplementarlo con imagenes aporta mucho a la transmision de ideas.",
            Tiempo_gusto: "Me leer comics desde que tengo "+7+" años."
            };

        this.Gustos.push(Interes1);
        this.Gustos.push(Interes2);
        this.Gustos.push(Interes3);
        this.Gustos.push(Interes4);
  }

}
