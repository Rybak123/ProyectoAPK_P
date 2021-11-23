import { HttpClient } from '@angular/common/http';
import { Component, OnInit,Input } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { PacienteService } from 'src/app/_services/paciente-service';
import { ActualizarOperacionesPaciente } from 'src/app/_services/paciente_services/agenda_services/controlDeActividades/ActualizarOperacionesPaciente';
import { MisCancionesDAO } from 'src/app/_services/paciente_services/agenda_services/MisCancionesServices/MisCancionesDAO';
import { MisLibrosDAO } from 'src/app/_services/paciente_services/agenda_services/MisLibrosServices/MisLibrosDAO';
import { MisMetasPersonalesDAO } from 'src/app/_services/paciente_services/agenda_services/MisMetasPersonalesServices/MisMetasPersonalesDAO';
import { MisMetasDAO } from 'src/app/_services/paciente_services/agenda_services/MisMetasServices/MisMetasDAO';
@Component({
  selector: 'app-resumen-de-la-agenda-virtual',
  templateUrl: './resumen-de-la-agenda-virtual.component.html',
  styleUrls: ['./resumen-de-la-agenda-virtual.component.scss']
})
export class ResumenDeLaAgendaVirtualComponent implements OnInit {

  actualizarOperacionesPaciente:any
  controlDeAgua:any=[];
  controlDeAnimo:any=[];
  controlDeEnergia:any=[];
  controlDeEstudio:any=[];
  controlDeSueno:any=[];
  listaDeLibros:any=[];
  listaDeCanciones:any=[];
  listaDeMetasPersonales:any=[];
  listaMetasSociales:any=[];
  colorDeFondoGraficos="rgba(166, 58, 230,1)";
  controlDeAguaActualizado:any=[];
  controlDeAnimoActualizado:any=[];
  controlDeEnergiaActualizado:any=[];
  controlDeEstudioActualizado:any=[];
  controlDeSuenoActualizado:any=[];
  listaDeLibrosActualizado:any=[];
  listaDeCancionesActualizado:any=[];
  listaDeMetasPersonalesActualizado:any=[];
  listaMetasSocialesActualizado:any=[];
  @Input() idPaciente:any;

  constructor(private http:HttpClient,private pacienteService:PacienteService) {
   
   }
  respuestaPacinete:any;
  ngOnInit(): void {
    this.actualizarOperacionesPaciente=new ActualizarOperacionesPaciente(this.idPaciente,this.http);
 
    this.pacienteService.leerPaciente(this.idPaciente).subscribe((respuesta:any)=>{
      this.respuestaPacinete=respuesta;
    }).add((x:any)=>{
     
      var metasSocialesDao=new MisMetasPersonalesDAO(this.http,this.respuestaPacinete.carnetDeIdentidad);
      var metasPersonalesDao=new MisMetasDAO(this.http,this.respuestaPacinete.carnetDeIdentidad);
      var librosDao=new MisLibrosDAO(this.http,this.respuestaPacinete.carnetDeIdentidad)
      var cancionesDao=new MisCancionesDAO(this.http,this.respuestaPacinete.carnetDeIdentidad);

      metasSocialesDao.listarMetasPersonales()
          .then((respuesta:any) => {
            this.listaMetasSociales=respuesta;
            this.iniciarlizarDiagramaMisMetasPersonales(2020,1);
          }).catch((err:any) => {
            alert(err);
          });
      this.mesHTML = document.getElementById("mes");
      this.mesResult = this.mesHTML.options[this.mesHTML.selectedIndex].value;
      this.anioHTML = document.getElementById("anio");
      this.anioResult = this.anioHTML.options[this.anioHTML.selectedIndex].value;
      
      metasPersonalesDao.listarMetas()
      .then((respuesta:any) => {
        this.listaDeMetasPersonales=respuesta;
        this.iniciarlizarDiagramaMisMetasSociales(2020);
      }).catch((err:any) => {
        alert(err);
      });

      librosDao.listarLibros()
      .then((respuesta:any) => {
        this.iniciarlizarDiagramaMisLibros(2020);
        this.listaDeLibros=respuesta.libros;
      }).catch((err:any) => {
        alert(err);
      });
    
      cancionesDao.listarCanciones()
      .then((respuesta:any) => {
        console.log(respuesta.canciones);
        this.listaDeCanciones=respuesta.canciones;
        this.iniciarlizarDiagramaMisCanciones(2020);
      }).catch((err:any) => {
        console.log(err);
      });
      
      var controlDeAguaJson=this.actualizarOperacionesPaciente.obtenerControlDeAgua();
      controlDeAguaJson.then((control:any) => {
        console.log(control);
        this.controlDeAgua=(control);
        this.iniciarlizarDiagramaControlDeAgua(2020,1)
      }).catch((err:any) => {
      });
      var controlDeAnimo=this.actualizarOperacionesPaciente.obtenerControlDeAnimo();
      controlDeAnimo.then((control:any) => {
        console.log(control);
        this.controlDeAnimo=(control);
        this.iniciarlizarDiagramaControlDeAnimo(2020,1)
      }).catch((err:any) => {
      });
      var controlDeEnergia=this.actualizarOperacionesPaciente.obtenerControlDeEnergia();
      controlDeEnergia.then((control:any) => {
        console.log(control);
        this.controlDeEnergia=(control);
        this.iniciarlizarDiagramaControlDeEnergia(2020,1)
      }).catch((err:any) => {
      });
      var controlDeEstudio=this.actualizarOperacionesPaciente.obtenerControlDeEstudio();
      controlDeEstudio.then((control:any) => {
        console.log(control);
        this.controlDeEstudio=(control);
        this.iniciarlizarDiagramaControlDeEstudio(2020,1)
      }).catch((err:any) => {
      });
      var controlDeSueno=this.actualizarOperacionesPaciente.obtenerControlDeSueno();
      controlDeSueno.then((control:any) => {
        console.log(control);
        this.controlDeSueno=(control);
        this.iniciarlizarDiagramaControlDeSueno(2020,1)
      }).catch((err:any) => {
      });
    })    
  }
  mesHTML:any;
  mesResult:any;
  anioHTML:any;
  anioResult:any;

