import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  get logueado(): boolean{return this.usuarioService.logueado}
  constructor(private usuarioService: UsuarioService){}
}
