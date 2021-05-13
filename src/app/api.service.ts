import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { promise } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string;
  constructor(private httpClient : HttpClient) { 
    this.baseUrl = 'https://rickandmortyapi.com/api';
  }


//hacemos las peticiones al servicio
//hemos importado HttpClienteModule, hay una herramienta que nos permite realizar las peticiones, llamada, httpClient, lo inicializamos en el constructor, private httpCliente de tipo : HttpClient

//2 vamos a crear métodos pasra recuperar por ejemplo todos los personajes
//dependiendo que datos vamos a utilizar, vamos a la documentación de la API y nos indica GET y una url, por lo tanto, utilizaremos GET como método.


//Accedemos a la través de la URL

  getPersonajes(pPage: number = 1): Promise<any>{
  //GET https: //rickandmortyapi.com/api/character
  //todos los observables se pueden convertir en promesas

  return this.httpClient.get(`${this.baseUrl}/character/?page=${pPage}`).toPromise();
  }
}
