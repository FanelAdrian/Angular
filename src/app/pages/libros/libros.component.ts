import { Component } from '@angular/core';
import { Libro } from 'src/app/models/libro';


@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent {
  public libros: Libro[];

  constructor() {
    this.libros = [
      new Libro("Vas a ser Papá", "dura", "Mario Gundel", 20, "https://m.media-amazon.com/images/I/6172XjQs81L.jpg", 1246),
      new Libro("Kafka en la Orilla", "dura", "Haruki Muramaki", 18, "https://m.media-amazon.com/images/I/81dXE5Z4mGL.jpg"),
      new Libro("El principito", "blanda", "Anttoine de Saint-Exupéy", 15, "https://cdn.discordapp.com/attachments/1027696998402498581/1047628832217251881/unknown.png"),
      new Libro("Kika super bruja ", "blanda", "Marian Canister", 11, "https://m.media-amazon.com/images/I/71Pfs+pyIuL.jpg"),
      new Libro("El metal Perdido", "blanda", "Brandon sanderson", 12, "https://m.media-amazon.com/images/I/41wXLjxOSpL._SX324_BO1,204,203,200_.jpg",75454),
      new Libro("El duque y yo", "dura", "Julia Quinn", 15, "https://images.cdn1.buscalibre.com/fit-in/360x360/dc/e6/dce635d842eee09468be8f5d457078e1.jpg"),
      new Libro("La muerte del Comendador", "dura", "Haruki Muramaki", 20, "https://m.media-amazon.com/images/I/91i1BD3+OcL.jpg",43466),
   ]
   }
  enviarLibro(titulo:string, tipoTapa:string, autor:string, precio:number, portada:string, IdLibro:number=0,IdUsuario:number=0){
    const nuevoLibro:Libro = new Libro(titulo,tipoTapa,autor,precio,portada,IdLibro,IdUsuario)
   this.libros.push(nuevoLibro);
  }
}


