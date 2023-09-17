import { Component, OnInit } from '@angular/core';
import {FormsModule, FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-finalizar-compra',
  templateUrl: './finalizar_compra.component.html',
})
export class FinalizarCompraComponent implements OnInit {
  form = new FormGroup({
    nombre: new FormControl('', Validators.required),
    ci: new FormControl('', Validators.required),
    direccion: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required),
    correo: new FormControl('', Validators.required),
    fecha: new FormControl('', Validators.required),
    consulta: new FormControl('', Validators.required)
  });
  constructor(  ) {}

  ngOnInit(): void {
  }
  finalizarCompra(){
    alert(`La venta se registro con los siguientes datos:
Nombre: ${this.form.value.nombre}
Ci: ${this.form.value.ci}
Direccion: ${this.form.value.direccion}
Telefono: ${this.form.value.telefono}
Correo: ${this.form.value.correo}
Fecha: ${this.form.value.fecha}
Consulta: ${this.form.value.consulta}`);
  }
}
