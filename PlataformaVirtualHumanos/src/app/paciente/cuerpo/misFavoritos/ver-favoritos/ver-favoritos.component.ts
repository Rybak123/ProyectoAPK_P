import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MisCancionesDAO} from '../../../../_services/MisCancionesServices/MisCancionesDAO'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AfterViewInit } from '@angular/core';
import { MisFavoritosDAO } from 'src/app/_services/MisFavoritosServices/MisFavoritosDAO';

@Component({
  selector: 'app-ver-favoritos',
  templateUrl: './ver-favoritos.component.html',
  styleUrls: ['./ver-favoritos.component.scss']
})
export class VerFavoritosComponent implements OnInit {

  formularioCrearFavorito:FormGroup|any; 
  FavoritoActual:any;
  listaDeFavoritos:any;
  tipoDeFavoritoActual:any;

  direccionLibroActualVisualizar:any;
  direccionLibroActual1:any;
  direccionLibroActual2:any;
  direccionLibroActual3:any;
  direccionLibroActual4:any;
  direccionLibroActual5:any;
  direccionLibroActual6:any;
  botonesPaginacion:any;
  paginaActual:any;
  //Tarjeta1
  tarjeta1_clasificacion:any;
  tarjeta1_titulo:any;
  tarjeta1_descripcion:any;
  tarjeta1_imagen:any;
  //Tarjeta2
  tarjeta2_clasificacion:any;
  tarjeta2_titulo:any;
  tarjeta2_descripcion:any;
  tarjeta2_imagen:any;
  //Tarjeta3
  tarjeta3_clasificacion:any;
  tarjeta3_titulo:any;
  tarjeta3_descripcion:any;
  tarjeta3_imagen:any;
  //Tarjeta4
  tarjeta4_clasificacion:any;
  tarjeta4_titulo:any;
  tarjeta4_descripcion:any;
  tarjeta4_imagen:any;
  //Tarjeta5
  tarjeta5_clasificacion:any;
  tarjeta5_titulo:any;
  tarjeta5_descripcion:any;
  tarjeta5_imagen:any;
  //Tarjeta6
  tarjeta6_clasificacion:any;
  tarjeta6_titulo:any;
  tarjeta6_descripcion:any;
  tarjeta6_imagen:any;

  tarjeta1HTML:any;
  tarjeta2HTML:any;
  tarjeta3HTML:any;
  tarjeta4HTML:any;
  tarjeta5HTML:any;
  tarjeta6HTML:any;

  constructor(private http:HttpClient) {
    this.formularioCrearFavorito = new FormGroup({
      Titulo:new FormControl('',Validators.required),
      Imagen:new FormControl('',Validators.required),
      Clasificacion: new FormControl('',Validators.required),
      Descripcion:new FormControl('',Validators.required),
    });
  }

