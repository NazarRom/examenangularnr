import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { CubosServices } from './service/cubos.service';
import { DetallesComponent } from './components/detalles/detalles.component';
import { MarcaComponent } from './components/marca/marca.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { PerfilService } from './service/perfil.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,MenuComponent, DetallesComponent, MarcaComponent, LoginComponent, RegisterComponent, PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, FormsModule
  ],
  providers: [CubosServices,PerfilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
