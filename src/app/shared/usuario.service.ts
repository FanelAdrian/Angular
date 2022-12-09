import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
private url:string;
public logueado:boolean;
public usuario: Usuario;
  constructor(private httpClient:HttpClient) {
    this.logueado = false;
   }
   register(usuario:Usuario){
    // suscribe puede tener dos callbacks. la primera hace referencia a next, que es el siguiente valor que devuelve el obserbable y error que si ocurre un error devuelve el error.
    // estas callbacks se pueden pasar en un objeto para que sean mas visibles ejem { next: () => {}, error: () =>{}}
   return this.httpClient.post('http://localhost:3500/registro', usuario)
   }
   login(usuario:Usuario){
   return this.httpClient.post('http://localhost:3500/login', {correo: usuario.correo, password: usuario.password})
   }
}




