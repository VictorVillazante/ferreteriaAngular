import { Component} from '@angular/core';
import { Carrito, CarritoService } from '../../../services/carrito.service';
import { ProductosService } from '../../../services/productos.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
})
export class CarritoComponent{
  productoCarrito: Carrito[] = [];
  total: any;
  constructor( private carritoService: CarritoService, private productosService: ProductosService, private router: Router) {
    this.obtenerCarrito();
  }
  obtenerCarrito(){
    this.productoCarrito = this.carritoService.obtenerCarrito();
  }
  obtenerTotal(){
    this.total = 0;
    for (const producto of this.productoCarrito){
      this.total += producto.precio;
    }
    return this.total;
  }
  obtenerTotalIVA(){
    return this.total * 1.13;
  }
  eliminar(producto: Carrito){
    if (confirm('Está seguro que desea eliminar el producto?')){
      this.productosService.recuperarStock(producto);
      this.productoCarrito = this.productoCarrito.filter( x=> x !== producto);
    }
    this.carritoService.establecerCarrito(this.productoCarrito);
    console.log(this.productoCarrito);
  }
}
