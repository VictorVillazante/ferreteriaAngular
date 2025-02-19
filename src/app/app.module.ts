import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { InicioComponent } from './components/inicio/inicio.component';

import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { Carrito, CarritoService } from './services/carrito.service';
import { CarritoComponent } from './components/shared/carrito/carrito.component';
import { ProductosService } from './services/productos.service';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FinalizarCompraComponent } from './components/finalizar_compra/finalizar_compra.component';
import { ListadoComponent } from './components/listado/listado.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { APP_ROUTING } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    ContactosComponent,
    FinalizarCompraComponent,
    InicioComponent,
    ListadoComponent,
    LoginComponent,
    NosotrosComponent,
    TiendaComponent,
    CarritoComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    APP_ROUTING
  ],
  providers: [
    CarritoService,
    ProductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
