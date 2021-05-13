import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  personajes:any[];
  paginaActual: number;
  numPaginas: number;
  

  constructor(private apiService: ApiService){
    this.paginaActual = 1;
  }

  ngOnInit(){
    this.apiService.getPersonajes() // <--- es una promesa
      .then(response =>{
        this.personajes = response.results;
        this.numPaginas = response.info.pages;

        /*pintar todos los datos de los personajes en html
        -nombre, imagen, especie, planeta origen
        - si está vivo, el borde sale en verde y si está muerto sale en rojo
        -Si no se sabe, sale en gris*/ 
      })
      .catch(error => console.log(error));
  }
  async onClick(siguiente: boolean){

    if(siguiente) {
      this.paginaActual++;
    }else{ this.paginaActual--;
    }
    const response = await this.apiService.getPersonajes(this.paginaActual)
    this.personajes = response.results //


    //bloquear los botones

  }
}
