import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { FormularioRegistroComponent } from './component/formulario-registro/formulario-registro.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LibrosComponent } from './pages/libros/libros.component';
import { RefPipe } from './pipe/ref.pipe';
import { AddLibrosComponent } from './pages/add-libros/add-libros.component';
import { UpdateLibrosComponent } from './pages/update-libros/update-libros.component';
import { LoginComponent } from './pages/login/login.component';
import { FormularioLoginComponent } from './component/formulario-login/formulario-login.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FormularioRegistroComponent,
    RegistroComponent,
    LibrosComponent,
    RefPipe,
    AddLibrosComponent,
    UpdateLibrosComponent,
    LoginComponent,
    FormularioLoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