  ngOnInit(): void {
    this.botonesPaginacion=[];
    this.paginaActual=0;
    this.verFavoritos("cancion");
  }
  cambiarPagina(numeroPagina:any){
    this.paginaActual=(numeroPagina-1);
    this.verFavoritos(this.tipoDeFavoritoActual);
  }
  verFavoritos(tipoFavorito:any){
    this.botonesPaginacion=[];

    this.tarjeta1HTML=document.getElementById("carta1");
    this.tarjeta2HTML=document.getElementById("carta2");
    this.tarjeta3HTML=document.getElementById("carta3");
    this.tarjeta4HTML=document.getElementById("carta4");
    this.tarjeta5HTML=document.getElementById("carta5");
    this.tarjeta6HTML=document.getElementById("carta6");

    var imagenTargeta1:any=document.getElementById("estrellas_targeta1");
    var imagenTargeta2:any=document.getElementById("estrellas_targeta2");
    var imagenTargeta3:any=document.getElementById("estrellas_targeta3");
    var imagenTargeta4:any=document.getElementById("estrellas_targeta4");
    var imagenTargeta5:any=document.getElementById("estrellas_targeta5");
    var imagenTargeta6:any=document.getElementById("estrellas_targeta6");
    this.tipoDeFavoritoActual=tipoFavorito;
    var misFavoritosDAO=new MisFavoritosDAO(this.http);
    misFavoritosDAO.listarFavoritos(tipoFavorito)
    .then((respuesta:any) => {
      console.log(respuesta)
      var numeroConDecimal=respuesta.length/6;
      var numeroSinDecimal=Math.trunc(numeroConDecimal);
      if(numeroConDecimal>numeroSinDecimal){
        numeroSinDecimal++;
      }
      for(var j=0;j<numeroSinDecimal;j++){
        this.botonesPaginacion.push(j+1);
      }

      this.listaDeFavoritos=respuesta;
      var indiceTargeta1=(0+(6*this.paginaActual));
      var indiceTargeta2=(1+(6*this.paginaActual));
      var indiceTargeta3=(2+(6*this.paginaActual));
      var indiceTargeta4=(3+(6*this.paginaActual));
      var indiceTargeta5=(4+(6*this.paginaActual));
      var indiceTargeta6=(5+(6*this.paginaActual));
      if(respuesta[indiceTargeta1]!=null){
        if(respuesta[indiceTargeta1].clasificacion!=null){
          this.tarjeta1HTML.style.visibility="visible";
          this.tarjeta1_titulo=respuesta[indiceTargeta1].titulo;
          this.tarjeta1_descripcion=respuesta[indiceTargeta1].descripcion;
          if(respuesta[indiceTargeta1].clasificacion==0){
            imagenTargeta1.src="assets/img/0estrellas.png"
          }
          if(respuesta[indiceTargeta1].clasificacion==1){
            imagenTargeta1.src="assets/img/1estrellas.png"
          }
          if(respuesta[indiceTargeta1].clasificacion==2){
            imagenTargeta1.src="assets/img/2estrellas.png"
          }
          if(respuesta[indiceTargeta1].clasificacion==3){
            imagenTargeta1.src="assets/img/3estrellas.png"
          }
          if(respuesta[indiceTargeta1].clasificacion==4){
            imagenTargeta1.src="assets/img/4estrellas.png"
          }
          if(respuesta[indiceTargeta1].clasificacion==5){
            imagenTargeta1.src="assets/img/5estrellas.png"
          }
          this.direccionLibroActual1=respuesta[indiceTargeta1].imagen;
        }
      }
      else{
        this.tarjeta1HTML.style.visibility="hidden";
      }
      if(respuesta[indiceTargeta2]!=null){
        if(respuesta[indiceTargeta2].clasificacion!=null){
          this.tarjeta2HTML.style.visibility="visible";
          this.tarjeta2_titulo=respuesta[indiceTargeta2].titulo;
          this.tarjeta2_descripcion=respuesta[indiceTargeta2].descripcion;
          if(respuesta[indiceTargeta2].clasificacion==0){
            imagenTargeta2.src="assets/img/0estrellas.png"
          }
          if(respuesta[indiceTargeta2].clasificacion==1){
            imagenTargeta2.src="assets/img/1estrellas.png"
          }
          if(respuesta[indiceTargeta2].clasificacion==2){
            imagenTargeta2.src="assets/img/2estrellas.png"
          }
          if(respuesta[indiceTargeta2].clasificacion==3){
            imagenTargeta2.src="assets/img/3estrellas.png"
          }
          if(respuesta[indiceTargeta2].clasificacion==4){
            imagenTargeta2.src="assets/img/4estrellas.png"
          }
          if(respuesta[indiceTargeta2].clasificacion==5){
            imagenTargeta2.src="assets/img/5estrellas.png"
          }
          this.direccionLibroActual2=respuesta[indiceTargeta2].imagen;
        }
      }else{
        this.tarjeta2HTML.style.visibility="hidden";
      }
      if(respuesta[indiceTargeta3]!=null){
        if(respuesta[indiceTargeta3].clasificacion!=null){
          this.tarjeta3HTML.style.visibility="visible";
          this.tarjeta3_titulo=respuesta[indiceTargeta3].titulo;
          this.tarjeta3_descripcion=respuesta[indiceTargeta3].descripcion;
          if(respuesta[indiceTargeta3].clasificacion==0){
            imagenTargeta3.src="assets/img/0estrellas.png"
          }
          if(respuesta[indiceTargeta3].clasificacion==1){
            imagenTargeta3.src="assets/img/1estrellas.png"
          }
          if(respuesta[indiceTargeta3].clasificacion==2){
            imagenTargeta3.src="assets/img/2estrellas.png"
          }
          if(respuesta[indiceTargeta3].clasificacion==3){
            imagenTargeta3.src="assets/img/3estrellas.png"
          }
          if(respuesta[indiceTargeta3].clasificacion==4){
            imagenTargeta3.src="assets/img/4estrellas.png"
          }
          if(respuesta[indiceTargeta3].clasificacion==5){
            imagenTargeta3.src="assets/img/5estrellas.png"
          }
          this.direccionLibroActual3=respuesta[indiceTargeta3].imagen;
        }
      }else{
        this.tarjeta3HTML.style.visibility="hidden";
      }
      if(respuesta[indiceTargeta4]!=null){
        if(respuesta[indiceTargeta4].clasificacion!=null){
          this.tarjeta4HTML.style.visibility="visible";
          this.tarjeta4_titulo=respuesta[indiceTargeta4].titulo;
          this.tarjeta4_descripcion=respuesta[indiceTargeta4].descripcion;
          if(respuesta[indiceTargeta4].clasificacion==0){
            imagenTargeta4.src="assets/img/0estrellas.png"
          }
          if(respuesta[indiceTargeta4].clasificacion==1){
            imagenTargeta4.src="assets/img/1estrellas.png"
          }
          if(respuesta[indiceTargeta4].clasificacion==2){
            imagenTargeta4.src="assets/img/2estrellas.png"
          }
          if(respuesta[indiceTargeta4].clasificacion==3){
            imagenTargeta4.src="assets/img/3estrellas.png"
          }
          if(respuesta[indiceTargeta4].clasificacion==4){
            imagenTargeta4.src="assets/img/4estrellas.png"
          }
          if(respuesta[indiceTargeta4].clasificacion==5){
            imagenTargeta4.src="assets/img/5estrellas.png"
          }
          this.direccionLibroActual4=respuesta[indiceTargeta4].imagen;
        }
      }else{
        this.tarjeta4HTML.style.visibility="hidden";
      }
      if(respuesta[indiceTargeta5]!=null){
        if(respuesta[indiceTargeta5].clasificacion!=null){
          this.tarjeta5HTML.style.visibility="visible";
          this.tarjeta5_titulo=respuesta[indiceTargeta5].titulo;
          this.tarjeta5_descripcion=respuesta[indiceTargeta5].descripcion;
          if(respuesta[indiceTargeta5].clasificacion==0){
            imagenTargeta5.src="assets/img/0estrellas.png"
          }
          if(respuesta[indiceTargeta5].clasificacion==1){
            imagenTargeta5.src="assets/img/1estrellas.png"
          }
          if(respuesta[indiceTargeta5].clasificacion==2){
            imagenTargeta5.src="assets/img/2estrellas.png"
          }
          if(respuesta[indiceTargeta5].clasificacion==3){
            imagenTargeta5.src="assets/img/3estrellas.png"
          }
          if(respuesta[indiceTargeta5].clasificacion==4){
            imagenTargeta5.src="assets/img/4estrellas.png"
          }
          if(respuesta[indiceTargeta5].clasificacion==5){
            imagenTargeta5.src="assets/img/5estrellas.png"
          }
          this.direccionLibroActual5=respuesta[indiceTargeta5].imagen;
        }
      }else{
        this.tarjeta5HTML.style.visibility="hidden";
      }
      if(respuesta[indiceTargeta6]!=null){
        if(respuesta[indiceTargeta6].clasificacion!=null){
          this.tarjeta6HTML.style.visibility="visible";
          this.tarjeta6_titulo=respuesta[indiceTargeta6].titulo;
          this.tarjeta6_descripcion=respuesta[indiceTargeta6].descripcion;
          if(respuesta[indiceTargeta6].clasificacion==0){
            imagenTargeta6.src="assets/img/0estrellas.png"
          }
          if(respuesta[indiceTargeta6].clasificacion==1){
            imagenTargeta6.src="assets/img/1estrellas.png"
          }
          if(respuesta[indiceTargeta6].clasificacion==2){
            imagenTargeta6.src="assets/img/2estrellas.png"
          }
          if(respuesta[indiceTargeta6].clasificacion==3){
            imagenTargeta6.src="assets/img/3estrellas.png"
          }
          if(respuesta[indiceTargeta6].clasificacion==4){
            imagenTargeta6.src="assets/img/4estrellas.png"
          }
          if(respuesta[indiceTargeta6].clasificacion==5){
            imagenTargeta6.src="assets/img/5estrellas.png"
          }
          this.direccionLibroActual6=respuesta[indiceTargeta6].imagen;
        }
      }else{
        this.tarjeta6HTML.style.visibility="hidden";
      }
    }).catch((err:any) => {
      alert(err);
    });

  }
  visualizarFavorito(favoritoSeleccionado:any){
    switch(favoritoSeleccionado){
      case "t1":
        var indiceTargeta1=(0+(6*this.paginaActual));
        this.FavoritoActual=this.listaDeFavoritos[indiceTargeta1];
      break;
      case "t2":
        var indiceTargeta2=(1+(6*this.paginaActual));
        this.FavoritoActual=this.listaDeFavoritos[indiceTargeta2];
      break;
      case "t3":
        var indiceTargeta3=(2+(6*this.paginaActual));
        this.FavoritoActual=this.listaDeFavoritos[indiceTargeta3];
      break;
      case "t4":
        var indiceTargeta4=(3+(6*this.paginaActual));
        this.FavoritoActual=this.listaDeFavoritos[indiceTargeta4];
      break;
      case "t5":
        var indiceTargeta5=(4+(6*this.paginaActual));
        this.FavoritoActual=this.listaDeFavoritos[indiceTargeta5];
      break;
      case "t6":
        var indiceTargeta6=(5+(6*this.paginaActual));
        this.FavoritoActual=this.listaDeFavoritos[indiceTargeta6];
      break;
    }
    var contenedor1:any=document.getElementById("contenedor1");
    contenedor1.style.display="none";
    var contenedor2:any=document.getElementById("contenedor2");
    contenedor2.style.display="block";
    var imagenTargetaMuestra:any=document.getElementById("estrellas_targetaMuestra");
    this.formularioCrearFavorito.controls['Titulo'].setValue(this.FavoritoActual.titulo);
    if(this.FavoritoActual.clasificacion==0){
      imagenTargetaMuestra.src="assets/img/0estrellas.png"
    }
    if(this.FavoritoActual.clasificacion==1){
      imagenTargetaMuestra.src="assets/img/1estrellas.png"
    }
    if(this.FavoritoActual.clasificacion==2){
      imagenTargetaMuestra.src="assets/img/2estrellas.png"
    }
    if(this.FavoritoActual.clasificacion==3){
      imagenTargetaMuestra.src="assets/img/3estrellas.png"
    }
    if(this.FavoritoActual.clasificacion==4){
      imagenTargetaMuestra.src="assets/img/4estrellas.png"
    }
    if(this.FavoritoActual.clasificacion==5){
      imagenTargetaMuestra.src="assets/img/5estrellas.png"
    }
    this.direccionLibroActualVisualizar=this.FavoritoActual.imagen;
    //this.formularioCrearFavorito.controls['Clasificacion'].setValue(this.FavoritoActual.clasificacion);
    this.formularioCrearFavorito.controls['Descripcion'].setValue(this.FavoritoActual.descripcion);
  }
  GuardarCambiosFavorito(){
    var id=this.FavoritoActual._id;
    var titulo=this.formularioCrearFavorito.controls.Titulo.value;
    var imagen=this.formularioCrearFavorito.controls.Imagen.value;
    var clasificacion=this.formularioCrearFavorito.controls.Clasificacion.value;
    var descripcion=this.formularioCrearFavorito.controls.Descripcion.value;
    
    var misFavoritosDAO=new MisFavoritosDAO(this.http);
    misFavoritosDAO.update_Favorito(id,titulo,imagen,clasificacion,descripcion,this.tipoDeFavoritoActual)
    .then((respuesta:any) => {
      console.log(respuesta);
      
    }).catch((err:any) => {
      alert(err);
    });
  }
  
  eliminarFavorito(){
    var misFavoritosDAO=new MisFavoritosDAO(this.http);
    misFavoritosDAO.delete_Favorito(this.FavoritoActual._id,this.tipoDeFavoritoActual)
    .then((respuesta:any) => {
      console.log(respuesta);
    }).catch((err:any) => {
      alert(err);
    });
  }
  editarFavorito(){

  }
  verFavoritosDesdeEditar(){
    var contenedor2:any=document.getElementById("contenedor2");
    contenedor2.style.display="none";
    var contenedor1:any=document.getElementById("contenedor1");
    contenedor1.style.display="block";
    this.verFavoritos(this.tipoDeFavoritoActual);

  }
}
