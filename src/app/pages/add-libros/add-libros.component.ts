import { Component } from '@angular/core';
import { LibrosService } from 'src/app/shared/servicio.service';
import { Libro } from 'src/app/models/libro';
import { UsuarioService } from 'src/app/shared/usuario.service';


@Component({
  selector: 'app-add-libros',
  templateUrl: './add-libros.component.html',
  styleUrls: ['./add-libros.component.css']
})
export class AddLibrosComponent {

  constructor(private LibrosService: LibrosService, private usuarioService: UsuarioService){}

  
  addLibro(titulo:string, tipoLibro:string, autor:string, precio:string, photo:string, id_libro:string){
    const nuevoLibro = new Libro(titulo, tipoLibro, autor, parseInt(precio), photo, parseInt(id_libro), this.usuarioService.usuario.id_usuario);
    this.LibrosService.add(nuevoLibro).subscribe()
  }
}
