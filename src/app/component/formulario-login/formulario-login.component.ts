import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent {
constructor(private usuarioService: UsuarioService, private router: Router){}
  login(correo:string, password:string){
    
    const usuario = new Usuario(undefined, undefined, correo, undefined, password);
     this.usuarioService.login(usuario).subscribe((usuario: Usuario)=>{
      if (typeof usuario !== 'string'){
       this.usuarioService.logueado = true;
       this.usuarioService.usuario = usuario;
       this.router.navigateByUrl("libros")
     }else console.log("datos erroneos")
    },
       ()=>{ this.usuarioService.logueado = false});
 
 }
}
 