  cambiarMes(){
    this.mesResult = this.mesHTML.options[this.mesHTML.selectedIndex].value;
    this.anioResult = this.anioHTML.options[this.anioHTML.selectedIndex].value;
    this.iniciarlizarDiagramaControlDeAgua(this.anioResult,this.mesResult);
    this.iniciarlizarDiagramaControlDeSueno(this.anioResult,this.mesResult);
    this.iniciarlizarDiagramaControlDeAnimo(this.anioResult,this.mesResult);
    this.iniciarlizarDiagramaControlDeEnergia(this.anioResult,this.mesResult);
    this.iniciarlizarDiagramaControlDeEstudio(this.anioResult,this.mesResult);
    this.iniciarlizarDiagramaMisMetasPersonales(this.anioResult,this.mesResult);
  }  
  cambiarAnio(){
    this.mesResult = this.mesHTML.options[this.mesHTML.selectedIndex].value;
    this.anioResult = this.anioHTML.options[this.anioHTML.selectedIndex].value;
    this.iniciarlizarDiagramaControlDeAgua(this.anioResult,this.mesResult);
    this.iniciarlizarDiagramaControlDeSueno(this.anioResult,this.mesResult);
    this.iniciarlizarDiagramaControlDeAnimo(this.anioResult,this.mesResult);
    this.iniciarlizarDiagramaControlDeEnergia(this.anioResult,this.mesResult);
    this.iniciarlizarDiagramaControlDeEstudio(this.anioResult,this.mesResult);
    this.iniciarlizarDiagramaMisCanciones(this.anioResult);
    this.iniciarlizarDiagramaMisLibros(this.anioResult);
    this.iniciarlizarDiagramaMisMetasSociales(this.anioResult);
    this.iniciarlizarDiagramaMisMetasPersonales(this.anioResult,this.mesResult);
  }
  public controlDeAguaBarChartLabels: Label[] = [];
  public controlDeAguabarChartType: ChartType = 'bar';
  public controlDeAguabarChartLegend = true;
  public controlDeAguabarChartPlugins = [];
  public controlDeAguabarChartData: ChartDataSets[] = [];
  

