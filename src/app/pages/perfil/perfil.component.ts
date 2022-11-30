import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})


export class PerfilComponent {
  public standarUser: Usuario;

  constructor() {
    this.standarUser = new Usuario(0, "User Name", "Last Name", "Email", "/assets/img/user.webp", "Pasword")
  }
  enviarInfo(nuevoNombre:string, nuevosApellidos:string, nuevoCorreo:string, nuevaImg:string){
    this.standarUser.nombre = nuevoNombre,
    this.standarUser.apellidos = nuevosApellidos,
    this.standarUser.correo = nuevoCorreo,
    this.standarUser.url = nuevaImg
 }
}