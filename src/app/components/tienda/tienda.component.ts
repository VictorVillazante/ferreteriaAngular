import { Component, OnInit } from '@angular/core';
import { ProductosService, Producto } from '../../services/productos.service';
import { CarritoService } from '../../services/carrito.service';
@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
})
export class TiendaComponent implements OnInit {
  productos: Producto[];
  constructor( private productosService: ProductosService, private carritoService: CarritoService) {
    this.productos = this.productosService.getProductos();
  }

  ngOnInit(): void {
  }
  aniadirCarrito(producto: Producto){
    this.carritoService.añadirCarrito(producto);
    this.productosService.reduceStock(producto);
  }
}