  public iniciarlizarDiagramaControlDeAgua(anio:any,mes:any){
    var nuevoControlDeAgua:any=[];
    this.controlDeAgua.forEach((diaDeAgua:any) => {
      var arrayFecha=diaDeAgua.fecha.split('-');
      var anioStr=arrayFecha[0];
      var mesStr=arrayFecha[1];
      if(anioStr==anio){
        if(mesStr==mes){
          nuevoControlDeAgua.push(diaDeAgua)
        }
      }
    });
    this.controlDeAguaActualizado=nuevoControlDeAgua;
    let startDateArry: any[] = [];
    let blinkArry: any[] = [];
    startDateArry.push("8 vasos");
    startDateArry.push("7 vasos");
    startDateArry.push("5 vasos");
    startDateArry.push("3 vasos");
    var cantidad8vasos=0;
    var cantidad7vasos=0;
    var cantidad5vasos=0;
    var cantidad3vasos=0;
    nuevoControlDeAgua.forEach((element:any) => {
      switch(element.cantidadDeAgua){
        case "8 Vasos":
          cantidad8vasos++;
        break;
        case "7 Vasos":
          cantidad7vasos++;
        break;
        case "5 Vasos":
          cantidad5vasos++;
        break;
        case "3 Vasos":
          cantidad3vasos++;
        break;
      }
    });
    blinkArry.push(cantidad8vasos);
    blinkArry.push(cantidad7vasos);
    blinkArry.push(cantidad5vasos);
    blinkArry.push(cantidad3vasos);
    this.controlDeAguabarChartData = [{ data: blinkArry, label: 'Dias marcados durante el mes', backgroundColor: this.colorDeFondoGraficos, borderColor: this.colorDeFondoGraficos, hoverBackgroundColor: this.colorDeFondoGraficos, hoverBorderColor: this.colorDeFondoGraficos}];
    this.controlDeAguaBarChartLabels = [startDateArry];
    this.controlDeAguaBarChartLabels = startDateArry;
  }
  public controlDeSuenobarChartLabels: Label[] = [];
  public controlDeSuenobarChartType: ChartType = 'bar';
  public controlDeSuenobarChartLegend = true;
  public controlDeSuenobarChartPlugins = [];
  public controlDeSuenobarChartData: ChartDataSets[] = [];
  public iniciarlizarDiagramaControlDeSueno(anio:any,mes:any){
    var nuevoControlDeAgua:any=[];
    this.controlDeSueno.forEach((diaDeAgua:any) => {
      var arrayFecha=diaDeAgua.fecha.split('-');
      var anioStr=arrayFecha[0];
      var mesStr=arrayFecha[1];
      if(anioStr==anio){
        if(mesStr==mes){
          nuevoControlDeAgua.push(diaDeAgua)
        }
      }
    });
    this.controlDeSuenoActualizado=nuevoControlDeAgua;
    let startDateArry: any[] = [];
    let blinkArry: any[] = [];
    startDateArry.push("Mas de 10 horas");
    startDateArry.push("10 horas");
    startDateArry.push("9 horas");
    startDateArry.push("8 horas");
    startDateArry.push("7 horas");
    startDateArry.push("menos de 7 horas");
    var cantidadMasDe10Horas=0;
    var cantidad10Horas=0;
    var cantidad9Horas=0;
    var cantidad8Horas=0;
    var cantidad7Horas=0;
    var cantidadMenosDe7Horas=0;
    nuevoControlDeAgua.forEach((element:any) => {
      switch(element.horasDeSueno){
        case "mas de 10 horas":
          cantidadMasDe10Horas++;
        break;
        case "10 horas":
          cantidad10Horas++;
        break;
        case "9 horas":
          cantidad9Horas++;
        break;
        case "8 horas":
          cantidad8Horas++;
        break;
        case "7 horas":
          cantidad7Horas++;
        break;
        case "menos de 7 horas":
          cantidadMenosDe7Horas++;
        break;
      }
    });
    blinkArry.push(cantidadMasDe10Horas);
    blinkArry.push(cantidad10Horas);
    blinkArry.push(cantidad9Horas);
    blinkArry.push(cantidad8Horas);
    blinkArry.push(cantidad7Horas);
    blinkArry.push(cantidadMenosDe7Horas);
    this.controlDeSuenobarChartData = [{ data: blinkArry, label: 'Dias marcados durante el mes', backgroundColor: this.colorDeFondoGraficos, borderColor: this.colorDeFondoGraficos, hoverBackgroundColor: this.colorDeFondoGraficos, hoverBorderColor: this.colorDeFondoGraficos}];
    this.controlDeSuenobarChartLabels = [startDateArry];
    this.controlDeSuenobarChartLabels = startDateArry;
  }
  public controlDeAnimobarChartLabels: Label[] = [];
  public controlDeAnimobarChartType: ChartType = 'bar';
  public controlDeAnimobarChartLegend = true;
  public controlDeAnimobarChartPlugins = [];
  public controlDeAnimobarChartData: ChartDataSets[] = [];
  public iniciarlizarDiagramaControlDeAnimo(anio:any,mes:any){
    var nuevoControlDeAgua:any=[];
    this.controlDeAnimo.forEach((diaDeAgua:any) => {
      var arrayFecha=diaDeAgua.fecha.split('-');
      var anioStr=arrayFecha[0];
      var mesStr=arrayFecha[1];
      if(anioStr==anio){
        if(mesStr==mes){
          nuevoControlDeAgua.push(diaDeAgua)
        }
      }
    });
    this.controlDeAnimoActualizado=nuevoControlDeAgua;
    let startDateArry: any[] = [];
    let blinkArry: any[] = [];
    startDateArry.push("Emocionada");
    startDateArry.push("Triste");
    startDateArry.push("Productiva");
    startDateArry.push("Feliz");
    startDateArry.push("Cansada");
    startDateArry.push("Enojada");
    startDateArry.push("Ansiosa");
    startDateArry.push("Meeeeh");
    var cantidadEmocionada=0;
    var cantidadTristes=0;
    var cantidadProductiva=0;
    var cantidadCansada=0;
    var cantidadEnojada=0;
    var cantidadFeliz=0;
    var cantidadAnsiosa=0;
    var cantidadMeeeeh=0;
    console.log("asdasdasdasd");
    console.log(nuevoControlDeAgua);
    nuevoControlDeAgua.forEach((element:any) => {
      switch(element.estadoDeAnimo){
        case "Emocionada":
          cantidadEmocionada++;
        break;
        case "Triste":
          cantidadTristes++;
        break;
        case "Productiva":
          cantidadProductiva++;
        break;
        case "Feliz":
          cantidadCansada++;
        break;
        case "Cansada":
          cantidadEnojada++;
        break;
        case "Enojada":
          cantidadFeliz++;
        break;
        case "Ansiosa":
          cantidadAnsiosa++;
        break;
        case "Meeeeh":
          cantidadMeeeeh++;
        break;
      }
    });
    blinkArry.push(cantidadEmocionada);
    blinkArry.push(cantidadTristes);
    blinkArry.push(cantidadProductiva);
    blinkArry.push(cantidadCansada);
    blinkArry.push(cantidadFeliz);
    blinkArry.push(cantidadEnojada);
    blinkArry.push(cantidadAnsiosa);
    blinkArry.push(cantidadMeeeeh);
    this.controlDeAnimobarChartData = [{ data: blinkArry, label: 'Dias marcados durante el mes', backgroundColor: this.colorDeFondoGraficos, borderColor: this.colorDeFondoGraficos, hoverBackgroundColor: this.colorDeFondoGraficos, hoverBorderColor: this.colorDeFondoGraficos}];
    this.controlDeAnimobarChartLabels = [startDateArry];
    this.controlDeAnimobarChartLabels = startDateArry;
  }
  public controlDeEnergiabarChartLabels: Label[] = [];
  public controlDeEnergiabarChartType: ChartType = 'bar';
  public controlDeEnergiabarChartLegend = true;
  public controlDeEnergiabarChartPlugins = [];
  public controlDeEnergiabarChartData: ChartDataSets[] = [];
  public iniciarlizarDiagramaControlDeEnergia(anio:any,mes:any){
    var nuevoControlDeAgua:any=[];
    this.controlDeEnergia.forEach((diaDeAgua:any) => {
      var arrayFecha=diaDeAgua.fecha.split('-');
      var anioStr=arrayFecha[0];
      var mesStr=arrayFecha[1];
      if(anioStr==anio){
        if(mesStr==mes){
          nuevoControlDeAgua.push(diaDeAgua)
        }
      }
    });
    this.controlDeEnergiaActualizado=nuevoControlDeAgua;
    let startDateArry: any[] = [];
    let blinkArry: any[] = [];
    startDateArry.push("100%");
    startDateArry.push("75%");
    startDateArry.push("50%");
    startDateArry.push("25%");
    startDateArry.push("0%");

    var cantidad100=0;
    var cantidad75=0;
    var cantidad50=0;
    var cantidad25=0;
    var cantidad0=0;
    nuevoControlDeAgua.forEach((element:any) => {
      switch(element.porcentajeDeEnergia){
        case "100%":
          cantidad100++;
        break;
        case "75%":
          cantidad75++;
        break;
        case "50%":
          cantidad50++;
        break;
        case "25%":
          cantidad25++;
        break;
        case "0%":
          cantidad0++;
        break;
      }
    });
    blinkArry.push(cantidad100);
    blinkArry.push(cantidad75);
    blinkArry.push(cantidad50);
    blinkArry.push(cantidad25);
    blinkArry.push(cantidad0);
    this.controlDeEnergiabarChartData = [{ data: blinkArry, label: 'Dias marcados durante el mes', backgroundColor: this.colorDeFondoGraficos, borderColor: this.colorDeFondoGraficos, hoverBackgroundColor: this.colorDeFondoGraficos, hoverBorderColor: this.colorDeFondoGraficos}];
    this.controlDeEnergiabarChartLabels = [startDateArry];
    this.controlDeEnergiabarChartLabels = startDateArry;
  }
  public controlDeEstudiobarChartLabels: Label[] = [];
  public controlDeEstudiobarChartType: ChartType = 'bar';
  public controlDeEstudiobarChartLegend = true;
  public controlDeEstudiobarChartPlugins = [];
  public controlDeEstudiobarChartData: ChartDataSets[] = [];
  public iniciarlizarDiagramaControlDeEstudio(anio:any,mes:any){
    
    var dia1:any=0;
    var dia2:any=0;
    var dia3:any=0;
    var dia4:any=0;;
    var dia5:any=0;
    var dia6:any=0;
    var dia7:any=0;
    var dia8:any=0;
    var dia9:any=0;
    var dia10:any=0;
    var dia11:any=0;
    var dia12:any=0;
    var dia13:any=0;
    var dia14:any=0;
    var dia15:any=0;
    var dia16:any=0;
    var dia17:any=0;
    var dia18:any=0;
    var dia19:any=0;
    var dia20:any=0;
    var dia21:any=0;
    var dia22:any=0;
    var dia23:any=0;
    var dia24:any=0;
    var dia25:any=0;
    var dia26:any=0;
    var dia27:any=0;
    var dia28:any=0;
    var dia29:any=0;
    var dia30:any=0;
    var dia31:any=0;
    console.log("Lista de libros");
    console.log(this.listaDeLibros);
    var nuevoControlDeAgua:any=[];
    this.controlDeEstudio.forEach((diaDeAgua:any) => {
      var arrayFecha=diaDeAgua.fecha.split('-');
      var anioStr=arrayFecha[0];
      var mesStr=arrayFecha[1];
      var diaStr=arrayFecha[2];
      
      if(anioStr==anio){
        if(mesStr==mes){
     
          switch(diaStr){
            case "1":
              var arrayDeMaterias=diaDeAgua.materiasEstudiadas;
              var horaDeTiempoTotal:any="00:00:00";;
              arrayDeMaterias.forEach((element:any) => {
                var cantidadDeTiempo=element.cantidadDeTiempo;
                
                this.timestrToSec(horaDeTiempoTotal)+this.timestrToSec(cantidadDeTiempo);
              });
              var tiempoTotalString=this.formatTime(horaDeTiempoTotal);
              console.log(tiempoTotalString);
              dia1=tiempoTotalString;
            break;
            case "2":
              var arrayDeMaterias=diaDeAgua.materiasEstudiadas;
              var horaDeTiempoTotal:any="00:00:00";;
              arrayDeMaterias.forEach((element:any) => {
                var cantidadDeTiempo=element.cantidadDeTiempo;
                horaDeTiempoTotal=this.formatTime(this.timestrToSec(horaDeTiempoTotal)+this.timestrToSec(cantidadDeTiempo));
              });
              var array = horaDeTiempoTotal.split(":");
              var seconds = (parseInt(array[0], 10) * 60 * 60) + (parseInt(array[1], 10) * 60) + parseInt(array[2], 10)
              dia2=seconds;
            break;
            case "3":
               var arrayDeMaterias=diaDeAgua.materiasEstudiadas;
              var horaDeTiempoTotal:any="00:00:00";;
              arrayDeMaterias.forEach((element:any) => {
                var cantidadDeTiempo=element.cantidadDeTiempo;
                horaDeTiempoTotal=this.formatTime(this.timestrToSec(horaDeTiempoTotal)+this.timestrToSec(cantidadDeTiempo));
              });
              var array = horaDeTiempoTotal.split(":");
              var seconds = (parseInt(array[0], 10) * 60 * 60) + (parseInt(array[1], 10) * 60) + parseInt(array[2], 10)
              dia3=seconds;
            break;
            case "4":
              var arrayDeMaterias=diaDeAgua.materiasEstudiadas;
              var horaDeTiempoTotal:any="00:00:00";;
              arrayDeMaterias.forEach((element:any) => {
                var cantidadDeTiempo=element.cantidadDeTiempo;
                horaDeTiempoTotal=this.formatTime(this.timestrToSec(horaDeTiempoTotal)+this.timestrToSec(cantidadDeTiempo));
              });
              var array = horaDeTiempoTotal.split(":");
              var seconds = (parseInt(array[0], 10) * 60 * 60) + (parseInt(array[1], 10) * 60) + parseInt(array[2], 10)
              dia4=seconds;
            break;
            case "5":
              var arrayDeMaterias=diaDeAgua.materiasEstudiadas;
              var horaDeTiempoTotal:any="00:00:00";;
              arrayDeMaterias.forEach((element:any) => {
                var cantidadDeTiempo=element.cantidadDeTiempo;
                horaDeTiempoTotal=this.formatTime(this.timestrToSec(horaDeTiempoTotal)+this.timestrToSec(cantidadDeTiempo));
              });
              var array = horaDeTiempoTotal.split(":");
              var seconds = (parseInt(array[0], 10) * 60 * 60) + (parseInt(array[1], 10) * 60) + parseInt(array[2], 10)
              dia5=seconds;
            break;
            case "6":
              var arrayDeMaterias=diaDeAgua.materiasEstudiadas;
              var horaDeTiempoTotal:any="00:00:00";;
              arrayDeMaterias.forEach((element:any) => {
                var cantidadDeTiempo=element.cantidadDeTiempo;
                horaDeTiempoTotal=this.formatTime(this.timestrToSec(horaDeTiempoTotal)+this.timestrToSec(cantidadDeTiempo));
              });
              var array = horaDeTiempoTotal.split(":");
              var seconds = (parseInt(array[0], 10) * 60 * 60) + (parseInt(array[1], 10) * 60) + parseInt(array[2], 10)
              dia6=seconds;
            break;
            case "7":
              var arrayDeMaterias=diaDeAgua.materiasEstudiadas;
              var horaDeTiempoTotal:any="00:00:00";;
              arrayDeMaterias.forEach((element:any) => {
                var cantidadDeTiempo=element.cantidadDeTiempo;
                horaDeTiempoTotal=this.formatTime(this.timestrToSec(horaDeTiempoTotal)+this.timestrToSec(cantidadDeTiempo));
              });
              var array = horaDeTiempoTotal.split(":");
              var seconds = (parseInt(array[0], 10) * 60 * 60) + (parseInt(array[1], 10) * 60) + parseInt(array[2], 10)
              dia7=seconds;
            break;
            case "8":
              var arrayDeMaterias=diaDeAgua.materiasEstudiadas;
              var horaDeTiempoTotal:any="00:00:00";;
              arrayDeMaterias.forEach((element:any) => {
                var cantidadDeTiempo=element.cantidadDeTiempo;
                horaDeTiempoTotal=this.formatTime(this.timestrToSec(horaDeTiempoTotal)+this.timestrToSec(cantidadDeTiempo));
              });
              var array = horaDeTiempoTotal.split(":");
              var seconds = (parseInt(array[0], 10) * 60 * 60) + (parseInt(array[1], 10) * 60) + parseInt(array[2], 10)
              dia8=seconds;
            break;
            case "9":
              var arrayDeMaterias=diaDeAgua.materiasEstudiadas;
              var horaDeTiempoTotal:any="00:00:00";;
              arrayDeMaterias.forEach((element:any) => {
                var cantidadDeTiempo=element.cantidadDeTiempo;
                horaDeTiempoTotal=this.formatTime(this.timestrToSec(horaDeTiempoTotal)+this.timestrToSec(cantidadDeTiempo));
              });
              var array = horaDeTiempoTotal.split(":");
              var seconds = (parseInt(array[0], 10) * 60 * 60) + (parseInt(array[1], 10) * 60) + parseInt(array[2], 10)
              dia9=seconds;
            break;
            case "10":
              var arrayDeMaterias=diaDeAgua.materiasEstudiadas;
              var horaDeTiempoTotal:any="00:00:00";;
              arrayDeMaterias.forEach((element:any) => {
                var cantidadDeTiempo=element.cantidadDeTiempo;
                horaDeTiempoTotal=this.formatTime(this.timestrToSec(horaDeTiempoTotal)+this.timestrToSec(cantidadDeTiempo));
              });
              var array = horaDeTiempoTotal.split(":");
              var seconds = (parseInt(array[0], 10) * 60 * 60) + (parseInt(array[1], 10) * 60) + parseInt(array[2], 10)
              dia10=seconds;
            break;
            case "11":
               var arrayDeMaterias=diaDeAgua.materiasEstudiadas;
              var horaDeTiempoTotal:any="00:00:00";;
              arrayDeMaterias.forEach((element:any) => {
                var cantidadDeTiempo=element.cantidadDeTiempo;
                horaDeTiempoTotal=this.formatTime(this.timestrToSec(horaDeTiempoTotal)+this.timestrToSec(cantidadDeTiempo));
              });
              var array = horaDeTiempoTotal.split(":");
              var seconds = (parseInt(array[0], 10) * 60 * 60) + (parseInt(array[1], 10) * 60) + parseInt(array[2], 10)
              dia11=seconds;
            break;
            case "12":
              var arrayDeMaterias=diaDeAgua.materiasEstudiadas;
              var horaDeTiempoTotal:any="00:00:00";;
              arrayDeMaterias.forEach((element:any) => {
                var cantidadDeTiempo=element.cantidadDeTiempo;
                horaDeTiempoTotal=this.formatTime(this.timestrToSec(horaDeTiempoTotal)+this.timestrToSec(cantidadDeTiempo));
              });
              var array = horaDeTiempoTotal.split(":");
              var seconds = (parseInt(array[0], 10) * 60 * 60) + (parseInt(array[1], 10) * 60) + parseInt(array[2], 10)
              dia12=seconds;
            break;
            case "13":
              var arrayDeMaterias=diaDeAgua.materiasEstudiadas;
              var horaDeTiempoTotal:any="00:00:00";;
              arrayDeMaterias.forEach((element:any) => {
                var cantidadDeTiempo=element.cantidadDeTiempo;
                horaDeTiempoTotal=this.formatTime(this.timestrToSec(horaDeTiempoTotal)+this.timestrToSec(cantidadDeTiempo));
              });
              var array = horaDeTiempoTotal.split(":");
              var seconds = (parseInt(array[0], 10) * 60 * 60) + (parseInt(array[1], 10) * 60) + parseInt(array[2], 10)
              dia13=seconds;
            break;
            case "14":
              var arrayDeMaterias=diaDeAgua.materiasEstudiadas;
              var horaDeTiempoTotal:any="00:00:00";;
              arrayDeMaterias.forEach((element:any) => {
                var cantidadDeTiempo=element.cantidadDeTiempo;
                horaDeTiempoTotal=this.formatTime(this.timestrToSec(horaDeTiempoTotal)+this.timestrToSec(cantidadDeTiempo));
              });
              var array = horaDeTiempoTotal.split(":");
              var seconds = (parseInt(array[0], 10) * 60 * 60) + (parseInt(array[1], 10) * 60) + parseInt(array[2], 10)
              dia14=seconds;
            break;
            case "15":
              var arrayDeMaterias=diaDeAgua.materiasEstudiadas;
              var horaDeTiempoTotal:any="00:00:00";;
              arrayDeMaterias.forEach((element:any) => {
                var cantidadDeTiempo=element.cantidadDeTiempo;
                horaDeTiempoTotal=this.formatTime(this.timestrToSec(horaDeTiempoTotal)+this.timestrToSec(cantidadDeTiempo));
              });
              var array = horaDeTiempoTotal.split(":");
              var seconds = (parseInt(array[0], 10) * 60 * 60) + (parseInt(array[1], 10) * 60) + parseInt(array[2], 10)
              dia15=seconds;
            break;
            case "16":
              var arrayDeMaterias=diaDeAgua.materiasEstudiadas;
              var horaDeTiempoTotal:any="00:00:00";;
              arrayDeMaterias.forEach((element:any) => {
                var cantidadDeTiempo=element.cantidadDeTiempo;
                horaDeTiempoTotal=this.formatTime(this.timestrToSec(horaDeTiempoTotal)+this.timestrToSec(cantidadDeTiempo));
              });
              var array = horaDeTiempoTotal.split(":");
              var seconds = (parseInt(array[0], 10) * 60 * 60) + (parseInt(array[1], 10) * 60) + parseInt(array[2], 10)
              dia16=seconds;
            break;
            case "17":

              var arrayDeMaterias=diaDeAgua.materiasEstudiadas;
              var horaDeTiempoTotal:any="00:00:00";;
              arrayDeMaterias.forEach((element:any) => {
                var cantidadDeTiempo=element.cantidadDeTiempo;
                horaDeTiempoTotal=this.formatTime(this.timestrToSec(horaDeTiempoTotal)+this.timestrToSec(cantidadDeTiempo));
              });
              var array = horaDeTiempoTotal.split(":");
              var seconds = (parseInt(array[0], 10) * 60 * 60) + (parseInt(array[1], 10) * 60) + parseInt(array[2], 10)
              dia17=seconds;
            break;
            case "18":
              var arrayDeMaterias=diaDeAgua.materiasEstudiadas;
              var horaDeTiempoTotal:any="00:00:00";;
              arrayDeMaterias.forEach((element:any) => {
                var cantidadDeTiempo=element.cantidadDeTiempo;
                horaDeTiempoTotal=this.formatTime(this.timestrToSec(horaDeTiempoTotal)+this.timestrToSec(cantidadDeTiempo));
              });
              var array = horaDeTiempoTotal.split(":");
              var seconds = (parseInt(array[0], 10) * 60 * 60) + (parseInt(array[1], 10) * 60) + parseInt(array[2], 10)
              dia18=seconds;
            break;
            case "19":
              var arrayDeMaterias=diaDeAgua.materiasEstudiadas;
              var horaDeTiempoTotal:any="00:00:00";;
              arrayDeMaterias.forEach((element:any) => {
                var cantidadDeTiempo=element.cantidadDeTiempo;
                horaDeTiempoTotal=this.formatTime(this.timestrToSec(horaDeTiempoTotal)+this.timestrToSec(cantidadDeTiempo));
              });
              var array = horaDeTiempoTotal.split(":");
              var seconds = (parseInt(array[0], 10) * 60 * 60) + (parseInt(array[1], 10) * 60) + parseInt(array[2], 10)
              dia19=seconds;
            break;
            case "20":
              var arrayDeMaterias=diaDeAgua.materiasEstudiadas;
              var horaDeTiempoTotal:any="00:00:00";;
              arrayDeMaterias.forEach((element:any) => {
                var cantidadDeTiempo=element.cantidadDeTiempo;
                horaDeTiempoTotal=this.formatTime(this.timestrToSec(horaDeTiempoTotal)+this.timestrToSec(cantidadDeTiempo));
              });
              var array = horaDeTiempoTotal.split(":");
              var seconds = (parseInt(array[0], 10) * 60 * 60) + (parseInt(array[1], 10) * 60) + parseInt(array[2], 10)
              dia20=seconds;
            break;
            case "21":
              var arrayDeMaterias=diaDeAgua.materiasEstudiadas;
              var horaDeTiempoTotal:any="00:00:00";;
              arrayDeMaterias.forEach((element:any) => {
                var cantidadDeTiempo=element.cantidadDeTiempo;
                horaDeTiempoTotal=this.formatTime(this.timestrToSec(horaDeTiempoTotal)+this.timestrToSec(cantidadDeTiempo));
              });
              var array = horaDeTiempoTotal.split(":");
              var seconds = (parseInt(array[0], 10) * 60 * 60) + (parseInt(array[1], 10) * 60) + parseInt(array[2], 10)
              dia21=seconds;
            break;
            case "22":
              var arrayDeMaterias=diaDeAgua.materiasEstudiadas;
              var horaDeTiempoTotal:any="00:00:00";;
              arrayDeMaterias.forEach((element:any) => {
                var cantidadDeTiempo=element.cantidadDeTiempo;
                horaDeTiempoTotal=this.formatTime(this.timestrToSec(horaDeTiempoTotal)+this.timestrToSec(cantidadDeTiempo));
              });
              var array = horaDeTiempoTotal.split(":");
              var seconds = (parseInt(array[0], 10) * 60 * 60) + (parseInt(array[1], 10) * 60) + parseInt(array[2], 10)
              dia22=seconds;
            break;
            case "23":
              var arrayDeMaterias=diaDeAgua.materiasEstudiadas;
              var horaDeTiempoTotal:any="00:00:00";;
              arrayDeMaterias.forEach((element:any) => {
                var cantidadDeTiempo=element.cantidadDeTiempo;
                horaDeTiempoTotal=this.formatTime(this.timestrToSec(horaDeTiempoTotal)+this.timestrToSec(cantidadDeTiempo));
              });
              var array = horaDeTiempoTotal.split(":");
              var seconds = (parseInt(array[0], 10) * 60 * 60) + (parseInt(array[1], 10) * 60) + parseInt(array[2], 10)
              dia23=seconds;
            break;
            case "24":
              var arrayDeMaterias=diaDeAgua.materiasEstudiadas;
              var horaDeTiempoTotal:any="00:00:00";;
              arrayDeMaterias.forEach((element:any) => {
                var cantidadDeTiempo=element.cantidadDeTiempo;
                horaDeTiempoTotal=this.formatTime(this.timestrToSec(horaDeTiempoTotal)+this.timestrToSec(cantidadDeTiempo));
              });
              var array = horaDeTiempoTotal.split(":");
              var seconds = (parseInt(array[0], 10) * 60 * 60) + (parseInt(array[1], 10) * 60) + parseInt(array[2], 10)
              dia24=seconds;
            break;
            case "25":
              var arrayDeMaterias=diaDeAgua.materiasEstudiadas;
              var horaDeTiempoTotal:any="00:00:00";;
              arrayDeMaterias.forEach((element:any) => {
                var cantidadDeTiempo=element.cantidadDeTiempo;
                horaDeTiempoTotal=this.formatTime(this.timestrToSec(horaDeTiempoTotal)+this.timestrToSec(cantidadDeTiempo));
              });
              var array = horaDeTiempoTotal.split(":");
              var seconds = (parseInt(array[0], 10) * 60 * 60) + (parseInt(array[1], 10) * 60) + parseInt(array[2], 10)
              dia25=seconds;
            break;
            case "26":
              var arrayDeMaterias=diaDeAgua.materiasEstudiadas;
              var horaDeTiempoTotal:any="00:00:00";;
              arrayDeMaterias.forEach((element:any) => {
                var cantidadDeTiempo=element.cantidadDeTiempo;
                horaDeTiempoTotal=this.formatTime(this.timestrToSec(horaDeTiempoTotal)+this.timestrToSec(cantidadDeTiempo));
              });
              var array = horaDeTiempoTotal.split(":");
              var seconds = (parseInt(array[0], 10) * 60 * 60) + (parseInt(array[1], 10) * 60) + parseInt(array[2], 10)
              dia26=seconds;
            break;
            case "27":
              var arrayDeMaterias=diaDeAgua.materiasEstudiadas;
              var horaDeTiempoTotal:any="00:00:00";;
              arrayDeMaterias.forEach((element:any) => {
                var cantidadDeTiempo=element.cantidadDeTiempo;
                horaDeTiempoTotal=this.formatTime(this.timestrToSec(horaDeTiempoTotal)+this.timestrToSec(cantidadDeTiempo));
              });
              var array = horaDeTiempoTotal.split(":");
              var seconds = (parseInt(array[0], 10) * 60 * 60) + (parseInt(array[1], 10) * 60) + parseInt(array[2], 10)
              dia27=seconds;
            break;
            case "28":
              var arrayDeMaterias=diaDeAgua.materiasEstudiadas;
              var horaDeTiempoTotal:any="00:00:00";;
              arrayDeMaterias.forEach((element:any) => {
                var cantidadDeTiempo=element.cantidadDeTiempo;
                horaDeTiempoTotal=this.formatTime(this.timestrToSec(horaDeTiempoTotal)+this.timestrToSec(cantidadDeTiempo));
              });
              var array = horaDeTiempoTotal.split(":");
              var seconds = (parseInt(array[0], 10) * 60 * 60) + (parseInt(array[1], 10) * 60) + parseInt(array[2], 10)
              dia28=seconds;
            break;
            case "29":
              var arrayDeMaterias=diaDeAgua.materiasEstudiadas;
              var horaDeTiempoTotal:any="00:00:00";;
              arrayDeMaterias.forEach((element:any) => {
                var cantidadDeTiempo=element.cantidadDeTiempo;
                horaDeTiempoTotal=this.formatTime(this.timestrToSec(horaDeTiempoTotal)+this.timestrToSec(cantidadDeTiempo));
              });
              var array = horaDeTiempoTotal.split(":");
              var seconds = (parseInt(array[0], 10) * 60 * 60) + (parseInt(array[1], 10) * 60) + parseInt(array[2], 10)
              dia29=seconds;
            break;
            case "30":
              var arrayDeMaterias=diaDeAgua.materiasEstudiadas;
              var horaDeTiempoTotal:any="00:00:00";;
              arrayDeMaterias.forEach((element:any) => {
                var cantidadDeTiempo=element.cantidadDeTiempo;
                horaDeTiempoTotal=this.formatTime(this.timestrToSec(horaDeTiempoTotal)+this.timestrToSec(cantidadDeTiempo));
              });
              var array = horaDeTiempoTotal.split(":");
              var seconds = (parseInt(array[0], 10) * 60 * 60) + (parseInt(array[1], 10) * 60) + parseInt(array[2], 10)
              dia30=seconds;
              break;
            case "31":
              var arrayDeMaterias=diaDeAgua.materiasEstudiadas;
              var horaDeTiempoTotal:any="00:00:00";;
              arrayDeMaterias.forEach((element:any) => {
                var cantidadDeTiempo=element.cantidadDeTiempo;
                horaDeTiempoTotal=this.formatTime(this.timestrToSec(horaDeTiempoTotal)+this.timestrToSec(cantidadDeTiempo));
              });
              var array = horaDeTiempoTotal.split(":");
              var seconds = (parseInt(array[0], 10) * 60 * 60) + (parseInt(array[1], 10) * 60) + parseInt(array[2], 10)
              dia31=seconds;
              break;
          }
          //
          nuevoControlDeAgua.push(diaDeAgua)
        }
      }
    });
    this.controlDeEstudioActualizado=nuevoControlDeAgua;
    let startDateArry: any[] = [];
    let blinkArry: any[] = [];
    for(var i=0; i<31;i++){
      startDateArry.push(i);
    }

   
   
    blinkArry.push(0);
    blinkArry.push(dia1);
    blinkArry.push(dia2);
    blinkArry.push(dia3);
    blinkArry.push(dia4);
    blinkArry.push(dia5);
    blinkArry.push(dia6);
    blinkArry.push(dia7);
    blinkArry.push(dia8);
    blinkArry.push(dia9);
    blinkArry.push(dia10);
    blinkArry.push(dia11);
    blinkArry.push(dia12);
    blinkArry.push(dia13);
    blinkArry.push(dia14);
    blinkArry.push(dia15);
    blinkArry.push(dia16);
    blinkArry.push(dia17);
    blinkArry.push(dia18);
    blinkArry.push(dia19);
    blinkArry.push(dia20);
    blinkArry.push(dia21);
    blinkArry.push(dia22);
    blinkArry.push(dia23);
    blinkArry.push(dia24);
    blinkArry.push(dia25);
    blinkArry.push(dia26);
    blinkArry.push(dia27);
    blinkArry.push(dia28);
    blinkArry.push(dia29);
    blinkArry.push(dia30);
    blinkArry.push(dia31);
    this.controlDeEstudiobarChartData = [{ data: blinkArry, label: 'Tiempo estudiado durante el día', backgroundColor: this.colorDeFondoGraficos, borderColor: this.colorDeFondoGraficos, hoverBackgroundColor: this.colorDeFondoGraficos, hoverBorderColor: this.colorDeFondoGraficos}];
    this.controlDeEstudiobarChartLabels = [startDateArry];
    this.controlDeEstudiobarChartLabels = startDateArry;
  }
   timestrToSec(timestr:any) {
    var parts = timestr.split(":");
    return (parts[0] * 3600) +
           (parts[1] * 60) +
           (+parts[2]);
  }
  
