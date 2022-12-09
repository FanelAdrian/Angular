import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Libro } from '../models/libro';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  private libros: Libro[];

  constructor(private httpClient:HttpClient) { }
  // en el getall peidicamos que el tipo de dato que devuelve es un array de libros por lo tanto solo le pedimos que nos lo devuelva.
 
  // getAll(): Libro[] {
  //   return this.libros;
  // }
  getAll(userId:number){
    return this.httpClient.get('http://localhost:3500/libros', {params:{id_usuario: userId}})
  }
  // en el getOne le pasamos un parametro, en este caso la id y le idicamos que el dato que nos devuelva sea un objeto libro.
  //detro de la función realizamos la funcin .find que nos recorre un array y nos almacena el valor que recorre y lo compara con el parametro que le hemos pasado en getOne y nos lo devuelve.
  // con ese dato devuelto lo almacenamos en la variable librosOne y lo devolvemos.
  getOne(userId:number, id_libro:number){
    return this.httpClient.get('http://localhost:3500/libros', {params:{id_usuario: userId, id_libro}})
  }
// en esta funcion tenemos que pensar que estamos recibiendo el obgeto sibro, por lo tanto solo tenemos que almacenarlo en nuestra array.
add(libro:Libro) {
  return this.httpClient.post('http://localhost:3500/libros', libro)
  }

  edit(libro:Libro) {
    return this.httpClient.put('http://localhost:3500/libros', libro)
  }


  delete(id_libro:number) {
    return this.httpClient.delete('http://localhost:3500/libros',{body:{id_libro: id_libro}})

  }
}
