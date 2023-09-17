import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
})
export class InicioComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }
  login(){
    this.router.navigate(['login']);
  }
}
