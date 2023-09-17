import { Injectable } from '@angular/core';
import { Producto } from './productos.service';
@Injectable()
export class CarritoService{
    carrito: Carrito[] = [];
    acierto: boolean;
  añadirCarrito(producto: Producto){
    this.acierto = false;
    for (const productoC of this.carrito){
      if (productoC.id === producto.id){
        this.acierto = true;
        productoC.cantidad++;
        productoC.precio = producto.precio * productoC.cantidad;
      }
    }
    if (!this.acierto){
      this.carrito.push({
        id: producto.id,
        nombre: producto.nombre,
        cantidad: 1,
        precio: producto.precio
      });
    }
    console.log(this.carrito);
  }
  obtenerCarrito(){
      return this.carrito;
  }
  establecerCarrito(carrito: Carrito[]){
    this.carrito = carrito;
  }
}
export interface Carrito{
    id: number;
    nombre: string;
    cantidad: number;
    precio: number;
}
