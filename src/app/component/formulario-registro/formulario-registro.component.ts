import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent {

  constructor(private usuarioService: UsuarioService, private router: Router){}
  registro(nombre:string, apellidos:string, correo:string, url:string, password:string, confirmarPassword:string){
   if(password === confirmarPassword){
   const nuevoUsuario = new Usuario(nombre, apellidos, correo, url, password);
    this.usuarioService.register(nuevoUsuario).subscribe((id)=>{
      this.router.navigateByUrl("login")
      console.log(id);
    },
      ()=>{ this.usuarioService.logueado = false});
  }else console.log('las contraseñas no coinciden')
}
}

