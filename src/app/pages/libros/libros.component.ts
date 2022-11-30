import { Component } from '@angular/core';
import { Libro } from 'src/app/models/libro';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent {
  public standarBook: Libro;

  constructor() {
    this.standarBook = new Libro("Title", "Tipe", "Autor Name", 0, "Photo")
  }
  enviarInfo2(nuevoTitulo: string, nuevoTipo: string, nuevoAutor: string, nuevoPrecio: number, nuevaFoto: string) {
    this.standarBook.titulo = nuevoTitulo,
      this.standarBook.tipoLibro = nuevoTipo,
      this.standarBook.autor = nuevoAutor,
      this.standarBook.precio = nuevoPrecio,
      this.standarBook.photo = nuevaFoto
  }
}
