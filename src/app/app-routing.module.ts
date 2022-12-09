import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { LibrosComponent } from './pages/libros/libros.component';
import { AddLibrosComponent } from './pages/add-libros/add-libros.component';
import { UpdateLibrosComponent } from './pages/update-libros/update-libros.component';
import { LoginComponent } from './pages/login/login.component';
const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "registro", component: RegistroComponent},
  {path: "login", component: LoginComponent},
  {path: "", pathMatch: "full", redirectTo: "home"},
  {path: "perfil", component: PerfilComponent},
  {path: "libros", component: LibrosComponent},
  {path: "Añadir_Libros", component: AddLibrosComponent},
  {path: "Modificar_Libros", component: UpdateLibrosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
