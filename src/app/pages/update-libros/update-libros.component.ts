import { Component } from '@angular/core';
import { LibrosService } from 'src/app/shared/servicio.service';
import { Libro } from 'src/app/models/libro';

@Component({
  selector: 'app-update-libros',
  templateUrl: './update-libros.component.html',
  styleUrls: ['./update-libros.component.css']
})
export class UpdateLibrosComponent {

  constructor(private librosService: LibrosService){}

  editLibro(titulo:string, tipoLibro:string, autor:string, precio:string, photo:string, id_libro:string){

    const modificado = new Libro(titulo, tipoLibro, autor, parseInt(precio), photo, parseInt(id_libro));
    if(modificado.titulo == ''){
      modificado.titulo = null;
  }
  if(modificado.tipo == ''){
    modificado.tipo = null;
  }
  if(modificado.autor == ''){
    modificado.autor= null;
  }
  if(modificado.foto == ''){
    modificado.foto = null;
  }

   this.librosService.edit(modificado).subscribe();
  }
}



// const putStudent = async () => { 
//   let newlastName = document.getElementById("lastName").value;
//   let newfirstName = document.getElementById("firstName").value;
//   let newgroup = document.getElementById("group").value;
//   let newdateSignIn = document.getElementById("dateSignIn").value;
//   let id = document.getElementById("idStudent").value;
  
//   if(newlastName == ''){
//       newlastName = null;
//   }
//   if(newfirstName == ''){
//       newfirstName = null;
//   }
//   if(newgroup == ''){
//       newgroup= null;
//   }
//   if(newdateSignIn == ''){
//       newdateSignIn = null;
//   }
//   let student ={ student_id: id , first_name: newfirstName, last_name: newlastName  , group_id: newgroup, ddate_sign_in: newdateSignIn};