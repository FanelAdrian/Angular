import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})


export class PerfilComponent {
  public standarUser: Usuario;

  constructor(private usuarioService: UsuarioService) {
    this.standarUser = new Usuario( "User Name", "Last Name", "Email", "/assets/img/user.webp", "Pasword", 0)
    this.standarUser.nombre = this.usuarioService.usuario.nombre,
    this.standarUser.apellidos = this.usuarioService.usuario.apellidos,
    this.standarUser.correo = this.usuarioService.usuario.correo,
    this.standarUser.url = this.usuarioService.usuario.url
  }
  enviarInfo(nuevoNombre:string, nuevosApellidos:string, nuevoCorreo:string, nuevaImg:string){
  }
}
   