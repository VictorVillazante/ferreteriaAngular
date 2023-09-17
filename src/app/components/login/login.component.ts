import { Component, OnInit } from '@angular/core';
import { FormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    usuario: new FormControl('', Validators.required),
    contraseña: new FormControl('', Validators.required)
  });
  ingresar(){
    if (this.form.value.usuario === 'admin' && this.form.value.contraseña === '657483'){
      this.router.navigate(['listado']);
    }else{
      console.log('Datos incorrectos ingresados');
    }
  }
  constructor( private router: Router ) { }

  ngOnInit(): void {
  }
}
