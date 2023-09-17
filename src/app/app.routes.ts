import { RouterModule, Routes } from '@angular/router';
import { ContactosComponent } from './components/contactos/contactos.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { LoginComponent } from './components/login/login.component';
import { ListadoComponent } from './components/listado/listado.component';
import { CarritoComponent } from './components/shared/carrito/carrito.component';
import { FinalizarCompraComponent } from './components/finalizar_compra/finalizar_compra.component';
const APP_ROUTES: Routes = [
    { path: 'listado', component: ListadoComponent },
    { path: 'finalizar_compra', component: FinalizarCompraComponent },
    { path: 'carrito', component: CarritoComponent },
    { path: 'contactos', component: ContactosComponent},
    { path: 'inicio', component: InicioComponent},
    { path: 'tienda', component: TiendaComponent},
    { path: 'nosotros', component: NosotrosComponent},
    { path: 'login', component: LoginComponent},

    { path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