   pad(num:any) {
    if(num < 10) {
      return "0" + num;
    } else {
      return "" + num;
    }
  }
  
   formatTime(seconds:any) {
    return [this.pad(Math.floor(seconds/3600)),
            this.pad(Math.floor(seconds/60)%60),
            this.pad(seconds%60),
            ].join(":");
  }

  public misLibrosbarChartLabels: Label[] = [];
  public misLibrosbarChartType: ChartType = 'bar';
  public misLibrosbarChartLegend = true;
  public misLibrosbarChartPlugins = [];
  public misLibrosbarChartData: ChartDataSets[] = [];

  public iniciarlizarDiagramaMisLibros(anio:any){
   
    var mes1=0;
    var mes2=0;
    var mes3=0;
    var mes4=0;
    var mes5=0;
    var mes6=0;
    var mes7=0;
    var mes8=0;
    var mes9=0;
    var mes10=0;
    var mes11=0;
    var mes12=0;

    
    this.listaDeLibros.forEach((diaDeAgua:any) => {
    
      var arrayFecha=diaDeAgua.fecha.split('-');
      var anioStr=arrayFecha[0];
      var mesStr=arrayFecha[1];
      if(anioStr==anio){
        this.listaDeLibrosActualizado.push(diaDeAgua);
        switch(mesStr){
          case "1":
            mes1++;
            break;
          case "2":
            mes2++;
            break;
          case "3":
            mes3++;
            break;
          case "4":
            mes4++;
            break;
          case "5":
            mes5++;
            break;
          case "6":
            mes6++;
            break;
          case "7":
            mes7++;
            break;
          case "8":
            mes8++;
            break;
          case "9":
            mes9++;
            break;
          case "10":
            mes10++;
            break;
          case "11":
            mes11++;
            break;
          case "12":
            mes12++;
            break;  
        }
      }
    });
    let startDateArry: any[] = [];
    let blinkArry: any[] = [];

    for(var i=0;i<13;i++){
      startDateArry.push(i);
    }
    blinkArry.push(0);
    blinkArry.push(mes1);
    blinkArry.push(mes2);
    blinkArry.push(mes3);
    blinkArry.push(mes4);
    blinkArry.push(mes5);
    blinkArry.push(mes6);
    blinkArry.push(mes7);
    blinkArry.push(mes8);
    blinkArry.push(mes9);
    blinkArry.push(mes10);
    blinkArry.push(mes11);
    blinkArry.push(mes12);
  
    this.misLibrosbarChartData = [{ data: blinkArry, label: 'Cantidad de libros registrados por mes', backgroundColor: this.colorDeFondoGraficos, borderColor: this.colorDeFondoGraficos, hoverBackgroundColor: this.colorDeFondoGraficos, hoverBorderColor: this.colorDeFondoGraficos}];
    this.misLibrosbarChartLabels = [startDateArry];
    this.misLibrosbarChartLabels = startDateArry;
  }
  public misCancionesbarChartLabels: Label[] = [];
  public misCancionesbarChartType: ChartType = 'bar';
  public misCancionesbarChartLegend = true;
  public misCancionesbarChartPlugins = [];
  public misCancionesbarChartData: ChartDataSets[] = [];

