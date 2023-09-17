import { Injectable } from '@angular/core';
import { Carrito } from './carrito.service';
@Injectable()
export class ProductosService{
    private productos: Producto[] = [
        {
            id: 1,
            nombre: 'Puerta de cedro 2x1',
            stock: 5,
            precio: 1000,
            img: 'puerta cedro principal.jpg'
        },
        {
            id: 2,
            nombre: 'Puerta de trupan 2x90',
            stock: 5,
            precio: 550,
            img: 'puerta con vidriera.jpg'

        },
        {
            id: 3,
            nombre: 'Puerta laurel 190x90',
            stock: 5,
            precio: 800,
            img: 'puerta laurel.jpg'

        },
        {
            id: 4,
            nombre: 'Ventana desplazable 150x1',
            stock: 5,
            precio: 200,
            img: 'ventanaDesplazable.jpg'

        },
        {
            id: 5,
            nombre: 'Colocado de ventana',
            stock: 5,
            precio: 40,
            img: 'ventanaPuesta.jpg'

        },
        {
            id: 6,
            nombre: 'Ventana 12 divisiones 2x1',
            stock: 5,
            precio: 350,
            img: 'ventanaDoceDivisiones.jpg'

        },
        {
            id: 7,
            nombre: 'Caja de ceramica bambu',
            stock: 20,
            precio: 78,
            img: 'ceramicaBambu.jpg'

        },
        {
            id: 8,
            nombre: 'Caja de ceramica terracota',
            stock: 20,
            precio: 75,
            img: 'ceramicaTerracota.jpg'

        },
        {
            id: 9,
            nombre: 'Caja de ceramica visage vitoriano',
            stock: 25,
            precio: 72,
            img: 'ceramicaVisageVitoriano.jpg'

        }
      ];
    getProductos(){
        return this.productos;
    }
    reduceStock(producto: Producto){
        for (const productoB of this.productos){
            if (productoB.id === producto.id){
                this.productos[this.productos.indexOf(productoB)].stock--;
            }
        }
    }
    recuperarStock(producto: Carrito){
        for (const productoB of this.productos){
            if (productoB.id === producto.id){
                this.productos[this.productos.indexOf(productoB)].stock += producto.cantidad;
            }
        }
    }
    establecerProductos(arrayProductos: Producto[]){
        this.productos = arrayProductos;
        console.log(this.productos);
    }
}
export class Producto{
    id: number;
    nombre: string;
    precio: number;
    stock: number;
    img: string;
}
