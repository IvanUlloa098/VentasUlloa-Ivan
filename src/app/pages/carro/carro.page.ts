import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/service/productos.service';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.page.html',
  styleUrls: ['./carro.page.scss'],
})
export class CarroPage implements OnInit {

  items: any

  constructor(private router: Router, private productosService: ProductosService, public readonly auth: AngularFireAuth) { }

  ngOnInit() {
    this.items = this.productosService.getCarro()
  }

  quitar(itemm: any) {
    itemm.activo = false
    this.productosService.saveCarro(itemm)
    this.router.navigate(['carro'])
  }

}