  public iniciarlizarDiagramaMisCanciones(anio:any){
   
    var mes1=0;
    var mes2=0;
    var mes3=0;
    var mes4=0;
    var mes5=0;
    var mes6=0;
    var mes7=0;
    var mes8=0;
    var mes9=0;
    var mes10=0;
    var mes11=0;
    var mes12=0;

    
    this.listaDeCanciones.forEach((diaDeAgua:any) => {
    
      var arrayFecha=diaDeAgua.fecha.split('-');
      var anioStr=arrayFecha[0];
      var mesStr=arrayFecha[1];
      if(anioStr==anio){
         this.listaDeCancionesActualizado.push(diaDeAgua);
        switch(mesStr){
          case "1":
            mes1++;
            break;
          case "2":
            mes2++;
            break;
          case "3":
            mes3++;
            break;
          case "4":
            mes4++;
            break;
          case "5":
            mes5++;
            break;
          case "6":
            mes6++;
            break;
          case "7":
            mes7++;
            break;
          case "8":
            mes8++;
            break;
          case "9":
            mes9++;
            break;
          case "10":
            mes10++;
            break;
          case "11":
            mes11++;
            break;
          case "12":
            mes12++;
            break;  
        }
      }
    });
    let startDateArry: any[] = [];
    let blinkArry: any[] = [];

    for(var i=0;i<13;i++){
      startDateArry.push(i);
    }
    blinkArry.push(0);
    blinkArry.push(mes1);
    blinkArry.push(mes2);
    blinkArry.push(mes3);
    blinkArry.push(mes4);
    blinkArry.push(mes5);
    blinkArry.push(mes6);
    blinkArry.push(mes7);
    blinkArry.push(mes8);
    blinkArry.push(mes9);
    blinkArry.push(mes10);
    blinkArry.push(mes11);
    blinkArry.push(mes12);
  
    this.misCancionesbarChartData = [{ data: blinkArry, label: 'Cantidad de canciones registradas por mes', backgroundColor: this.colorDeFondoGraficos, borderColor: this.colorDeFondoGraficos, hoverBackgroundColor: this.colorDeFondoGraficos, hoverBorderColor: this.colorDeFondoGraficos}];
    this.misCancionesbarChartLabels = [startDateArry];
    this.misCancionesbarChartLabels = startDateArry;
  }
  public misMetasSocialesbarChartLabels: Label[] = [];
  public misMetasSocialesbarChartType: ChartType = 'bar';
  public misMetasSocialesbarChartLegend = true;
  public misMetasSocialesbarChartPlugins = [];
  public misMetasSocialesbarChartData: ChartDataSets[] = [];

