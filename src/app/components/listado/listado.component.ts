import { Component, OnInit } from '@angular/core';
import { ProductosService, Producto } from '../../services/productos.service';
@Component({
  selector: 'app-heroe',
  templateUrl: './listado.component.html',
})
export class ListadoComponent implements OnInit {
  arrayProductos: Producto[];
  productoSeleccionado: Producto = new Producto();
  constructor( private productosService: ProductosService) {
    this.arrayProductos = productosService.getProductos();
    console.log(this.arrayProductos);
  }
  ngOnInit(): void {
  }
  establecerEdicion(producto: Producto){
    this.productoSeleccionado = producto;
  }
  adicionarEditar(){
    if (this.productoSeleccionado.id == null){
      this.productoSeleccionado.id = this.arrayProductos.length + 1 ;
      this.arrayProductos.push(this.productoSeleccionado);
    }
    this.productosService.establecerProductos(this.arrayProductos);
    this.productoSeleccionado = new Producto();
  }
  delete(){
    if (confirm('Está seguro que desea eliminar a el producto?')){
      this.arrayProductos = this.arrayProductos.filter(x=> x != this.productoSeleccionado);
      this.productoSeleccionado = new Producto();
    }
    this.productosService.establecerProductos(this.arrayProductos);
  }
}
