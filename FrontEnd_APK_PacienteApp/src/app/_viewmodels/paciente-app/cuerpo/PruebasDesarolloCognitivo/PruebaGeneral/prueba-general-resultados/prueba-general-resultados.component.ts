import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-prueba-general-resultados',
  templateUrl: './prueba-general-resultados.component.html',
  styleUrls: ['./prueba-general-resultados.component.scss']
})
export class PruebaGeneralResultadosComponent implements OnInit {

  @Output() emiterEvent= new EventEmitter();
  enviarActividad2(){
    this.emiterEvent.emit();
  }
  constructor() { }
  puntajeActividad1:any=0;
  puntajeActividad2:any=0;
  puntajeActividad3:any=0;
  puntajeActividad4:any=0;
  puntajeActividad5:any=0;
  puntajeActividad6:any=0;
  puntajeActividad7:any=0;
  puntajeActividad8:any=0;
  puntajeActividad9:any=0;
  puntajeActividad10:any=0;
  puntajeActividad11:any=0;
  puntajeActividad12:any=0;
  puntajeActividad13:any=0;
  puntajeActividad14:any=0;
  puntajeActividad15:any=0;
  puntajeActividad16:any=0;

  pruebaGeneral:any;

  ngOnInit(): void {
    var prueba=localStorage.getItem('pruebaGeneralActual');
    if(prueba==null){
      prueba="null";
    }
    this.pruebaGeneral=JSON.parse(prueba);
    this.calificarActividad1();
    this.calificarActividad2();
    this.calificarActividad3();
    this.calificarActividad4();
    this.calificarActividad5();
    this.calificarActividad6();
    this.calificarActividad7();
    this.calificarActividad8();
    this.calificarActividad9();
    this.calificarActividad10();
    this.calificarActividad11();
    this.calificarActividad12();
    this.calificarActividad13();
    this.calificarActividad14();
    this.calificarActividad15();
    this.calificarActividad16();
    
  }
  calificarActividad1(){
    var actividad1=this.pruebaGeneral.actividad1;
    if(actividad1.edad!=""){
      this.puntajeActividad1++;
    }
    if(actividad1.fechaDeNacimiento!=""){
      this.puntajeActividad1++;
    }
    if(actividad1.nombreCompleto!=""){
      this.puntajeActividad1++;
    }
  }
  calificarActividad2(){
    var actividad=this.pruebaGeneral.actividad2;
    if(actividad.añoActual!=""){
      this.puntajeActividad2++;
    }
    if(actividad.departamentoActual!=""){
      this.puntajeActividad2++;
    }
    if(actividad.diaActual!=""){
      this.puntajeActividad2++;
    }
    if(actividad.mesActual!=""){
      this.puntajeActividad2++;
    }
  }
  calificarActividad3(){
    var actividad=this.pruebaGeneral.actividad3;
    if(actividad.p1_d1=="8"){
   
      if(actividad.p1_d2!="7"){

        if(actividad.p1_d3!="6"){
 
          if(actividad.p1_d4!="5"){

            if(actividad.p1_d5!="4"){
              this.puntajeActividad3++;
            }
          }
        }
      }
    }
   
    if(actividad.p2_d1=="8"){
   
      if(actividad.p2_d2!="7"){

        if(actividad.p2_d3!="6"){
 
          if(actividad.p2_d4!="5"){

            if(actividad.p2_d5!="4"){

              if(actividad.p2_d6!="3"){

                if(actividad.p2_d7!="2"){
                  this.puntajeActividad3++;
                }
              }
            }
          }
        }
      }
    }

    if(actividad.p3_d1=="8"){
   
      if(actividad.p3_d2!="7"){

        if(actividad.p3_d3!="6"){
 
          if(actividad.p3_d4!="5"){

            if(actividad.p3_d5!="4"){

              if(actividad.p3_d6!="3"){

                if(actividad.p3_d7!="2"){
                  this.puntajeActividad3++;
                }
              }
            }
          }
        }
      }
    }
    if(actividad.p4_d1=="6"){
   
      if(actividad.p4_d2!="5"){

        if(actividad.p4_d3!="4"){
 
          if(actividad.p4_d4!="3"){

            if(actividad.p4_d5!="2"){

              if(actividad.p4_d6!="1"){
                this.puntajeActividad3++;
              }
            }
          }
        }
      }
    }

    if(actividad.p5_d1=="8"){
   
      if(actividad.p5_d2!="7"){

        if(actividad.p5_d3!="6"){
 
          if(actividad.p5_d4!="5"){

            if(actividad.p5_d5!="4"){

              if(actividad.p5_d6!="3"){

                if(actividad.p5_d7!="2"){
                  this.puntajeActividad3++;
                }
              }
            }
          }
        }
      }
    }
    if(actividad.p6_d1=="9"){
   
      if(actividad.p6_d2!="8"){

        if(actividad.p6_d3!="7"){
 
          if(actividad.p6_d4!="6"){

            if(actividad.p6_d5!="5"){

              if(actividad.p6_d6!="4"){
                
                if(actividad.p6_d7!="3"){

                  if(actividad.p6_d8!="2"){

                    if(actividad.p6_d9!="1"){
                      this.puntajeActividad3++;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

  }
  calificarActividad4(){
    var actividad=this.pruebaGeneral.actividad4;
    actividad.forEach((element:any) => {
      this.puntajeActividad4++;
    });
  }
  calificarActividad5(){
    var actividad=this.pruebaGeneral.actividad5;
    if(actividad.mateRsp1==actividad.mateRsp1-7){
      this.puntajeActividad5++;
    }
    if(actividad.mateRsp2==actividad.mateRsp1-7){
      this.puntajeActividad5++;
    }
    if(actividad.mateRsp3==actividad.mateRsp2-7){
      this.puntajeActividad5++;
    }
    if(actividad.mateRsp4==actividad.mateRsp3-7){
      this.puntajeActividad5++;
    }
    if(actividad.mateRsp5==actividad.mateRsp4-7){
      this.puntajeActividad5++;
    }
  }
  calificarActividad6(){
    var actividad=this.pruebaGeneral.actividad6;
    if(actividad==["Gato","Pera","mano","fresa","vaca","codo"]){
      this.puntajeActividad6++;
    }
  }
  calificarActividad7(){
    var actividad=this.pruebaGeneral.actividad7;
    if(actividad){
      this.puntajeActividad7++;
    }
  }
  calificarActividad8(){
    var actividad=this.pruebaGeneral.actividad8;
    if(actividad.Guitarra!=""){
      this.puntajeActividad8++;
    }
    if(actividad.Trompeta!=""){
      this.puntajeActividad8++;
    }
    if(actividad.Dedo!=""){
      this.puntajeActividad8++;
    }
    if(actividad.Serpiente!=""){
      this.puntajeActividad8++;
    }
    if(actividad.Reloj!=""){
      this.puntajeActividad8++;
    }
    if(actividad.Bicicleta!=""){
      this.puntajeActividad8++;
    }
    if(actividad.Llave!=""){
      this.puntajeActividad8++;
    }
    if(actividad.Chivo!=""){
      this.puntajeActividad8++;
    }
  }
  calificarActividad9(){
    var actividad=this.pruebaGeneral.actividad9;
    if(actividad.Guitarra!=""){
      this.puntajeActividad9++;
    }
    if(actividad.Trompeta!=""){
      this.puntajeActividad9++;
    }
    if(actividad.Dedo!=""){
      this.puntajeActividad9++;
    }
    if(actividad.Serpiente!=""){
      this.puntajeActividad9++;
    }
    if(actividad.Reloj!=""){
      this.puntajeActividad9++;
    }
    if(actividad.Bicicleta!=""){
      this.puntajeActividad9++;
    }
    if(actividad.Llave!=""){
      this.puntajeActividad9++;
    }
    if(actividad.Chivo!=""){
      this.puntajeActividad9++;
    }
  }
  calificarActividad10(){
    var actividad=this.pruebaGeneral.actividad10;
    if(actividad.premisa1=="Sol"){
      this.puntajeActividad10++;
    }
    if(actividad.premisa2=="Ventana"){
      this.puntajeActividad10++;
    }
    if(actividad.premisa3=="El niño llora"){
      this.puntajeActividad10++;
    }
    if(actividad.premisa4=="El hombre camina lentamente por la calle"){
      this.puntajeActividad10++;
    }
  }
  calificarActividad11(){
    var actividad=this.pruebaGeneral.actividad11;
    if(actividad.campo1!=""){
      this.puntajeActividad11++;
    }
    if(actividad.campo2!=""){
      this.puntajeActividad11++;
    }
    if(actividad.campo3!=""){
      this.puntajeActividad11++;
    }
    if(actividad.campo4!=""){
      this.puntajeActividad11++;
    }
    if(actividad.campo5!=""){
      this.puntajeActividad11++;
    }
    if(actividad.campo6!=""){
      this.puntajeActividad11++;
    }
    if(actividad.campo7!=""){
      this.puntajeActividad11++;
    }
    if(actividad.campo8!=""){
      this.puntajeActividad11++;
    }
    if(actividad.campo9!=""){
      this.puntajeActividad11++;
    }
    if(actividad.campo10!=""){
      this.puntajeActividad11++;
    }
    if(actividad.campo11!=""){
      this.puntajeActividad11++;
    }
    if(actividad.campo12!=""){
      this.puntajeActividad11++;
    }
    if(actividad.campo13!=""){
      this.puntajeActividad11++;
    }
    if(actividad.campo14!=""){
      this.puntajeActividad11++;
    }
    if(actividad.campo15!=""){
      this.puntajeActividad11++;
    }
    if(actividad.campo16!=""){
      this.puntajeActividad11++;
    }
    
  }
  calificarActividad12(){
    var actividad=this.pruebaGeneral.actividad12;
    if(actividad.pregunta1=="si"){
      this.puntajeActividad12++;
    }
    if(actividad.pregunta2=="si"){
      this.puntajeActividad12++;
    }
    if(actividad.pregunta3=="si"){
      this.puntajeActividad12++;
    }
  }
  calificarActividad13(){
    var actividad=this.pruebaGeneral.actividad13;
    if(actividad.pregunta1==28){
      this.puntajeActividad13++;
    }
    if(actividad.pregunta2==7){
      this.puntajeActividad13++;
    }
    if(actividad.pregunta3==30){
      this.puntajeActividad13++;
    }
  }
  calificarActividad14(){
    var actividad=this.pruebaGeneral.actividad14;
    if(actividad.palabra1=="Gato"||actividad.palabra1=="Pera"||actividad.palabra1=="Mano"||actividad.palabra1=="Fresa"||actividad.palabra1=="Vaca"||actividad.palabra1=="Codo"){
      this.puntajeActividad14++;
    }
    if(actividad.palabra2=="Gato"||actividad.palabra2=="Pera"||actividad.palabra2=="Mano"||actividad.palabra2=="Fresa"||actividad.palabra2=="Vaca"||actividad.palabra2=="Codo"){
      this.puntajeActividad14++;
    }
    if(actividad.palabra3=="Gato"||actividad.palabra3=="Pera"||actividad.palabra3=="Mano"||actividad.palabra3=="Fresa"||actividad.palabra3=="Vaca"||actividad.palabra3=="Codo"){
      this.puntajeActividad14++;
    }
    if(actividad.palabra4=="Gato"||actividad.palabra4=="Pera"||actividad.palabra4=="Mano"||actividad.palabra4=="Fresa"||actividad.palabra4=="Vaca"||actividad.palabra4=="Codo"){
      this.puntajeActividad14++;
    }
    if(actividad.palabra5=="Gato"||actividad.palabra5=="Pera"||actividad.palabra5=="Mano"||actividad.palabra5=="Fresa"||actividad.palabra5=="Vaca"||actividad.palabra5=="Codo"){
      this.puntajeActividad14++;
    }
    if(actividad.palabra6=="Gato"||actividad.palabra6=="Pera"||actividad.palabra6=="Mano"||actividad.palabra6=="Fresa"||actividad.palabra6=="Vaca"||actividad.palabra6=="Codo"){
      this.puntajeActividad14++;
    }
  }
  calificarActividad15(){
    var actividad=this.pruebaGeneral.actividad15;
    if(actividad.partesCuerpo==["Mano","Codo"]){
      this.puntajeActividad15++;
    }
    if(actividad.frutas==["Pera","Fresa"]){
      this.puntajeActividad15++;
    }
    if(actividad.animales==["Vaca","Gato"]){
      this.puntajeActividad15++;
    }
  }
  calificarActividad16(){
    var actividad=this.pruebaGeneral.actividad16;
    actividad.forEach((element:any) => {
      this.puntajeActividad16++;
    });
  }
}