  public iniciarlizarDiagramaMisMetasSociales(anio:any){
   
    var mes1=0;
    var mes2=0;
    var mes3=0;
    var mes4=0;
    var mes5=0;
    var mes6=0;
    var mes7=0;
    var mes8=0;
    var mes9=0;
    var mes10=0;
    var mes11=0;
    var mes12=0;

    
    this.listaDeMetasPersonales.forEach((diaDeAgua:any) => {
    
      var arrayFecha=diaDeAgua.fechaDeRegistro.split('-');
      var anioStr=arrayFecha[0];
      var mesStr=arrayFecha[1];
      if(anioStr==anio){
        this.listaDeMetasPersonalesActualizado.push(diaDeAgua);
        switch(mesStr){
          case "1":
            mes1++;
            break;
          case "2":
            mes2++;
            break;
          case "3":
            mes3++;
            break;
          case "4":
            mes4++;
            break;
          case "5":
            mes5++;
            break;
          case "6":
            mes6++;
            break;
          case "7":
            mes7++;
            break;
          case "8":
            mes8++;
            break;
          case "9":
            mes9++;
            break;
          case "10":
            mes10++;
            break;
          case "11":
            mes11++;
            break;
          case "12":
            mes12++;
            break;  
        }
      }
    });
    let startDateArry: any[] = [];
    let blinkArry: any[] = [];

    for(var i=0;i<13;i++){
      startDateArry.push(i);
    }
    blinkArry.push(0);
    blinkArry.push(mes1);
    blinkArry.push(mes2);
    blinkArry.push(mes3);
    blinkArry.push(mes4);
    blinkArry.push(mes5);
    blinkArry.push(mes6);
    blinkArry.push(mes7);
    blinkArry.push(mes8);
    blinkArry.push(mes9);
    blinkArry.push(mes10);
    blinkArry.push(mes11);
    blinkArry.push(mes12);
  
    this.misMetasSocialesbarChartData = [{ data: blinkArry, label: 'Cantidad de metas registradas por mes', backgroundColor: this.colorDeFondoGraficos, borderColor: this.colorDeFondoGraficos, hoverBackgroundColor: this.colorDeFondoGraficos, hoverBorderColor: this.colorDeFondoGraficos}];
    this.misMetasSocialesbarChartLabels = [startDateArry];
    this.misMetasSocialesbarChartLabels = startDateArry;
  }
  public misMetasPersonalesbarChartLabels: Label[] = [];
  public misMetasPersonalesbarChartType: ChartType = 'bar';
  public misMetasPersonalesbarChartLegend = true;
  public misMetasPersonalesbarChartPlugins = [];
  public misMetasPersonalesbarChartData: ChartDataSets[] = [];
  public iniciarlizarDiagramaMisMetasPersonales(anio:any,mes:any){
    var nuevoControlDeAgua:any=[];
    this.listaMetasSociales.forEach((diaDeAgua:any) => {
      console.log("Array metas sociales");
      console.log(diaDeAgua);
      var arrayFecha=diaDeAgua.fechaDeCompletitud.split('-');
      var anioStr=arrayFecha[2];
      var mesStr=arrayFecha[1];
      if(anioStr==anio){
        if(mesStr==mes){
          nuevoControlDeAgua.push(diaDeAgua)
        }
      }
    });

    let startDateArry: any[] = [];
    let blinkArry: any[] = [];
    startDateArry.push("Tender la cama");
    startDateArry.push("Ordenar la habitación");
    startDateArry.push("Bañarse");
    startDateArry.push("Desayuno saludable");
    startDateArry.push("Ejercitarse");
    startDateArry.push("Mimarse");
    startDateArry.push("Almuerzo saludable");
    startDateArry.push("Estudiar");
    startDateArry.push("Hablar con amigos");
    startDateArry.push("Jugar con mi mascota");
    startDateArry.push("pasar tiempo en familia");
    startDateArry.push("Leer");

    var cantidadMeta1=0;
    var cantidadMeta2=0;
    var cantidadMeta3=0;
    var cantidadMeta4=0;
    var cantidadMeta5=0;
    var cantidadMeta6=0;
    var cantidadMeta7=0;
    var cantidadMeta8=0;
    var cantidadMeta9=0;
    var cantidadMeta10=0;
    var cantidadMeta11=0;
    var cantidadMeta12=0;
    nuevoControlDeAgua.forEach((element:any) => {
      switch(element.tipoDeActividad){
        case "Tender la cama":
          cantidadMeta1++;
        break;
        case "Ordenar la habitación":
          cantidadMeta2++;
        break;
        case "Bañarse":
          cantidadMeta3++;
        break;
        case "Desayuno saludable":
          cantidadMeta4++;
        break;
        case "Ejercitarse":
          cantidadMeta5++;
        break;
        case "Mimarse":
          cantidadMeta6++;
        break;
        case "Almuerzo saludable":
          cantidadMeta7++;
        break;
        case "Estudiar":
          cantidadMeta8++;
        break;
        case "Hablar con amigos":
          cantidadMeta9++;
        break;
        case "Jugar con mi mascota":
          cantidadMeta10++;
        break;
        case "pasar tiempo en familia":
          cantidadMeta11++;
        break;
        case "Leer":
          cantidadMeta12++;
        break;
      }
    });
    blinkArry.push(cantidadMeta1);
    blinkArry.push(cantidadMeta2);
    blinkArry.push(cantidadMeta3);
    blinkArry.push(cantidadMeta4);
    blinkArry.push(cantidadMeta5);
    blinkArry.push(cantidadMeta6);
    blinkArry.push(cantidadMeta7);
    blinkArry.push(cantidadMeta8);
    blinkArry.push(cantidadMeta9);
    blinkArry.push(cantidadMeta10);
    blinkArry.push(cantidadMeta11);
    blinkArry.push(cantidadMeta12);
    this.misMetasPersonalesbarChartData = [{ data: blinkArry, label: 'Dias marcados en cada meta durante el mes', backgroundColor: this.colorDeFondoGraficos, borderColor: this.colorDeFondoGraficos, hoverBackgroundColor: this.colorDeFondoGraficos, hoverBorderColor: this.colorDeFondoGraficos}];
    this.misMetasPersonalesbarChartLabels = [startDateArry];
    this.misMetasPersonalesbarChartLabels = startDateArry;
  }
}
